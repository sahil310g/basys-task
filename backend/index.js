const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 4000;

const stringParser = require('./parser/StringParser');
const idParser = require('./parser/Response');
const connectDB = require('./models/database');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());

connectDB();

const Form = require('./models/formSchema');

app.post('/api/message', async (req, res) => {
    const message = req.body.message;

    // 1. Policy Breakdown 2. What is missing 3. Benefit Checks 4. Download form
    var ind = await stringParser(message);
    var ID = await idParser(message);

    const response = { "index": ind, ...ID };

    res.json(response);
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});