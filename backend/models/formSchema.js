const mongoose = require('mongoose');

const illnessSchema = new mongoose.Schema({
    illness: {type: String}
})

const formSchema = new mongoose.Schema({
    patient_id: {type:String, required:true},
    name: {type:String, required:true},
    email: {type:String},
    gender: {type:String},
    phone: {type:String},
    policy_id: {type:String, required:true},
    illnesses: [illnessSchema]
})

module.export = mongoose.model("Form",formSchema);
