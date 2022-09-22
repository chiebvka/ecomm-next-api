const mongoose = require("mongoose");

const connectDatabase = () => {
    if (mongoose.connection.readyState >= 1) {
        return
    }
    mongoose.connect('mongodb://localhost:27017/nextcommerce', {
        useNewUrlParser: true
        // useUnifiedToplogy: true
    }).then (con => {
        console.log(`MongodDB Database connected with HOST : ${con.connection.host}`)
    })
}


module.exports = connectDatabase