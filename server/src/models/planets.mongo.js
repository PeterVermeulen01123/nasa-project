const mongoose = require("mongoose");

const planetSchema = new mongoose.Schema({
  keplerName: {
    type: String,
    required: false,
  },
});

// connects planetSchema with "planets" collection
module.exports = mongoose.model("Planet", planetSchema);
