const mongoose = require("mongoose");

const Dbconnector = (url) => {
  return mongoose.connect(url, {
    useNewUrlParser: true, // Parses MongoDB connection strings using the new connection string parser
    useUnifiedTopology: true // Enables the new unified topology engine
  });
};

module.exports = Dbconnector;
