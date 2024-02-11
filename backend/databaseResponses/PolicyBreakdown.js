// const mongoose = require('mongoose');

// const Form = require('../models/formSchema');
// const Policy = require('../models/policySchema');

// const patient = mongoose.model('Patient', Form);
// const policy = mongoose.model('Policy', Policy);

// function policyDetail(input){
//     var policyID = input.policyID;
//     var patientID = input.patientID;

//     if(policyID == null && patientID == null)   return "No ID is specified";

//     if(policyID == null){
//         const existingPatient = patient.findOne({patientID});

//         if(existingPatient == null){
//             return "Patient ID not found";
//         }

//         policyID = existingPatient.policyID;

//     }   

//     const existingPolicy = policy.findOne({policyID});

//     if(existingPolicy == null){
//         return "Policy ID not found";
//     }
//     return existingPolicy;
// }

// module.exports = policyDetail;