import  customerModel  from "./customerModel";

class Customer {

} 

Customer.prototype.getCustomers = (req,res) => {
    customerModel.find({},(err,customers) => {
        if(err){
            res.send(err);
        }else{
            console.log("result customers", customers);
            res.send({'success':true,'message':'Customers fetched successfully',customers});
        }
    })
}

Customer.prototype.getCustomerById = (req,res) => {
    let id = req.params.id;
    customerModel.findById(id,(err,result) => {
        if(err){
            res.send(err);
        }else{
            res.send(result);
        }
    })
}

Customer.prototype.getCustomerByCustomId = (req,res) => {
    let id = req.body.id;
    customerModel.findOne({customerId : id},(err,result) => {
        if(err){
            res.send(err);
        }else{
            res.send({'success':true,'message':'Customer fetched successfully',result});
        }
    })
}

Customer.prototype.addCustomer = (req,res) => {
    let obj = req.body;
    console.log("obj ", obj);
    let model = new customerModel(obj);
console.log("model ", model);
    model.save((err,result)=>{
        if(err){
            res.send(err);
        }else{
            res.send({'success':true,'message':'Customer fetched successfully',result});
        }
    })
}

Customer.prototype.updateCustomerById = (req,res) => {
    let id = req.body._id;
    customerModel.findByIdAndUpdate(id,{ firstName : req.body.firstName,lastName : req.body.lastName},(err,result) => {
        if(err){
            res.send(err);
        }else{
            res.send(result);
        }
    })
}

Customer.prototype.deleteCustomerById = (req,res) => {
    let id = req.body._id;
    console.log("delete customer ", req.body);
    customerModel.findByIdAndRemove(id,(err,result) => {
        if(err){
            res.send(err);
        }else{
            res.send(result);
        }
    })
}

module.exports = Customer;
