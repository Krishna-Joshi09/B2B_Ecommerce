const OrderSchema = require("../model/orderModel");


exports.addOrder = (req,res) => {
    const order = new OrderSchema(req.body);
    order.save()
    .then((data)=>{
        if(!data)
        {
            res.json({
                message: "Something went wrong while addind the Order",
                status: 400,
                error: err,
              });
        }
        else
        {
            res.json({
                message: "Order saved successfully",
                status: 200,
                data: data,
              });
        }
    }).catch((err)=>{
        res.json({
            message: "Something went wrong while adding the Order",
            status: 400,
            error: err,
          });
    })

},

exports.getAllOrder = (req,res) => {
    const order = new OrderSchema(req.body);
    OrderSchema.find().then((data)=>{
        if(!data)
        {
            res.json({
                message: "Something went wrong while saving the order",
                status: 400,
                error: err,
              });
        }
        else
        {
            res.json({
                message: "Order saved successfully",
                status: 200,
                data: data,
              });
        }
    }).catch((err)=>{
        res.json({
            message: "Something went wrong while adding the order",
            status: 400,
            error: err,
          });
    });

};
    
