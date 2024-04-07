const transactionSchema = require("../model/transactionModel");


exports.addtransaction = (req,res) => {
    const transaction = new transactionSchema (req.body);
    transaction.save()
    .then((data) => {
        if(!data)
        {
            res.json({
                message: "Something went wrong while addind the Transaction",
                status: 400,
                error: err,
              });
        }
        else
        {
            res.json({
                message: "transaction saved successfully",
                status: 200,
                data: data,
              });
        }
    }).catch((err) => {
        res.json({
            message: "Something went wrong while adding the Order",
            status: 400,
            error: err,
          });
    })

};

exports.getAlltransaction = (req,res) => {
    const transaction = new transactionSchema(req.body);
    transactionSchema.find().then((data) => {
        if(!data)
        {
            res.json({
                message: "Something went wrong while saving the transaction",
                status: 400,
                error: err,
              });
        }
        else
        {
            res.json({
                message: "transaction saved successfully",
                status: 200,
                data: data,
              });
        }
    }).catch((err)=>{
        res.json({
            message: "Something went wrong while adding the transaction",
            status: 400,
            error: err,
          });
    });

};
    
