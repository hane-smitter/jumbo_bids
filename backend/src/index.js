import express from "express";
import cors from "cors";
import path from "path";
import chalk from "chalk";
import { fileURLToPath } from "url";
import compression from "compression";

import { DB } from "./db/mongoose.js";
import routes from "./routes/index.js";
import { errorHandler } from "./_helpers/error/error-handler.js";
import ErrorRes from "./_helpers/error/ErrorResponse.js";
// import { updateBidabbles } from "./controllers/admin/bids.js";
import connectCacheSevice from "./db/services/cache.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

var options = {
  // key: fs.readFileSync('certificates/private.key'),
  // cert: fs.readFileSync('certificates/certificate.crt'),
  // ca: fs.readFileSync('certificates/ca_bundle.crt')
};

const app = express();

connectCacheSevice();

app.use(compression());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(express.static(path.join(__dirname, "../public")));

const PORT = process.env.PORT || 5000;

app.use("/api", routes);

app.all("*", (req, res, next) => {
  next(new ErrorRes("Requested resource not found", 404));
});
//cron
// Schedule tasks to be run on the server.
/* cron.schedule("* * * * *", function () {
  const ups = updateBidabbles();
  console.log("Shc running..");
}); */
//.cron
// var httpServer = http.createServer(app);
// var httpsServer = https.createServer(options, app);

app.use(errorHandler);

DB.on("connected", function () {
  console.log(chalk.rgb(208, 60, 240)("DB is connected"));
  app.listen(PORT, () =>
    console.log(chalk.rgb(208, 60, 240)(`Server listening on port: ${PORT}`))
  );
});
