const mongoose = require("mongoose")

module.exports.connecttoMongoDB = async () => {
  mongoose.set('strictQuery', false);
  mongoose.connect(process.env.Url_Mongo).then(()=>{console.log("connect to db")}
).catch(
    (error)=>{console.log(error)}
  )
}

//projet_PFA2
//lRxo8nFwX1FFuC5p
