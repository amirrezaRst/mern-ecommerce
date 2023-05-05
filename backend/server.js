const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const path = require('path');

//! dotenv config
dotenv.config({ path: "./config/config.env" });

//! db config
connectDB();


const app = express().use(express.json()).use(cors());



//! static folder
app.use(express.static(path.join(__dirname, "public", "profile/")));
app.use(express.static(path.join(__dirname, "public", "product/")));



//! routes
app.use("/api/user", require('./routes/userRoutes'));
app.use("/api/product", require('./routes/productRoutes'));
app.use("/api/cart", require('./routes/cartRoutes'));
app.use("/api/comment", require('./routes/commentRoutes'));
app.use("/api/contact", require('./routes/contactRoutes'));
app.use("/api/payment", require('./routes/paymentRoutes'));


app.listen(process.env.PORT, err => {
    if (err) return console.log(err);
    console.log(`server running on ${process.env.NODE_ENV} mode in port ${process.env.PORT}`);
})