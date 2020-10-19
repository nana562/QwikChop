const mongoose = require("mongoose");
const { Schema } = mongoose;
const userSchema = new Schema({
  firstName: {
       type: String,
       minlength: [3, 'firstName is too shoot'],
       required: true
    }, 
    lastName: {
        type: String,
        minlength: [3, 'lastName is too shoot'],
        required: true
     }, 
     email: {
        type: String,
        minlength: [3, 'Email is too shoot'],
        required: true
     }, 
     password: {
        type: String,
        minlength: [8, 'invalid password'],
        required: true
     }, 
     passwordConfirmation: {
        type: String,
        minlength: [8, 'password does not match'],
        required: true
     }, 
});
module.exports = mongoose.model('UserAccount', userSchema)