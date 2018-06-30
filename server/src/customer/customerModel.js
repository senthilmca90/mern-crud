import mongoose from "mongoose";
const Schema = mongoose.Schema;
const AutoIncrement = require('mongoose-sequence')(mongoose);

let customerSchema = new Schema({
    firstName : {type:String, default : null},
    lastName : {type:String, default : null},
},{timestamps : true
});

customerSchema.plugin(AutoIncrement, {inc_field: 'customerId'});
const customer = mongoose.model('customer', customerSchema);
module.exports = customer;