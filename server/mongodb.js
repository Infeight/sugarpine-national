import { connect, Schema, model } from 'mongoose';
import { MongoClient, ServerApiVersion } from 'mongodb';

connect("mongodb+srv://Tarun2:ErHBBKbj21JAUBpu@cluster0.9ufjebs.mongodb.net/destinations?retryWrites=true&w=majority&appName=Cluster0/").then(()=>{
    console.log("connected to DB");
}).catch((err)=>{
    console.log(err.message);
})

const locationSchema = new Schema({
    username:{
        type:String,
        required:true
    },
    place: {
        type:String,
        required:true
    },
    placedesc:{
        type:String,
        required:true
    }
})


const locations =  model('locations', locationSchema);

const loginSchema = new Schema({
    username:{
        type:String,
        required:true
    },
    Email: {
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    }

})

const logins = model('logins',loginSchema);

const blogSchema = new Schema({
  blog:{
   type:String,
   required:true
  },
  Title:{
    type:String,
    required:true
  },
  Image:{
  type:String
  }
})

const blogs = model('blogs',blogSchema)

const tripSchema = new Schema({
    username:{type:String, required:true},
    Email:{type:String, required:true},
    Phone:{type:String, required:true},
    Destination:{type:String, required: true},
    Days:{type:String, required:true},
    Guide:{type:String},
    Vehicle:{ type:String},
    Hotel:{type: String},
    Checkin:{type:String},
    Checkout:{type:String},
    Total:{type:String, required:true}

}) 
const trip = model('trips',tripSchema)
 export default {locations, logins, blogs,trip}
 
// module.exports = locations