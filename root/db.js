const mongoose = require('mongoose')
const url = "mongodb+srv://maysaorash:nHrAg2sVrtv69AT@cluster0.nmkzg.mongodb.net/users?retryWrites=true&w=majority"

mongoose.connect(url, {useNewUrlParser: true},
    (err)=>{
        if(!err) {
          console.log('Connection with MongoDB is Successfully established')
      }
      else {
          console.log('Connection with MongoDB is: '+ err)
      }
        });
      const connection = mongoose.connection;
      connection.once("open", function() {
        console.log("MongoDB database connection established successfully");
      });
      

module.exports = mongoose;    