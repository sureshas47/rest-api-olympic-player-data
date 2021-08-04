
const mongoose = require('mongoose');

const dbConnection = async() => {
   try {

    const db = await mongoose.connect("mongodb://localhost:27017/mens100",{
        useCreateIndex:true,
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log('connected');

   } catch (error) {
       console.log("no connection");
   }
}
dbConnection();