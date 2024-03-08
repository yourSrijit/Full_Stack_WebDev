const mongoose=require("mongoose");
const initData=require("./data.js");
const Listing=require("../models/listing");

main()
.then(()=>{
    console.log('Successfully connected');
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/Tour');

}

const initDb=async()=>{
    await Listing.deleteMany({});
    await Listing.insertMany(initData.data);
    console.log('Data is successfully stored');
};
initDb();