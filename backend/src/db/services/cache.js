import mongoose from "mongoose";
import chalk from "chalk";
import redis from "redis";

// Connect to redis at 127.0.0.1 port 6379 no password.
const client = redis.createClient(process.env.REDIS_URL);
const set = client.hSet.bind(client);
const get = client.hGet.bind(client);

client.on(
  "connect",
  console.log.bind(
    console,
    chalk.rgb(208, 60, 240)("Cache service is connected")
  )
);
client.on(
  "end",
  console.error.bind(console, chalk.italic.red("Cache service disconnected: "))
);
client.on(
  "reconnecting",
  console.log.bind(
    console,
    chalk.italic.yellow("Cache service reconnecting...")
  )
);
client.on(
  "error",
  console.error.bind(console, chalk.italic.red.inverse("Cache service error: "))
);
async function connectCacheSevice() {
  await client.connect();
}

//redis implementation
const exec = mongoose.Query.prototype.exec;
mongoose.Query.prototype.cache = function (
  options = { expiresIn: 60, ejectFields: [] }
) {
  this.useCache = true;
  this.expiresIn = options.expiresIn || 60;
  this.key = JSON.stringify(options.key || this.mongooseCollection.name);
  if (options.ejectFields && !Array.isArray(options.ejectFields)) {
    throw Error(
      `Expected the property 'ejectFields' provided as options in cache to be an array but intead received ${typeof options.ejectFields}`
    );
  }
  this.ejectFields = options.ejectFields || [];

  return this;
};
mongoose.Query.prototype.exec = async function () {
  if (!this.useCache) {
    console.log(chalk.yellow("NO CACHE APPLIED"));

    return await exec.apply(this, arguments);
  }
  console.log(chalk.green("Applying cache..."));
  const rest = this.getQuery();

  // remove properties that change too often creating new entries
  let rejects = this.ejectFields.map((field) => {
    delete rest[field];
    return field;
  });

  const field = JSON.stringify(
    Object.assign({}, rest, {
      collection: this.mongooseCollection.name,
      operation: this.op,
    })
  );

  this.key = JSON.parse(this.key);

  const cacheValue = await get(this.key, field);

  if (cacheValue) {
    const doc = JSON.parse(cacheValue);

    console.log("Cache from Redis: ", cacheValue);
    return Array.isArray(doc)
      ? doc.map((d) => new this.model(d))
      : typeof doc === "object"
      ? new this.model(doc)
      : doc;
  }

  console.log(chalk.redBright("Opps! Cache miss"));
  console.log("Fetching from database");

  //cache miss
  const result = await exec.apply(this, arguments);
  console.log("saving to cache the value: ", JSON.stringify(result));
  await set(this.key, field, JSON.stringify(result));
  client.expire(this.key, this.expiresIn);
  console.log("cache expiry: ", this.expiresIn);
  console.log(chalk.greenBright("Cache entry added!"));

  console.log("Response from DB");
  return result;
};

export function clearCacheKey(hashKey) {
  client.del(JSON.stringify(hashKey));
}
export default connectCacheSevice;
