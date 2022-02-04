import paginate from "./paginate.js";

function paginateHandler(req, res, next) {
  req.handlePaginate = paginate;
  next();
}

export default paginateHandler;
