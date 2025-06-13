const DEFAULT_PAGE_NUMBER = 1; // setting to zero mongo will return all documents in collection
const DEFAULT_PAGE_LIMIT = 0; // setting to zero mongo will return all documents in collection

function getPagination(query) {
  const page = Math.abs(query.page) || DEFAULT_PAGE_NUMBER;
  const limit = Math.abs(query.limit) || DEFAULT_PAGE_LIMIT;
  const skip = (page - 1) * limit;

  return { skip, limit };
}

module.exports = {
  getPagination,
};
