const express = require("express"); // creating the server
const app = express();

const multer  = require('multer');
//const upload = multer();
const upload = multer({
  storage:multer.diskStorage({
    destination:function(req,file,cb)
    {
      cb(null,"Uploads")
    },
    filename: function(req,file,cb)
    {
      cb(null,file.filename+"-"+Date.now()+".png")
    }
  })

}).array("user_file",12);

app.post("/upload",upload,(req,res) =>{
  res.send("file upload")
});


app.use(express.json()); // middleware
app.use(express.urlencoded({ extended: false })); // middleware

const mongoose = require("mongoose"); // connecting to database
const productRoutes = require("./routes/productRoutes");
app.use("/products", productRoutes);

const customerRoutes = require("./routes/customerRoutes");
app.use("/customers", customerRoutes);

const transactionRoutes = require("./routes/transactionRoutes");
app.use("/transactions", transactionRoutes);


const orderRoutes = require("./routes/orderRoutes");
app.use("/orders", orderRoutes);


const feedbackRoutes = require("./routes/feedbackRoutes");
app.use("/feedbacks", feedbackRoutes);


const adminRoutes = require("./routes/adminRoutes");
app.use("/admins", adminRoutes);


const categoryRoutes = require("./routes/categoryRoutes");
app.use("/categories", categoryRoutes);


const subCategoryRoutes = require("./routes/subCategoryRoutes");
app.use("/subcategories", subCategoryRoutes);


const statusRoutes = require("./routes/statusRoutes");
app.use("/statuses", statusRoutes);



// app.post ('/upload',upload.single("user_file"),(req,res) =>{ 
//   console.log (req.body);
//   console.log(req.file);

//   return res.redirect("/");
// });


mongoose
  .connect("mongodb://127.0.0.1:27017/B2B_Ecommerce")
  .then((sucess) => {
    console.log("Database is connected");
  })
  .catch((err) => {
    console.log(err);
  });
app.listen(3000, (err, success) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Server is running on port=>" + 3000);
  }
});
  
module.exports = upload