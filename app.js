var path = require("path");
require("dotenv").config();
const ClientOrder = require("./models/order");
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cors = require("cors");
const { request, response } = require("express");
const FoodAvailable = require("./models/foodavailable");
const Joi = require('joi')
const User =require('./models/User')


app.use(express.json());
app.use(cors());


app.get("/api/meals", (request, response) => {
  FoodAvailable.find({})
  .then((foodavailable) => {
    response.json(foodavailable);
  });
});

app.get("/api/admin/dashboard/orders", (request, response) => {
  ClientOrder.find({}).then((clientorder) => {
    response.json(clientorder);
  });
});
app.post('/login',(req,res)=>{
  User.findOne({email:req.body.email})
  .then(user =>{
    if(user.password === req.body.password){
      res.json(user)
    }else{
      return res.json('Invalid email or password')
    }
  })
  .catch(error =>{
    res.status(400).json(error)
  })
})
app.post("/signup",(req, res) =>{
  const { error, value } = validateUser(req.body);

  if (error) throw error 
 const newUser= Object.assign({}, value)
 const user = new User(newUser)
  user.save().then((saveUser) => {
    res.json(saveUser)
  })
  .catch(error => {
    res.status(400).json(error)
  })
})
app.post("/api/admin/dashboard/orders", (request, response) => {
  const body = request.body;
  const clientorder = new ClientOrder({
    firstname: body.firstname,
    surname: body.surname,
    phone: body.phone,
    location: body.location,
    address: body.address,
    meal: body.meal,
    price: body.price,
  });

  clientorder.save()
  .then(
    (savedOrder) => {
    response.json(savedOrder);
  });
});
app.post("/api/meals", (request, response) => {
  const body = request.body;
  const foodavailable = new FoodAvailable({
    title: body.title,
    description: body.description,
    price: body.price,
  
  });

  foodavailable.save().then((savedfood) => {
    response.json(savedfood);
  });
});
const validateUser = (user) => {
  const validationSchema = Joi.object()
    .keys({
      firstName: Joi.string().min(3).required(),
      lastName: Joi.string().min(3).required(),
      email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
        .required(),
      password: Joi.string()
        .pattern(new RegExp(/(?=.*[a-z]){8,30}/))
        .required(),
      passwordConfirmation: Joi.ref("password"),
    })
    .with("password", "passwordConfirmation");
  return validationSchema.validate(user);
};

if (process.env.NODE_ENV === 'development'){
  app.use('/',express.static(path.join(__dirname,"build")));
}
else {
  // Serve any static files
  app.use(express.static(path.join(__dirname, "build")));
  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
