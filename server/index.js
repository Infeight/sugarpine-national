
import express from 'express'
import cors from 'cors'
import axios from 'axios'
const app = express()
import bodyParser from 'body-parser'
import fs from 'fs'
import locations from './mongodb.js'
import logins from './mongodb.js'
import blogs from './mongodb.js'
import trip from './mongodb.js'
import { get } from 'http'

// // const json = require('../../latest/suggestion.json');
// import json from '../../latest/suggestion.json' assert {type:"json"}


const port = 5002
const sep = ',\n'

app.use(cors());
app.use(bodyParser.json());
app.get('/',async (req, res) => {


  res.send("suggestions")

 

})
app.get('/suggestions', async (req,res)=>{
   const suggesteddata = await locations.locations.find({});
   res.send({status:"ok", suggestions: suggesteddata})
})

app.get('/blogs', async (req,res)=>{
    
  const blogdata = await blogs.blogs.find({})
  res.send({status: "ok", blogs: blogdata})
})

app.get('/logins', async (req,res)=>{
    
  const loginsdata = await logins.logins.find({})
  res.send({status: "ok", logins: loginsdata})
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


const data = [];



app.post('/', async (req, res) => {
 


  const data1 = {
     username : req.body.name,
     place: req.body.place,
     placedesc: req.body.description
  }
try{
  if(data1.username!="" && data1.place !="" && data1.placedesc !=""){
  await locations.locations.insertMany(data1)  

  const jsondata = await locations.locations.find();
  
    data.push(JSON.stringify(jsondata))

  //  fs.writeFileSync("suggestion.json",`${data.join(sep)}`, err => {
  //   if (err) {
  //     console.error(err);
  //   } else {
  //     console.log("file written")
  //   }
  // });
  }

 }
catch{console.log("try again")} })




let loginjsondata = []
let logindata1;
  app.post('/login', async (req, res) => {
    logindata1 = {
      username : req.body.username,
      Email: req.body.Email,
      phone: req.body.phone
    }

    

  
    try{
  let  loginjsondata1 = await logins.logins.findOne(logindata1);
    if(logindata1.username == loginjsondata1.username){
      if(logindata1.Email == loginjsondata1.Email){
        const login = "success"
        console.log("already user")
        
        // fs.writeFileSync('logindata.json',`[${JSON.stringify(logindata1)}]`, err => {
        //     if (err) {
        //       console.error(err);
        //     } else {
        //       console.log("file written")
        //     }
        //   });

      }
    }
    else{  await logins.logins.insertMany(logindata1)
      // fs.writeFileSync('logindata.json',`["${logindata1.username}"]`, err => {
      //   if (err) {
      //     console.error(err);
      //   } else {
      //     console.log("file written")
      //   }
      // })

    }
  }
  catch{
    await logins.logins.insertMany(logindata1)
    // console.log(logindata1.Email)
    // fs.writeFileSync('logindata.json',`[${JSON.stringify(logindata1)}]`, err => {
    //   if (err) {
    //     console.error(err);
    //   } else {
    //     console.log("file written")
    //   }
    // })


  }

  const blogdataarr=[];

  try{
   const blogdata = await blogs.blogs.find();
  //  blogdataarr.push(JSON.stringify(blogdata))
  //  fs.writeFileSync('blogs.json',`${JSON.stringify(blogdata)}`,(err)=>{
  //   if(err){
  //     console.log(err)
  
  //   }
  //   else{
  //     console.log("Success")
  //   }
  //  })
  }  
  catch(err){
    console.log(err)
  }


  })


  

  app.post('/logout',(req,res)=>{
//   console.log(req.body)
  // fs.writeFileSync('logindata.json',`[]`,err=>{
  //   if(err){
  //     console.log("err")
  //   }
  //   else{
  //     console.log("loggedout")
  //   }
  // })

  })

  app.post('/tripdetails', async(req,res)=>{
   const tripdata = {
    username:req.body.username,
    Email:req.body.Email,
    Phone:req.body.Phone,
      Destination: req.body.Location,
      Days: req.body.Days,
      Guide: req.body.Guide,
      Vehicle: req.body.Vehicle,
      Hotel: req.body.Hotel,
      Checkin:req.body.Checkin,
      Checkout: req.body.Checkout,
      Total: req.body.Total_price
    }

    await trip.trip.insertMany(tripdata)

  })
 



