const { getAllPlanets } = require("../../models/planets.model");

async function httpGetAllPlanets(req, res) {
  // console.log(`result`, result);
  return res.status(200).json(await getAllPlanets());
}

module.exports = {
  httpGetAllPlanets,
};
