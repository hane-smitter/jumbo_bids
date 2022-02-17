import Hashids from "hashids";

function paginate() {
  const hashids = new Hashids("", 8);

  let maxResults = parseInt(this.maxResults);
  let totalResults = parseInt(this.totalResults);
  let nextPageToken = this.nextPage;
  let prevPageToken = this.prevPage;

  const nextPage = parseInt(hashids.decode(nextPageToken).join(""));
  const prevPage = parseInt(hashids.decode(prevPageToken).join(""));
  const currentPage = nextPage || prevPage || 1;

  console.log("NXT PGTOKEN RECEIVED: ", nextPageToken);
  console.log("Current PAGE: ", currentPage);

  if (!maxResults) maxResults = 4;

  const limit = maxResults;
  const skip = (currentPage - 1) * limit;

  const totalPages = Math.ceil((totalResults / limit) || 1);

  nextPageToken = hashids.encode(
    currentPage + 1 <= totalPages ? currentPage + 1 : 1
  );
  prevPageToken = hashids.encode(currentPage - 1 > 0 ? currentPage - 1 : 1);

  return {
    limit,
    skip,
    pageData: {
      pageInfo: {
        currentPage,
        totalResults,
        numberOfPages: totalPages,
      },
      nextPageToken,
      prevPageToken,
    },
  };
}

export default paginate;
