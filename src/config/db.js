const mongoose = require("mongoose")



function connectToDB() {
    mongoose.connect(process.env.MONGO_URI).
        then(() => {
            console.log("db connected")
        }).catch(() => {
            console.log("db not connected")
            process.exit(1)
        })
}

module.exports = connectToDB