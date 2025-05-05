import mongoose, { Schema } from "mongoose";

 const userSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
        unique:true,
    },
    password:{
        type:String,
        require:true,
    },
    confirmPassword:{
        type:String,
        require:true
    },
    message:{
       type:String,
       require:false
    },
    role:{
        type:String,
        enum:['admin','user'],
        default:'user',
    }
});

 const userSuggestion = new mongoose.Schema({
    name:{
        type:String,
        require: true,
    },
    village:{
        type:String,
        require:true,
    },
    suggestion:{
        type:String,
        require:true
    },
    date: { 
        type: Date,
        default: Date.now },
    likes:{
        type:[mongoose.Schema.Types.ObjectId], ref:"User",default:[]
    },
    dislikes:{
        type:[mongoose.Schema.Types.ObjectId], ref:"User", default:[]
    },
})

const contactModel = new mongoose.Schema({
    name:{
        type: String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    subject:{
        type:String
    },
    message:{
        type:String
    }
});

export const Suggestion = mongoose.model('Suggestion',userSuggestion);
export const User = mongoose.model("User", userSchema);
export const ContactModel = mongoose.model('ContactData',contactModel)
// module.export ={User,Suggestion};