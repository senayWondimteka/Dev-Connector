 const mongoose = require('mongoose')

 const UserSchema = new mongoose.Mongoose.UserSchema({
   name: {
     type: String, 
     require: true
   },
   email: {
     type: String,
     require: true,
     unique: true
   },
   password: {
     type: String,
     require: true
   },
   avatar: {
     type: String
   },
   date: {
     type: Date,
     default: Date.now
   }
 });

 module.exports = User = mongoose.model('user', UserSchema);