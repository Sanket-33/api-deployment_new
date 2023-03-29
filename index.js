const express = require("express");
const port = 8088;

const user_model = require("./users_module");
const User = user_model;

const app = express();
app.use(express.json());

var cors = require('cors');
app.use(cors());

app.get("/", (req, res) => {
	res.send("Hello Friends..");
});

app.get("/data", async (req, res) => {
	let data = await User.find().sort({_id:-1});
	res.send(data);
});

app.get("/data/:id", async (req, res) => {
	console.log(req.params.id);
	let data = await User.find({"_id": req.params.id});
	res.send(data[0]);
});

app.post("/data", async (req, res) => {
	console.log(req.body)
	let u = await new User(req.body);
	let result = u.save();
	res.send(req.body);
});

app.put("/data", async (req, res) => {
	console.log(req.body);
	
	//User.updateOne({where}, {set});
	let u_data = await User.updateOne({"_id": req.body._id}, {
		"$set": {
			"donor_name": req.body.donor_name,
			"donor_last_name": req.body.donor_last_name,
			"email": req.body.email,
			"address":{
				"address":req.body.address.address,
				"adress_street":req.body.address.adress_street,
				"city":req.body.address.city,
				"country":req.body.address.country,
				"zip": req.body.address.zip
			},
			"amount": req.body.amount,
			"date":req.body.date,
			"phone":req.body.phone
		}
	});
	
	res.send(u_data);
});

app.delete("/data", async(req, res) => {
	
	let d_data = await User.deleteOne({"_id": req.body._id});
	res.send(d_data);
});

app.listen(process.env.PORT || port, () => {	
	console.log(`Listening on port ${port}`);
});