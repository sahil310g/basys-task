const mongoose = require('mongoose');
require('dotenv').config();

const url = process.env.MongoURI;

const connectDB = async () => {
    try {
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Connected to MongoDB");
    } catch (err) {
        console.log(err);
    }
};

module.exports = connectDB;