const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 4000;

const stringParser = require('./parser/StringParser');
const idParser = require('./parser/Response');
const policyDetail = require('./databaseResponses/PolicyBreakdown');
const connectDB = require('./models/database');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

connectDB();

const Form = require('./models/formSchema');
const Policy = require('./models/policySchema');


const patient = mongoose.model('patient', Form);
const policy = mongoose.model('policy', Policy);

app.post('/api/message', async (req, res) => {
    const message = req.body.message;

    if(message==""){
        res.json({ "message": "Message cannot be empty" });
        return ({ "message": "Message cannot be empty" });
    }

    // 1. Policy Breakdown 2. What is missing 3. Benefit Checks 4. Download form
    var ind = await stringParser(message);
    if (typeof ind === 'string')
        ind = ind[0];
    console.log(ind);
    var ID = await idParser(message);

    var response = { "index": ind, ...ID };
    var text;
    var policyID = ID.policyID;
    var patientID = ID.patientID;

    if (policyID === null && patientID === null) {
        text = "No ID is specified";
        res.json({ "message": text });
        return ({ "message": text });
    }

    if (policyID === null || policyID === undefined || policyID === "null") {
        const existingPatient = await patient.findOne({ patient_id: patientID });
        if (existingPatient) {
            policyID = existingPatient._doc.policy_id;
            console.log(policyID);
        }
        else {
            res.json({ "message": "Patient ID not found" });
            return ({ "message": "Patient ID not found" });
        }
    }

    if (ind == 1 || ind == 'I') {

        const existingPolicy = await policy.findOne({ policy_id: policyID });

        if (existingPolicy == null) {
            res.json({ "message": "Policy ID not found" });
            return { "message": "Policy ID not found" };
        }
        var result = existingPolicy._doc;
        text = `Policy ID : ${result.policy_id} \n Name of the policy : ${result.name} \n Description of the policy : ${result.description} \n`;
        res.json({ message: text });
        return ({ message: text });
    }

    if (ind == 2 || ind == 'II') {

        const existingPolicy = await policy.findOne({ policy_id: policyID });

        if (existingPolicy == null) {
            res.json({ "message": "Policy ID not found" });
            return { "message": "Policy ID not found" };
        }
        var result = existingPolicy._doc;

        text = `Missing information for Policy ID ${policyID} are:`;

        var cnt = 0;

        for (const key in result) {
            if (Object.hasOwnProperty.call(result, key)) {
                const value = result[key];
                // Check if the value is an empty string
                if (value === "") {
                    text += ` ${key},`;
                    cnt++;
                }
            }
        }

        if(cnt==0) {
            text = `No information is missing for policy ID ${policyID}`;
        }
        else{
            text = text.slice(0, -1) + ".";
        }
        res.json({ message: text });
        return ({ message: text });

    }
    res.json(response);
    return response;
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});