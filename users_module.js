//Step 1: Database connection using connection string
const mongoose = require("mongoose");
//mongodb://127.0.0.1:27017/dbname
//const conn_str = "mongodb://localhost:27017/tcet";
const conn_str = "mongodb+srv://Sanket:sanket@cluster0.hd1bcrb.mongodb.net/online_charity_mang_sys?retryWrites=true&w=majority"
mongoose.connect(conn_str, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log("Connected successfully..."))
.catch( (error) => console.log(error) );
//Step 2: Create Schema (similar to Java Class)
// const userSchema = new mongoose.Schema({})
//Step 3: Create collection Object (model)
// MAPPING
var Schema= mongoose.Schema;
const userObject = mongoose.model('Data', 
               new Schema({donor_name: String,
                donor_last_name: String,
                email: String,
                address:{
                    address:String,
                    adress_street:String,
                    city:String,
                    country:String,
                    zip: Number
                },
                amount: Number,
                date:String,
                phone:String}), 'data'); 
// const userObject = new mongoose.model("user", userSchema);
// exports.User = userObject;
module.exports= userObject;