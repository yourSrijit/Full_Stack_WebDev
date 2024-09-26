const { default: mongoose } = require("mongoose");


const userSchema=new mongoose.Schema({
    firstName:{
        type:String,
        require:true
    },
    lastName:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    address:{
        type:String
    }
})

const User=mongoose.model('User',userSchema);
export default User;