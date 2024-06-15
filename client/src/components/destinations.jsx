import React from 'react'
import Navbar from '../navbar'
import Footer from '../footer/footer'
import { useState ,useEffect,useRef } from 'react'
import Hotelcardcont from './hotelcardcont'
import Restcartcont from './restcartcont'
import Tourspotcont from './tourspotcont'
import './destinations.css'
import {useJsApiLoader , GoogleMap, Marker, Autocomplete} from '@react-google-maps/api'
import locationinfo from '../../api'
import geocodeinfo from '../../api/geocodeapi'
import imageinfo from '../../api/getimage'
import tourattr from '../../api/touristspot'
import tourxid from '../../api/xid'
import restaurants from '../../api/restaurants'
import weatherreport from '../../api/weather'
import { FaInstagram } from "react-icons/fa"
// import loggedindata from '../../../server/logindata.json'
import emailjs from '@emailjs/browser';

import Guides from './guides'
import weatherforcast from '../../api/weatherforcast'
const Destinations = () => {
  const {isLoaded} =useJsApiLoader({
    googleMapsApiKey: "AIzaSyAc3wrqiH-O6PfaihabGAEqHemmfp2XLxU"
  })
  const [centre, setCentre] =useState({
    lat:null,
    lng: null
  })

  const form = useRef();
  const [map,setMap] = useState(null)

  const [loggedindata,setLoggedindata] = useState([])
  const [locname,setLocname] = useState("")
  const [maindata,setMaindata] = useState([]);
  const [image,setImage] = useState([])
  const [dispimg,Setdispimg] = useState([]);
  const [tourspot,setTourspot] = useState([]);
  const[xid,setXid] = useState([])
  const[dates,setDates] = useState({
    indate:null,
    outdate:null
  })
  const[guidedata,setGuidedata]= useState({
    guidename:"",
    guideprice:""
  })
  const[triprest,setTriprest] = useState([])
  const[triphotels,setTriphotels] = useState({
    hotelname:null,
    hotelprice:null
  })

  const[noofdays,setNoofdays]=useState({
    days:""
  })
  const [showtours,setShowtours] = useState(false);
  const [restdata,setRestdata] = useState([]);
  const [tourspottry,setTourspottry] = useState([]);
  const [weather1,setWeather] = useState({
    windspeed:null,
    winddir:null,
    temp:null,
    clouds:null,
    humidity:null,
    sunrise:null,
    sunset:null,
   
  })

  const[forecast1,setForecast1]=useState({
    
      high:null,
      low:null,
      text:null,
      day:null
    
   
  })
  const[forecast2,setForecast2]=useState({
    
    high:null,
    low:null,
    text:null,
    day:null
  
 
})
const[forecast3,setForecast3]=useState({
    
  high:null,
  low:null,
  text:null,
  day:null


})

  let name, datesval;
  const enterdate = (e)=>{
    name = e.target.name;
    datesval = e.target.value;
    setDates({...dates,[name]:datesval})
  }

  const handleChange=(e)=>{
    setLocname(e.target.value)
    document.getElementById("search").style.animationName = "none"
  }

  const handlesubmit = ()=>{
    loggeduserdata();
    setShowtours(false)
    setMaindata([])
    setRestdata([])
   document.getElementById("search").style.animationName = "searchanime"
document.getElementById("weather-initial").style.display="block"
document.getElementById("tripcheck-weather-cont").style.display = "flex"
    geocodeinfo(locname).then(data=>{
      (data.map(data1 => setCentre({...centre, lat:Number.parseFloat(data1.location.lat) , lng: Number.parseFloat(data1.location.lng)})))
    
     })

     weatherreport(locname).then(weatherforcast=>{
      console.log(weatherforcast.forecasts[0])
      setWeather({...weather1,
        windspeed:weatherforcast.current_observation.wind?.speed? weatherforcast.current_observation.wind.speed: "Not found",
        winddir:weatherforcast.current_observation.wind?.direction? weatherforcast.current_observation.wind.direction : "Not found",
        temp:weatherforcast.current_observation.condition?.temperature? weatherforcast.current_observation.condition.temperature : "Not found",
        clouds:weatherforcast.current_observation.condition?.text? weatherforcast.current_observation.condition.text : "Not found",
        humidity:weatherforcast.current_observation.atmosphere?.humidity?weatherforcast.current_observation.atmosphere.humidity : "Not found",
        sunrise : weatherforcast.current_observation.astronomy?.sunrise? weatherforcast.current_observation.astronomy.sunrise: "Not found",
        sunset : weatherforcast.current_observation.astronomy?.sunset? weatherforcast.current_observation.astronomy.sunset: "Not found",
       
        

      })

      setForecast1({...forecast1,high:weatherforcast.forecasts[0].high,low:weatherforcast.forecasts[0].low,text:weatherforcast.forecasts[0].text,day:weatherforcast.forecasts[0].day})
      setForecast2({...forecast2,high:weatherforcast.forecasts[1].high,low:weatherforcast.forecasts[1].low,text:weatherforcast.forecasts[1].text,day:weatherforcast.forecasts[1].day})
      setForecast3({...forecast3,high:weatherforcast.forecasts[2].high,low:weatherforcast.forecasts[2].low,text:weatherforcast.forecasts[2].text,day:weatherforcast.forecasts[2].day})
     }

     )

    

  imageinfo(locname).then(data =>{
   
   setImage(data)
  })

  if(document.getElementById("details").style.display=="none"){

    document.getElementById("details").style.display = "initial"
    document.getElementById("guides").style.display = "block"
document.getElementById("touristload").style.display="initial"
document.getElementById("tourists").style.backgroundColor="rgb(255 225 180)"

  }
 if( document.getElementById("rests").style.display=="none"){
  document.getElementById("rests").style.display = "initial"
  document.getElementById("restaurant").style.display = "block"
  document.getElementById("restload").style.display="initial"
  document.getElementById("restaurants1").style.backgroundColor="rgb(204 233 255)"
  }

  if( document.getElementById("hotels").style.display=="none"){
    document.getElementById("hotels").style.display = "initial"
    document.getElementById("hotelp").style.display = "block"
    document.getElementById( "inputdates").style.display="flex"
    document.getElementById("hotelload").style.display="initial"
    document.getElementById("hotels1").style.backgroundColor="rgb(191 195 233)"
    }
    document.getElementById("yourtrip").style.display= "block"

    document.getElementById("tourists").style.backgroundColor="rgb(255 225 180)"
      document.getElementById("restaurants1").style.backgroundColor="rgb(204 233 255)"
        document.getElementById("hotels1").style.backgroundColor="rgb(191 195 233)"
  }

  const loggeduserdata = async ()=>{
    let logindet ={
    username: localStorage.getItem("loggeduser"),
    Email: localStorage.getItem("logindet-mail")
    }
    let getlogins = [logindet]

    setLoggedindata(getlogins)
   }


  const  handledetails = ()=>{
    console.log(72.877426,19.07609)
    tourattr(centre.lng,centre.lat).then(features=>{
      features.map(tourdata =>{
        if(features.indexOf(tourdata)<20){
          
         tourxid(tourdata.properties.xid).then(placedats=>{
          console.log(placedats) 
       xid.push(placedats)
       setShowtours(true)
         })
       }} )
        
    }
   
  )
document.getElementById("details").style.display = "none"
document.getElementById("guides").style.display = "none"
document.getElementById("touristload").style.display="none"
document.getElementById("tourists").style.backgroundColor="white"
document.getElementById("tourhead").style.backgroundColor="white"

  }

  const handelrests = ()=>{
    console.log(centre.lat,centre.lng)
   restaurants(centre.lat,centre.lng).then(data=>{
    setRestdata(data);
    
   })
   document.getElementById("rests").style.display = "none"
document.getElementById("restaurant").style.display = "none"
document.getElementById("restload").style.display="none"
document.getElementById("restaurants1").style.backgroundColor="white"
document.getElementById("resthead").style.backgroundColor="white"
  }

 const handelhotels=()=>{
  if(dates.indate!= null && dates.outdate!=null){

 
  locationinfo(locname,dates.indate,dates.outdate).then(data1 =>{
    setMaindata(data1)
    // maindata.forEach(e=>{
    //   e.addEventListener("click",triphotel)
    // })
    })
    document.getElementById( "inputdates").style.display="none"
    document.getElementById("hotels").style.display = "none"
    document.getElementById("hotelp").style.display = "none"
    document.getElementById("hotelload").style.display="none"
    document.getElementById("hotels1").style.backgroundColor="white"
    document.getElementById("hotelhead").style.backgroundColor="white"
 }  
else{
  document.getElementById( "inputdates").style.border="5px solid rgb(80 84 119)"
} } 

  if(image){
image.map(
 
  images =>{dispimg.push(images.url)}

)}
const handleguide =(e)=>{

  setGuidedata({...guidedata,guidename:e.target.closest(".guides").querySelector(".guidename").innerText, guideprice:e.target.closest(".guides").querySelector(".guide-price").innerText})

  
  
     }

     const triphotel =(e)=>{
    //  console.log(e.target.querySelector(".hotelprice"))
      setTriphotels({...triphotels,hotelname:e.target.closest(".hotelname").innerText,hotelprice: "2000"})

     }

   const selectTour =(e)=>{
    // console.log(e.target.closest(".tourspot"))
      tourspottry.push(e.target.closest(".tourspot").querySelector(".tourspottitle").innerText)
      setTourspottry(tourspottry)
      e.target.closest(".tourspot").id = 'tourspot-selected'
   } 
  const tripdetails = ()=>{
   if(loggedindata.length==0){
    document.getElementById("loginconfirm").style.display = "block"
    if(document.getElementById("noofdays").value == ""){
 document.getElementById("noofdays").style.backgroundColor  = "#ffa6a6"
    }
   
   
   } 
   else{
   
    document.getElementById("noofdays").style.backgroundColor = "white" 
    // const tripdetailsdiv =  document.createElement('div')
  //  tripdetailsdiv.id="tripcheck"
  document.getElementById("tripcheck").innerHTML = "📍Locations to Visit:"+" "+ tourspottry
  //  document.getElementById("yourtrip").appendChild(tripdetailsdiv)
   document.getElementById("tripguide1").innerHTML = `Guide:${guidedata.guidename}, 💰Price :${(Number.parseInt(guidedata.guideprice)/2) * Number.parseInt(document.getElementById("noofdays").value) }/-`
  //  setGuidedata({...guidedata, guideprice:guideprice * document.getElementById("noofdays").value})

  sendEmail();
   }
   
   
   
  }
   
 const moreweather =()=>{
  if(document.getElementById("moreinfo").value == "off"){
    document.getElementById("forecast").style.display = "block"
    document.getElementById("weather-initial").style.display = "flex"
    document.getElementById("weather-initial").style.alignItems = "center"
    document.getElementById("moreinfo").innerText = "Less Information"
    document.getElementById("moreinfo").value = "on"
  }
  else if(document.getElementById("moreinfo").value == "on"){
    document.getElementById("forecast").style.display = "none"
      document.getElementById("weather-initial").style.display = "block"
        document.getElementById("moreinfo").innerText = "More Information"

document.getElementById("moreinfo").value = "off"
  }
 
 } 



 const sendEmail = (e) => {
  // e.preventDefault();

 
    emailjs.sendForm('service_zu6kd9m', 'template_71rje2i', form.current, {
      publicKey: '0jDVFv-PznKuOziiu',
    })
    .then(
      () => {
        console.log('SUCCESS!');
      },
      (error) => {
        console.log('FAILED...', error.text);
      },
    );
};

const handledays=(e)=>{

 setNoofdays({...noofdays,days: e.target.value})
}



  return (
    <>


<form ref={form} style={{display:"none"}}>
      <label>Name</label>
      <input type="text" name="user_name" value={loggedindata.length>0? loggedindata[0].username:"Null"} />
      <label>Email</label>
      <input type="email" name="user_email" value={loggedindata.length>0?  loggedindata[0].Email:"Null"} />
      <label>Message</label>
      <textarea name="message" value={`Here are your trip details!,\n
       Destination: ${locname},\n
        Your guide: ${guidedata.guidename},\n Hotel: ${triphotels.hotelname? triphotels.hotelname: "Not selected"},\n
  Check in: ${dates.indate}, \n
   Check out: ${dates.outdate}, \n
       Locations: ${tourspottry}, \n
      No.of trip days: ${noofdays.days}, \n
       Total price: ${((Number.parseInt(guidedata.guideprice)/2)*(Number.parseInt(noofdays.days))) +( Number.parseInt(triphotels.hotelprice)*(Number.parseInt(noofdays.days)))}/-`}/>
      {/* <input type="submit" value="Send" /> */}
    </form>






      <Navbar />
      <div className='tripcheck-weather-cont' id='tripcheck-weather-cont' style={{display:"none"}}>

      <section className="weather-initial" id='weather-initial' style={{transitionDuration:"0.5s", display:"none",alignItems:"centre",backgroundColor:"#4c4c9e"}}>
        <div className='currentweather' id='currentweather' style={{width:"100%"}}>
        <div className="temp" style={{width:"100%",color:"white",margin:"0rem 4rem",fontSize:"4rem", fontFamily:"math"}}>🌡 Temperature: {weather1.temp} C</div>
        <div className="clouds" style={{width:"50%",color:"white",margin:"0rem 4rem",fontSize:"3rem", fontFamily:"math"}}>⛅ Clouds: {weather1.clouds}</div>
        <div className="wind" style={{width:"100%",color:"white",margin:"0rem 4rem",fontSize:"3rem", fontFamily:"math"}} >🎐 Wind: {weather1.windspeed}m/s {weather1.winddir}</div>
        <div className="humidity" style={{width:"100%",color:"white",margin:"0rem 4rem",fontSize:"3rem", fontFamily:"math"}}>🥵 Humidity: {weather1.humidity}%</div>
        <div className="astronomy" style={{width:"100%",color:"white",margin:"0rem 4rem",fontSize:"3rem", fontFamily:"math"}}>🌇/🌆: {weather1.sunrise} / {weather1.sunset}</div>
        <button id='moreinfo' onClick={moreweather} value={"off"} >More Information</button>
        </div>
       <section className='forecast' id='forecast' style={{width:"130%",fontFamily:"math",fontSize:"3rem",marginRight:"4rem",color:"white",position:"relative",left:"2rem"}}>
        <div  style={{borderBottom:"2px dashed white",textAlign:"left",height:"4vh",display:"flex",alignItems:"center", justifyContent:"center"}} className="forecast">Forecast (Today and Next 2days)</div>
  <div style={{borderBottom:"2px solid white",textAlign:"left",height:"5vh",display:"flex",alignItems:"center"}} className="forecast">{forecast1.day} 🌡 Temperature: {forecast1.high} / {forecast1.low} 🌫: {forecast1.text} </div>
  <div style={{borderBottom:"2px solid white",textAlign:"left",height:"5vh",display:"flex",alignItems:"center"}} className="forecast">{forecast2.day} 🌡 Temperature: {forecast2.high} / {forecast2.low} 🌫: {forecast2.text} </div>
  <div style={{borderBottom:"2px solid white",textAlign:"left",height:"5vh",display:"flex",alignItems:"center"}} className="forecast">{forecast3.day} 🌡 Temperature: {forecast3.high} / {forecast3.low} 🌫: {forecast3.text} </div>
       </section>

      </section>

      <section className="yourtrip" id='yourtrip'  style={{display:"none"}}>
       
        <li id='tripname' >{locname}</li> 
        <li style={{width:"100%",display:"flex", height:"auto", alignItems:"center", justifyContent:"space-between"}}>
        <input style={{zIndex:"1"}} onChange={handledays} value={noofdays.days} id='noofdays' type="number" placeholder='Enter Number of days of the trip 🛄🚙'/>
        <div className="total-price" style={{height:"4vh"}}>💰Total :{((Number.parseInt(guidedata.guideprice)/2)* Number.parseInt(noofdays.days)  ) + Number.parseInt(triphotels.hotelprice * Number.parseInt(noofdays.days))}/-</div>
        <button id='checkout' onClick={()=>{tripdetails()}}style={{zIndex:"1"}}>Check Out</button>
        </li> 
       

      <ul style={{display:"flex", flexWrap:"wrap", fontSize:"3rem", fontFamily:"math", position:"relative", left:"-5rem",width:"80%"}}>
      <li id='triphotel1' style={{width:"100%", paddingLeft:"1rem", listStyle:"none"}}>Hotel: {triphotels.hotelname?triphotels.hotelname:"We book a room for you in the selected hotel."}, 💰price:{triphotels.hotelprice?triphotels.hotelprice: "Price"}</li>
        {/* <li style={{width:"50%"}}>Restaurants:</li> */}
        {/* <li style={{width:"50%"}}>Restaurants to try:{triprest}</li> */}
        <li id='tripguide1' style={{width:"100%",paddingLeft:"1rem", listStyle:"none"}}>Guide:{guidedata.guidename}, 💰Price :{guidedata.guideprice}</li>
  
       
     <div id='tripcheck'></div>
      
      </ul>
      <div className="loginconfirm" id='loginconfirm' style={{display:"none"}}>😕 Did'nt you LOG IN? Please do.</div>
      </section>
      
   
</div>
{/* <img style={{display:"none"}} id='fillup-img' className='fillup-img' src="https://images.pexels.com/photos/7846473/pexels-photo-7846473.jpeg" alt="" /> */}

      <div className='head-cont'>
        
        <div className="place-name">
      
      <div className="search">

     
       <input type="text" placeholder='Search a Destination !' id='searchbar' value={locname}  onChange={handleChange} className='searchbar' />
       
       
        <button id='search'onClick={()=>{handlesubmit()}} > Search</button>
        </div>
   
          <h3 id='place-name' >{locname.slice(0,15)}...</h3>
          <div className="images-container">
             <div className="loc-img"><img src={dispimg[20]? dispimg[20]: "kashmir.jpg"} alt="Images" /></div>
             <div className="loc-img"><img src={dispimg[11]? dispimg[11]: "manali.jpg" } alt="Images" /></div>
             <div className="loc-img"><img src={dispimg[35]? dispimg[35]: "goaimg.jpg" } alt="Images" /></div>
             <div className="loc-img"><img src={dispimg[17]? dispimg[17]: "munnar.jpg" } alt="Images" /></div>
             <div className="loc-img"><img src={dispimg[4]? dispimg[4]: "mussori.jpg" } alt="Images" /></div>
             <div className="loc-img"><img src={dispimg[5]? dispimg[5]: "nainital.jpg" } alt="Images" /></div>
             <div className="loc-img"><img src={dispimg[7]? dispimg[7]: "jaisalmer.jpg" } alt="Images" /></div>
             <div className="loc-img"><img src={dispimg[8]? dispimg[8]: "agra.jpg" } alt="Images" /></div>
             <div className="loc-img"><img src={dispimg[9]? dispimg[9]: "pondy.jpg" } alt="Images" /></div>
             <div className="loc-img"><img src={dispimg[10]? dispimg[10]: "nagaland.jpg" } alt="Images" /></div>
          </div>
        </div>
        {/* <div className="img-cont">
          <img src={dispimg[0]? dispimg[0] : "destinationscover.jpg"} alt="Images" />
        </div> */}
      </div>


     <div className='ourservicesh2'> <h2>Our Services</h2></div>
      <div className="ourservices">
        

   <div className="service-cont" id='hotels1' style={{boxShadow:"1rem 1rem 2rem",  color:"rgb(80 84 119)", backgroundColor:"rgb(191 195 233)"}}>
   
    <h4 id='hotelhead' >Hotels</h4>
   <img id='hotelload' style={{width:"90%",height:"60%", margin:"1% 5%",mixBlendMode:"multiply"}}  src="hotelload.jpg" alt="" />
   <div id="inputdates"><input className='enterdate' type="text" placeholder='Check-in: yyyy-mm-dd' onChange={enterdate} name='indate' value={dates.indate}/> <input className='enterdate' name='outdate' value={dates.outdate} type="text" placeholder='Check-out: yyyy-mm-dd' onChange={enterdate} /></div>
    <button id='hotels' onClick={()=>{handelhotels()}}>Click to search for Hotels around!</button>
    <p id='hotelp'>Click the above button to search for Hotels nearby the searched location!</p>
   
   {maindata? maindata.map(data2=>{
  
   return(
   
    <Hotelcardcont  key={data2} image={"https://m.economictimes.com/thumb/msid-108656313,width-1200,height-900,resizemode-4,imgsize-28760/hotel.jpg"} 
      title={`${data2}` }
      
      location={locname} 
      // propertyType={data2?.content?.informationSummary?.propertyType} 
      // rating={data2?.content?.informationSummary?.rating}
      func={triphotel}
      price={"2000/-"}
      />
   )})
   
    : <div className="notfound"> Sorry,No Hotels Found.😔 <br /> PLease Check for local hotels on <a href="https://www.google.com/">Google</a></div>}
   </div>
   <div className="service-cont" id='restaurants1' style={{boxShadow:"1rem 1rem 2rem",   color:"#111154", backgroundColor:"rgb(204 233 255)"}}>
   <h4 id='resthead'>Restaurants</h4>
   <img id='restload' style={{width:"90%",height:"60%", margin:"1% 5%",mixBlendMode:"multiply"}}  src="restload.jpg" alt="" />
   <button id='rests' onClick={()=>{handelrests()}}>Click to search for Restaurants around!</button>
   <p id='restaurant' style={{color:"#111154"}}>Click the above button to search for Restaurants nearby the searched location!</p>
  {restdata?restdata.map(data1=>{
    return(
      <Restcartcont key={data1?.location_id} title={data1?.name} image={data1?.photo?.images?.medium?.url ?data1?.photo?.images?.medium?.url :"https://png.pngtree.com/png-clipart/20190313/ourmid/pngtree-planar-cartoon-street-view-shop-restaurant-and-vendor-elements-png-image_848867.jpg"}
      webpage={data1?.website? data1?.website :""}  rating={data1?.rating ? data1?.rating :""}  />
    )
   
  }):<div className="notfound"> Sorry,No Restaurants Found.😔 <br /> PLease Check for local restaurants on <a href="https://www.google.com/">Google</a></div>}
   </div>

  

   <div className="service-cont" id='tourists' style= {{boxShadow:"1rem 1rem 2rem",   color:"rgb(116 106 91)", backgroundColor:"rgb(255 225 180)"}}><h4 id='tourhead'> Tourist Locations</h4>
   <img style={{width:"90%",height:"60%", margin:"1% 5%",mixBlendMode:"multiply"}} id='touristload' src="toursindia.jpg" alt="" />
 

<button id='details' onClick={()=>{handledetails()}}>Click to search for tourist spots!</button>
<p id='guides' style={{color:"rgb(116 106 91)"}} >Click the button above to search for tourist spots nearby the searched location!</p>
   
{
    showtours == true? xid.map(xidata=>{
      // console.log(xid)
     return( <Tourspotcont  key={`${xidata[1]}`} title={`${xidata[0]}`?`${xidata[0]}`: "Tourist spot" } wikidata={`${xidata[2]}`?`${xidata[2]}`:"Sorry,No Info found😔"} maps={`${xidata[1]}`} func1={selectTour}/>)
    })
   :<></>}


   </div>


      </div>

      <div className='guide-cont'>
        <h3>Our Expert Guides at Your Service!</h3>
       <div className="guideslide">
        <li className='guides' onClick={handleguide}>
            <img className='guide-img' src="guideimg.jpg" alt="" />
            <div className="guidename">Tarun</div>
            <div className="exp">Experience lvl: Pro</div>
            <div className="guide-price">3000/- (2 days)</div>
        </li>
        <li className='guides' onClick={handleguide}>
            <img className='guide-img' src="guideimg.jpg" alt="" />
            <div className="guidename">Amir</div>
            <div className="exp">Experience lvl: Pro</div>
            <div className="guide-price">3000/- (2 days )</div>
        </li>
        <li className='guides' onClick={handleguide}>
            <img className='guide-img' src="guideimg.jpg" alt="" />
            <div className="guidename">Hassan</div>
            <div className="exp">Experience lvl: plus</div>
            <div className="guide-price">2500/- (2 days)</div>
        </li>
        <li className='guides' onClick={handleguide}>
            <img className='guide-img' src="guideimg.jpg" alt="" />
            <div className="guidename">Ishaan</div>
            <div className="exp">Experience lvl: Expert</div>
            <div className="guide-price">4500/- (2 days)</div>
        </li>
        <li className='guides' onClick={handleguide}>
            <img className='guide-img' src="guideimg.jpg" alt="" />
            <div className="guidename">Eesha</div>
            <div className="exp">Experience lvl: Pro</div>
            <div className="guide-price">3000/- (2 days )</div>
        </li>
        <li className='guides' onClick={handleguide}>
            <img className='guide-img' src="guideimg.jpg" alt="" />
            <div className="guidename">Meera</div>
            <div className="exp">Experience lvl: Expert</div>
            <div className="guide-price">4500/- (2days)</div>
        </li>
        <li className='guides' onClick={handleguide}>
            <img className='guide-img' src="guideimg.jpg" alt="" />
            <div className="guidename">Mithun</div>
            <div className="exp">Experience lvl: Pro</div>
            <div className="guide-price">3000/- (2 days)</div>
        </li>
        <li className='guides' onClick={handleguide}>
            <img className='guide-img' src="guideimg.jpg" alt="" />
            <div className="guidename">Zahir</div>
            <div className="exp">Experience lvl:Expert</div>
            <div className="guide-price">4500/- (2 days)</div>
        </li>
        <li className='guides' onClick={handleguide}>
            <img className='guide-img' src="guideimg.jpg" alt="" />
            <div className="guidename">Reena</div>
            <div className="exp">Experience lvl: Expert</div>
            <div className="guide-price">4500/- (2 days)</div>
        </li>
        <li className='guides' onClick={handleguide}>
            <img className='guide-img' src="guideimg.jpg" alt="" />
            <div className="guidename">Zoey</div>
            <div className="exp">Experience lvl: Expert</div>
            <div className="guide-price"> 4500/- (2 days)</div>
        </li>
       </div>
    </div>

{isLoaded?
 
 <div className="locmap"><GoogleMap onLoad={(map)=>{setMap(map)}} center={centre} zoom={15} mapContainerStyle={{width:"100%", height:"100%"}} options={{zoomControl:false, fullscreenControlOptions:false}}/> <Marker position={centre}/> <button id='gobacktoloc' onClick={()=>{map.panTo(centre)}} style={{width:"15%",height:"10%", backgroundColor:"black",color:"white", margin:"0rem 88.5rem"}}>go to searched location</button> </div>
 : <div className="locmap"></div>
}
     
    <Footer/>
   
    </>
  )
}

export default Destinations

