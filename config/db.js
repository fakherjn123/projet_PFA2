const mongoose = require("mongoose")
module.exports.connecttoMongoDB = async () => {
    console.log("🔄 Tentative de connexion MongoDB...");
    mongoose.set('strictQuery', false);
    mongoose.connect(process.env.Url_Mongo).then(() => { 
        console.log("✅ Connected to MongoDB successfully!") 
    }).catch(
        (error) => { 
            console.log("❌ MongoDB Error:", error.message) 
        }
    )
}

//projet_PFA2
//lRxo8nFwX1FFuC5p
