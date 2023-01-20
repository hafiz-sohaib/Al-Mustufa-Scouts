const mongoose = require('mongoose');
let db;

mongoose.set("strictQuery", false);

db = mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true})

module.exports = db;