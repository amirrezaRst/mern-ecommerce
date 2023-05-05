const mongoose = require("mongoose");

const connectDB = () => {
    return mongoose.connect(process.env.MONGO_URI).then(() => {
        console.log(`Database Connected in ${mongoose.connection.host}`);
    }).catch(err => {
        console.log(err);
        process.exit(1);
    })
};

module.exports = connectDB;