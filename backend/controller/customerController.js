const customerSchema = require("../model/customerModel");


exports.addCustomer = (req,res) => {
    const customer = new customerSchema(req.body);
    customer.save()
    .then((data)=>{
        if(!data)
        {
            res.json({
                message: "Something went wrong while addind the Customers",
                status: 400,
                error: err,
              });
        }
        else
        {
            res.json({
                message: "Customer saved successfully",
                status: 200,
                data: data,
              });
        }
    }).catch((err)=>{
        res.json({
            message: "Something went wrong while adding the Customer",
            status: 400,
            error: err,
          });
    })

},

exports.getAllCustomer = (req,res) => {
    const customer = new customerSchema(req.body);
    customerSchema.find().then((data)=>{
        if(!data)
        {
            res.json({
                message: "Something went wrong while saving the product",
                status: 400,
                error: err,
              });
        }
        else
        {
            res.json({
                message: "customer saved successfully",
                status: 200,
                data: data,
              });
        }
    }).catch((err)=>{
        res.json({
            message: "Something went wrong while adding the customer",
            status: 400,
            error: err,
          });
    });

};
    
