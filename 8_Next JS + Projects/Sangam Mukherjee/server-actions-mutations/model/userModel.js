const { default: mongoose } = require("mongoose");


const userSchema=new mongoose.Schema({
    firstName:{
        type:String,
    },
    lastName:{
        type:String,
    },
    email:{
        type:String,
    },
    address:{
        type:String
    }
})

const User=mongoose.model('User',userSchema);
export default User;