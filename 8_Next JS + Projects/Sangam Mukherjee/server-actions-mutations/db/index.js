const mongoose = require('mongoose');
require('dotenv').config();

const db_url = process.env.DB_URL;
console.log(db_url);

const connectDB = async () => {
  mongoose
    .connect(db_url)
    .then(() => console.log("Database connected 🐲"))
    .catch((e) => console.log("Something went wrong while connecting with db"));
};

export default connectDB
