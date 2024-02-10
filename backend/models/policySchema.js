const mongoose = require('mongoose');

const policySchema = new mongoose.Schema({
    policy_id: {type:String, required:true},
    name: {type:String},
    description: {type:String}
})

module.export = mongoose.model("Policy",policySchema);