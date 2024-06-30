import React from 'react'
import Navbar from '../navbar'
import Footer from '../footer/footer'
import { useState, useEffect, useRef } from 'react'
import Hotelcardcont from './hotelcardcont'
import Restcartcont from './restcartcont'
import Tourspotcont from './tourspotcont'
import './destinations.css'
import { useJsApiLoader, GoogleMap, Marker, Autocomplete } from '@react-google-maps/api'
import locationinfo from '../../api'
import geocodeinfo from '../../api/geocodeapi'
import imageinfo from '../../api/getimage'
import tourattr from '../../api/touristspot'
import tourxid from '../../api/xid'
import restaurants from '../../api/restaurants'
import weatherreport from '../../api/weather'
import Destimages from './destimages'
import Vehicles from './bookvehicles'
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom'


const Destinations = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyAc3wrqiH-O6PfaihabGAEqHemmfp2XLxU"
  })
  const [centre, setCentre] = useState({
    lat: null,
    lng: null
  })
  const form = useRef();
  const [map, setMap] = useState(null)
  const [wikisearches, setWikisearches] = useState([]);
  const [wikitrue, setWikitrue] = useState(false)
  const [wikipage, setWikipage] = useState({})
  const [wikipagepresent, setWikipagepresent] = useState(false)
  const [showdestimage, setShowdestimage] = useState(true);
  const [loggedindata, setLoggedindata] = useState([])
  const [locname, setLocname] = useState("")
  const [maindata, setMaindata] = useState([]);
  const [image, setImage] = useState([])
  const [dispimg, Setdispimg] = useState([]);
  const [tourspot, setTourspot] = useState([]);
  const [xid, setXid] = useState([])
  const [dates, setDates] = useState({
    indate: null,
    outdate: null
  })
  const [entername, setEntername] = useState("")
  const [guidedata, setGuidedata] = useState({
    guidename: "",
    guideprice: ""
  })
  const [triprest, setTriprest] = useState([])
  const [triphotels, setTriphotels] = useState({
    hotelname: null,
    hotelprice: null
  })
  const [noofdays, setNoofdays] = useState({
    days: ""
  })
  const [showtours, setShowtours] = useState(false);
  const [restdata, setRestdata] = useState([]);
  const [tourspottry, setTourspottry] = useState([]);
  const [weather1, setWeather] = useState({
    windspeed: null,
    winddir: null,
    temp: null,
    clouds: null,
    humidity: null,
    sunrise: null,
    sunset: null,
  })
  const [forecast1, setForecast1] = useState({
    high: null,
    low: null,
    text: null,
    day: null
  })
  const [forecast2, setForecast2] = useState({
    high: null,
    low: null,
    text: null,
    day: null
  })
  const [forecast3, setForecast3] = useState({
    high: null,
    low: null,
    text: null,
    day: null
  })
  const [transport, setTransport] = useState({
    transportname: null,
    transportprice: null
  })
  let totaltrip = {
    username: localStorage.getItem("loggeduser"),
    Email: localStorage.getItem("logindet-mail"),
    Phone: localStorage.getItem("login-phone"),
    Location: locname,
    Days: noofdays.days,
    Guide: guidedata.guidename ? guidedata.guidename : "Not selected",
    Vehicle: transport.transportname ? transport.transportname : "Not selected",
    Hotel: triphotels.hotelname ? triphotels.hotelname : "Not selected",
    Checkin: dates.indate,
    Checkout: dates.outdate,
    Total_price: ` ${((Number.parseInt(guidedata.guideprice) / 2) * (Number.parseInt(noofdays.days))) + (Number.parseInt(triphotels.hotelprice) * (Number.parseInt(noofdays.days))) + ((Number.parseInt(transport.transportprice)) * Number.parseInt(noofdays.days))}`
  }

  const [checkoutsuccess, setCheckoutsuccess] = useState(false)

  //FUNCTIONS//

  let name, datesval;
  const enterdate = (e) => {
    name = e.target.name;
    datesval = e.target.value;
    setDates({ ...dates, [name]: datesval })
  }
  const handleChange = (e) => {
    setLocname(e.target.value)
    document.getElementById("search").style.animationName = "none"
  }
  const handlesubmit = () => {
    localStorage.removeItem("exploredloc")
    loggeduserdata();
    setShowtours(false)
    setMaindata([])
    setRestdata([])
    document.getElementById("search").style.animationName = "searchanime"
    document.getElementById("weather-initial").style.display = "block"
    document.getElementById("tripcheck-weather-cont").style.display = "flex"
    geocodeinfo(locname).then(data => {
      (data.map(data1 => setCentre({ ...centre, lat: Number.parseFloat(data1.location.lat), lng: Number.parseFloat(data1.location.lng) })))
    })

    wikisearch();

    weatherreport(locname).then(weatherforcast => {
      console.log(weatherforcast.forecasts[0])
      setWeather({
        ...weather1,
        windspeed: weatherforcast.current_observation.wind?.speed ? weatherforcast.current_observation.wind.speed : "Not found",
        winddir: weatherforcast.current_observation.wind?.direction ? weatherforcast.current_observation.wind.direction : "Not found",
        temp: weatherforcast.current_observation.condition?.temperature ? weatherforcast.current_observation.condition.temperature : "Not found",
        clouds: weatherforcast.current_observation.condition?.text ? weatherforcast.current_observation.condition.text : "Not found",
        humidity: weatherforcast.current_observation.atmosphere?.humidity ? weatherforcast.current_observation.atmosphere.humidity : "Not found",
        sunrise: weatherforcast.current_observation.astronomy?.sunrise ? weatherforcast.current_observation.astronomy.sunrise : "Not found",
        sunset: weatherforcast.current_observation.astronomy?.sunset ? weatherforcast.current_observation.astronomy.sunset : "Not found",
      })
      setForecast1({ ...forecast1, high: weatherforcast.forecasts[0].high, low: weatherforcast.forecasts[0].low, text: weatherforcast.forecasts[0].text, day: weatherforcast.forecasts[0].day })
      setForecast2({ ...forecast2, high: weatherforcast.forecasts[1].high, low: weatherforcast.forecasts[1].low, text: weatherforcast.forecasts[1].text, day: weatherforcast.forecasts[1].day })
      setForecast3({ ...forecast3, high: weatherforcast.forecasts[2].high, low: weatherforcast.forecasts[2].low, text: weatherforcast.forecasts[2].text, day: weatherforcast.forecasts[2].day })
    })

    if (document.getElementById("details").style.display == "none") {
      document.getElementById("details").style.display = "initial"
      document.getElementById("guides").style.display = "block"
      document.getElementById("touristload").style.display = "initial"
    }
    if (document.getElementById("rests").style.display == "none") {
      document.getElementById("rests").style.display = "initial"
      document.getElementById("restaurant").style.display = "block"
      document.getElementById("restload").style.display = "initial"
    }
    if (document.getElementById("hotels").style.display == "none") {
      document.getElementById("hotels").style.display = "initial"
      document.getElementById("hotelp").style.display = "block"
      document.getElementById("inputdates").style.display = "flex"
      document.getElementById("hotelload").style.display = "initial"
    }
    document.getElementById("yourtrip").style.display = "block"
  }

  const loggeduserdata = async () => {
    let logindet = {
      username: localStorage.getItem("loggeduser"),
      Email: localStorage.getItem("logindet-mail")
    }
    let getlogins = [logindet]
    setLoggedindata(getlogins)
  }

  const handledetails = () => {
    // console.log(72.877426, 19.07609)
    tourattr(centre.lng, centre.lat).then(features => {
      // console.log(features)
      features.map(tourdata => {
        if (features.indexOf(tourdata) < 20) {
        
          tourxid(tourdata.properties.xid).then(placedats => {
            console.log(placedats)
            xid.push(placedats)
            setShowtours(true)
          })
        }
      })
    })

    document.getElementById("details").style.display = "none"
    document.getElementById("guides").style.display = "none"
    document.getElementById("touristload").style.display = "none"
    document.getElementById("tourists").style.backgroundColor = "white"
    document.getElementById("tourhead").style.backgroundColor = "white"
  }

  const wikisearch = async () => {
    try {
      const url = 'https://en.wikipedia.org/w/api.php'
      const params = new URLSearchParams({
        action: 'query',
        list: 'search',
        srsearch: `Tourist locations in ${locname}`,
        format: 'json',
        origin: "*"
      })

      const result = await fetch(`${url}? ${params}`)
      const wikidata = await result?.json()

      if (result?.locname?.search[0]?.title) {
        // console.log(result)
      }
      else {
        console.log(wikidata?.query?.search)
        setWikisearches(wikidata?.query?.search)
        setWikitrue(true);
        setShowdestimage(false)
        document.getElementById("wikibackbtn").style.display = "initial"
      }
    }
    catch (error) {
      console.log(error)
    }
  }

  const handelrests = () => {
    console.log(centre.lat, centre.lng)
    restaurants(centre.lat, centre.lng).then(data => {
      setRestdata(data);
    })
    document.getElementById("rests").style.display = "none"
    document.getElementById("restaurant").style.display = "none"
    document.getElementById("restload").style.display = "none"
    document.getElementById("restaurants1").style.backgroundColor = "white"
    document.getElementById("resthead").style.backgroundColor = "white"
  }

  const handelhotels = () => {
    if (dates.indate != null && dates.outdate != null) {
      locationinfo(locname, dates.indate, dates.outdate).then(data1 => {
        setMaindata(data1)
      })
      document.getElementById("inputdates").style.display = "none"
      document.getElementById("hotels").style.display = "none"
      document.getElementById("hotelp").style.display = "none"
      document.getElementById("hotelload").style.display = "none"
      document.getElementById("hotels1").style.backgroundColor = "white"
      document.getElementById("hotelhead").style.backgroundColor = "white"
    }
    else {
      document.getElementById("inputdates").style.border = "5px 0px solid rgb(80 84 119)"
    }
  }

  if (image) {
    image.map(
      images => { dispimg.push(images.url) }
    )
  }
  const handleguide = (e) => {
    setGuidedata({ ...guidedata, guidename: e.target.closest(".guides").querySelector(".guidename").innerText, guideprice: e.target.closest(".guides").querySelector(".guide-price").innerText })

  }

  const triphotel = (e) => {
    setTriphotels({ ...triphotels, hotelname: e.target.closest(".hotelname").innerText, hotelprice: "2000" })
  }

  const selectTour = async (e) => {
    await tourspottry.push(e.target.closest(".tourspot").querySelector(".tourspottitle").innerText)
    setTourspottry(tourspottry)
    e.target.closest(".tourspot").id = 'tourspot-selected'
  }
  const tripdetails = () => {
    if (loggedindata[0].Email.length == 0) {
      document.getElementById("loginconfirm").style.display = "block"
      if (document.getElementById("noofdays").value == "") {
        document.getElementById("noofdays").style.backgroundColor = "#ffa6a6"
      }
    }
    else {
      document.getElementById("noofdays").style.backgroundColor = "white"
      document.getElementById("tripcheck").innerHTML = "📍Locations to Visit:" + " " + tourspottry
      document.getElementById("tripguide1").innerHTML = `Guide:${guidedata.guidename}, 💰Price :${(Number.parseInt(guidedata.guideprice) / 2) * Number.parseInt(document.getElementById("noofdays").value)}/-`
      document.getElementById("vehicle").innerHTML = `Vehicle:${transport.transportname}, 💰Price :${(Number.parseInt(transport.transportprice)) * Number.parseInt(document.getElementById("noofdays").value)}/-`
      sendEmail();
    }
  }

  const moreweather = () => {
    if (document.getElementById("moreinfo").value == "off") {
      document.getElementById("forecast").style.display = "flex"
      document.getElementById("weather-initial").style.display = "flex"
      document.getElementById("weather-initial").style.alignItems = "center"
      document.getElementById("moreinfo").innerText = "Less"
      document.getElementById("moreinfo").value = "on"
    }
    else if (document.getElementById("moreinfo").value == "on") {
      document.getElementById("forecast").style.display = "none"
      document.getElementById("weather-initial").style.display = "block"
      document.getElementById("moreinfo").innerText = "More"
      document.getElementById("moreinfo").value = "off"
    }

  }

  const sendEmail = (e) => {
    // console.log(totaltrip)
    emailjs.sendForm('service_zu6kd9m', 'template_71rje2i', form.current, {
      publicKey: '0jDVFv-PznKuOziiu',
    })
      .then(
        () => {
          console.log('SUCCESS!');
          setCheckoutsuccess(true)
        },
        (error) => {
          console.log('FAILED...', error.text);
          setCheckoutsuccess(false)
        },
      );

    let r = fetch('http://localhost:5002/tripdetails', { method: 'post', headers: { "Content-Type": "application/json" }, body: JSON.stringify(totaltrip) })
  };

  const handledays = (e) => {
    setNoofdays({ ...noofdays, days: e.target.value })
  }

  let naemrr; let z = 0;
  const namearr = ["", "India", "Goa", "Manali", "Nainital", "Agra", "Mussouri", "Lakshadweep", "Coorg", "Ujjain", "Ooty"]

  useEffect(() => {
    const interval = setInterval(() => {
      if (z > 8) { z = 0; }
      else {
        z = z + 1;
        setEntername(namearr[z])
      }
    }, 2000)
    return () => clearInterval(interval)
  }, [z])

  const showpages = async (wikidatas) => {
    try {
      const url = `https://en.wikipedia.org/w/api.php?action=parse&page=${wikidatas?.title}&prop=text&formatversion=2&origin=*&format=json`

      const res = await fetch(`${url}`)
      const data = await res?.json();
      // console.log(data)
      setWikipage(data)
      setWikipagepresent(true);
      setShowdestimage(false)
    }
    catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (localStorage.getItem("exploredloc") !== null) {
      // console.log(localStorage.getItem("exploredloc"))
      setLocname(`${localStorage.getItem("exploredloc")}`)
      localStorage.removeItem("exploredloc")
    }
    else { }
  }, [])

  const handlevehicles = (e) => {
    setTransport({ ...transport, transportname: e.target.closest(".guides").querySelector(".exp").innerText, transportprice: e.target.closest(".guides").querySelector(".guidename").innerText })
  }

  const closecheckout = ()=>{
    setCheckoutsuccess(false)
  }
  const closetripcheck = ()=>{
    document.getElementById('tripcheck-weather-cont').style.display = "none"
  }


  return (
    <>
      <form ref={form} style={{ display: "none" }}>
        <label>Name</label>
        <input type="text" name="user_name" value={loggedindata.length > 0 ? loggedindata[0].username : "Null"} />
        <label>Email</label>
        <input type="email" name="user_email" value={loggedindata.length > 0 ? loggedindata[0].Email : "Null"} />
        <label>Message</label>
        <textarea name="message" value={`Here are your trip details!,\n
       Destination: ${locname},\n
       No.of trip days: ${noofdays.days}, \n
        Your guide: ${guidedata.guidename},\n
        Your vehicle: ${transport.transportname},\n
        Hotel: ${triphotels.hotelname ? triphotels.hotelname : "Not selected"},\n
  Check in: ${dates.indate}, \n
   Check out: ${dates.outdate}, \n
       Locations: ${tourspottry}, \n
       Total price: ${((Number.parseInt(guidedata.guideprice) / 2) * (Number.parseInt(noofdays.days))) + (Number.parseInt(triphotels.hotelprice) * (Number.parseInt(noofdays.days))) + ((Number.parseInt(transport.transportprice)) * Number.parseInt(noofdays.days))}/-`} />
      </form>


      <Navbar />
   <div className='destination-cover'><img src="destinationscover.jpeg" alt="" /></div>

      <div className='tripcheck-weather-cont' id='tripcheck-weather-cont' style={{ display: "none" }} >
        <button id='closetripcheck' onClick={closetripcheck}>Close</button>
        <section className="weather-initial" id='weather-initial' style={{ transitionDuration: "0.5s", display: "none", margin: "1% 0", alignItems: "centre", backgroundColor: "#232F3E" }}>
          <div className='currentweather' id='currentweather' style={{ width: "100%" }}>
            <div className="temp" style={{ width: "100%", margin: "0rem 4rem", fontFamily: "math" }}>🌡 Temperature: {weather1.temp} C</div>
            <div className="clouds" style={{ width: "100%", margin: "0rem 4rem", fontFamily: "math" }}>⛅ Clouds: {weather1.clouds}</div>
            <div className="wind" style={{ width: "100%", margin: "0rem 4rem", fontFamily: "math" }} >🎐 Wind: {weather1.windspeed}m/s {weather1.winddir}</div>
            <div className="humidity" style={{ width: "100%", margin: "0rem 4rem", fontFamily: "math" }}>🥵 Humidity: {weather1.humidity}%</div>
            <div className="astronomy" style={{ width: "100%", margin: "0rem 4rem", fontFamily: "math" }}>🌇/🌆: {weather1.sunrise} / {weather1.sunset}</div>
            <button id='moreinfo' onClick={moreweather} value={"off"} >More</button>
          </div>
          <section className='forecast' id='forecast' style={{ width: "130%", fontFamily: "math", marginRight: "4rem", color: "white", position: "relative", left: "2rem" }}>
            <div style={{ borderBottom: "2px dashed white", textAlign: "left", height: "4vh", display: "flex", alignItems: "center", justifyContent: "center" }} className="forecast">Forecast (Today and Next 2days)</div>
            <div style={{ borderBottom: "2px solid white", textAlign: "left", height: "5vh", display: "flex", alignItems: "center" }} className="forecast">{forecast1.day} 🌡 Temperature: {forecast1.high} / {forecast1.low} 🌫: {forecast1.text} </div>
            <div style={{ borderBottom: "2px solid white", textAlign: "left", height: "5vh", display: "flex", alignItems: "center" }} className="forecast">{forecast2.day} 🌡 Temperature: {forecast2.high} / {forecast2.low} 🌫: {forecast2.text} </div>
            <div style={{ borderBottom: "0px solid white", textAlign: "left", height: "5vh", display: "flex", alignItems: "center" }} className="forecast">{forecast3.day} 🌡 Temperature: {forecast3.high} / {forecast3.low} 🌫: {forecast3.text} </div>
          </section>
        </section>

        <section className="yourtrip" id='yourtrip' style={{ display: "none" }}>
          <li id='tripname' >{locname.slice(0, 19)}...</li>
          <li className='price-checkout-cont' style={{ width: "100%", display: "flex", height: "auto", alignItems: "center", justifyContent: "space-between" }}>
            <input style={{ zIndex: "1" }} onChange={handledays} value={noofdays.days} id='noofdays' type="number" placeholder='No of Days!' />
            <div className="total-price" style={{ height: "4vh" }}>💰Total :{((Number.parseInt(guidedata.guideprice) / 2) * Number.parseInt(noofdays.days)) + Number.parseInt(triphotels.hotelprice * Number.parseInt(noofdays.days)) + ((Number.parseInt(transport.transportprice)) * Number.parseInt(noofdays.days))}/-</div>
            <button id='checkout' onClick={() => { tripdetails() }} style={{ zIndex: "1" }}>Check Out</button>
          </li>

          <ul className='hotel-guide-cont' style={{ flexWrap: "wrap", fontFamily: "math", position: "relative", left: "-5rem", width: "80%" }}>
            <li id='triphotel1' style={{ width: "100%", paddingLeft: "1rem", listStyle: "none" }}>Hotel: {triphotels.hotelname ? triphotels.hotelname : "We book a room for you in the selected hotel."}, 💰price:{triphotels.hotelprice ? triphotels.hotelprice : "Price"}</li>
            <li id='tripguide1' style={{ width: "100%", paddingLeft: "1rem", listStyle: "none" }}>Guide: {guidedata.guidename}, 💰Price: {guidedata.guideprice}</li>
            <li id='vehicle' style={{ width: "100%", paddingLeft: "1rem", listStyle: "none" }}> Vehicle: {transport.transportname}, 💰Price: {transport.transportprice}/- per day</li>
            <div id='tripcheck'></div>
          </ul>
          <div className="loginconfirm" id='loginconfirm' style={{ display: "none" }}>😕 Did'nt you LOG IN? Please do.</div>

          
        </section>
        {checkoutsuccess == true ?
          <div className='checkedoutimg' id='checkedoutimg' style={{ position: "absolute" }}>
            <img src="checkedout.avif" alt="" />
            
            <div>
            <button id='checkoutclose' style={{cursor:"pointer"}} onClick={closecheckout}>Close</button>
              <h2>Checked out Successfully!</h2>
              <section>We recieved your trip details. Hang on, Our support team will call you to confirm your trip.</section>
              <section>In the mean time You can pack your bags.</section>
              <section>-SUGARPINE NATIONAL</section>
           
            </div>
          </div> : <></>}
      </div>


      

      {/* SEARCH BAR AND HEAD */}
      <div className='head-cont'>
        <div className="place-name">
          <div className="search">
            <input type="text" placeholder={`Search "${entername}"`} id='searchbar' value={locname} onChange={handleChange} className='searchbar' />
            <button id='search' onClick={() => { handlesubmit() }} > Search</button>
          </div>
          <h3 id='place-name' >{locname.slice(0, 15)}...</h3>
          <button className='wikipagebackbtn' id='wikibackbtn' style={{ display: "none" }} onClick={() => { setWikipage({ parse: { text: ' ' } }), setWikipagepresent(false) }}>Back</button>
          {showdestimage == true ?
            <Destimages /> : <></>}
          <div className='searchlinks' style={{}}>
            {(wikitrue == true && wikipagepresent == false) ?
              wikisearches ? wikisearches.map(wikidatas => {
                return <Link className='' onClick={() => { showpages(wikidatas) }}>
                  <li data-icon="😔"> {wikidatas.title} </li>
                </Link>
              }) : <div>Sorry, No information found😔</div> : <></>}
          </div>

          {
            wikipage?.parse?.text?.length !== 0 ?
              (<div className='wikipagecont' style={{}}>
                <div dangerouslySetInnerHTML={{ __html: wikipage?.parse?.text }}>
                </div>
              </div>) : <div></div>
          }

        </div>
        {/* CHECKOUT SUCCESS */}
        
      </div>

      {/* SERVICES BAR */}
      <div className='ourservicesh2'> <h2>Our Services</h2></div>
      <div className="service-nav">
        <a href="#hotels1" style={{ color: "rgb(80, 84, 119)", backgroundColor: "rgb(191, 195, 233)" }}>Hotels</a>
        <a href="#restaurants1" style={{ color: "#111154", backgroundColor: "rgb(204, 233, 255)" }}>Restaurants</a>
        <a href="#tourists" style={{ color: "rgb(116 106 91)", backgroundColor: "rgb(255, 225, 180)" }}>Attractions</a>
      </div>
      <div className="ourservices">
        <div className="ourservices-slide">
          <div className="service-cont" id='hotels1' style={{ color: "", backgroundColor: "transparent" }}>
            <h4 className='serviceconth4' id='hotelhead' style={{ color: "#232F3E", backgroundColor: "#ffffff4a" }} >Hotels</h4>
            <img id='hotelload' style={{ width: "90%", margin: "1% 5%" }} src="hotelload.png" alt="" />
            <div id="inputdates"><input className='enterdate' type="text" placeholder='Check-in: yyyy-mm-dd' onChange={enterdate} name='indate' value={dates.indate} /> <input className='enterdate' name='outdate' value={dates.outdate} type="text" placeholder='Check-out: yyyy-mm-dd' onChange={enterdate} /></div>
            <button id='hotels' onClick={() => { handelhotels() }}>Click to search for Hotels around!</button>
            <p id='hotelp'>Click the above button to search for Hotels nearby the searched location!</p>

            {maindata ? maindata.map(data2 => {
              return (
                <Hotelcardcont key={data2} image={"https://m.economictimes.com/thumb/msid-108656313,width-1200,height-900,resizemode-4,imgsize-28760/hotel.jpg"}
                  title={`${data2.slice(0, 36)}...`}
                  location={locname}
                  func={triphotel}
                  price={"2000/-"}
                />
              )
            })
              : <div className="notfound"> Sorry,No Hotels Found.😔 <br /> PLease Check for local hotels on <a href="https://www.google.com/">Google</a></div>}
          </div>



          <div className="service-cont" id='restaurants1' style={{ color: "black", backgroundColor: "transparent" }}>
            <h4 className='serviceconth4' style={{ color: "#232F3E", backgroundColor: "#ffffff4a" }} id='resthead'>Restaurants</h4>
            <img id='restload' style={{}} src="restload.png" alt="" />
            <button id='rests' onClick={() => { handelrests() }}>Click to search for Restaurants around!</button>
            <p id='restaurant' style={{ color: "#111154" }}>Click the above button to search for Restaurants nearby the searched location!</p>
            {restdata ? restdata.map(data1 => {
              return (
                <Restcartcont key={data1?.location_id} title={data1?.name} image={data1?.photo?.images?.medium?.url ? data1?.photo?.images?.medium?.url : "https://png.pngtree.com/png-clipart/20190313/ourmid/pngtree-planar-cartoon-street-view-shop-restaurant-and-vendor-elements-png-image_848867.jpg"}
                  webpage={data1?.website ? data1?.website : ""} rating={data1?.rating ? data1?.rating : ""} />
              )

            }) : <div className="notfound"> Sorry,No Restaurants Found.😔 <br /> PLease Check for local restaurants on <a href="https://www.google.com/">Google</a></div>}
          </div>



          <div className="service-cont" id='tourists' style={{ color: "", backgroundColor: "transparent" }}><h4 className='serviceconth4' style={{ color: "#232F3E", backgroundColor: "#ffffff4a" }} id='tourhead'> Tourist Locations</h4>
            <img style={{ width: "90%", margin: "1% 5%" }} id='touristload' src="toursindia.png" alt="" />
            <button id='details' onClick={() => { handledetails() }}>Click to search for tourist spots!</button>
            <p id='guides' style={{ color: "" }} >Click the button above to search for tourist spots nearby the searched location!</p>
            {
              showtours == true ? xid.map(xidata => {
                // console.log(xid)
                return (<Tourspotcont key={`${xidata[1]}`} title={`${xidata[0]}` ? `${xidata[0]}` : "Tourist spot"} wikidata={`${xidata[2]}` ? `${xidata[2]}` : "Sorry,No Info found😔"} maps={`${xidata[1]}`} func1={selectTour} />)
              })
                : <></> }
          </div>
        </div>
      </div>
      {/* GUIDES CONT */}
      <div className='guide-cont'>
        <h3 className='guideconth3'>Our Guides at Your Service!</h3>
        <div className="guideslide">
          <li className='guides' onClick={handleguide}>
            <img className='guide-img' src="tourist guide.jpg" alt="" />
            <div className="guidename">Tarun</div>
            <div className="exp"> Pro</div>
            <div className="guide-price">3000/- (2 days)</div>
          </li>
          <li className='guides' onClick={handleguide}>
            <img className='guide-img' src="touristguidefem.png" alt="" />
            <div className="guidename">Amira</div>
            <div className="exp"> Pro</div>
            <div className="guide-price">3000/- (2 days )</div>
          </li>
          <li className='guides' onClick={handleguide}>
            <img className='guide-img' src="tourist guide.jpg" alt="" />
            <div className="guidename">Hassan</div>
            <div className="exp"> plus</div>
            <div className="guide-price">2500/- (2 days)</div>
          </li>
          <li className='guides' onClick={handleguide}>
            <img className='guide-img' src="tourist guide.jpg" alt="" />
            <div className="guidename">Ishaan</div>
            <div className="exp"> Expert</div>
            <div className="guide-price">4500/- (2 days)</div>
          </li>
          <li className='guides' onClick={handleguide}>
            <img className='guide-img' src="touristguidefem.png" alt="" />
            <div className="guidename">Eesha</div>
            <div className="exp"> Pro</div>
            <div className="guide-price">3000/- (2 days )</div>
          </li>
          <li className='guides' onClick={handleguide}>
            <img className='guide-img' src="touristguidefem.png" alt="" />
            <div className="guidename">Meera</div>
            <div className="exp"> Expert</div>
            <div className="guide-price">4500/- (2days)</div>
          </li>
          <li className='guides' onClick={handleguide}>
            <img className='guide-img' src="tourist guide.jpg" alt="" />
            <div className="guidename">Mithun</div>
            <div className="exp"> Pro</div>
            <div className="guide-price">3000/- (2 days)</div>
          </li>
          <li className='guides' onClick={handleguide}>
            <img className='guide-img' src="tourist guide.jpg" alt="" />
            <div className="guidename">Zahir</div>
            <div className="exp">Expert</div>
            <div className="guide-price">4500/- (2 days)</div>
          </li>
          <li className='guides' onClick={handleguide}>
            <img className='guide-img' src="touristguidefem.png" alt="" />
            <div className="guidename">Reena</div>
            <div className="exp"> Expert</div>
            <div className="guide-price">4500/- (2 days)</div>
          </li>
          <li className='guides' onClick={handleguide}>
            <img className='guide-img' src="touristguidefem.png" alt="" />
            <div className="guidename">Zoey</div>
            <div className="exp"> Expert</div>
            <div className="guide-price"> 4500/- (2 days)</div>
          </li>
        </div>
      </div>
      {/* VEHICLES CONT */}
      <Vehicles func={handlevehicles} />
      {/* GOOGLE MAPS */}
      {isLoaded ?
        <div className="locmap"><GoogleMap onLoad={(map) => { setMap(map) }} center={centre} zoom={15} mapContainerStyle={{ width: "100%", height: "100%" }} options={{ zoomControl: false, fullscreenControlOptions: false }} /> <Marker position={centre} /> <button id='gobacktoloc' onClick={() => { map.panTo(centre) }} style={{ width: "fit-content", height: "10%", backgroundColor: "black", color: "white" }}>go to searched location</button> </div>
        : <div className="locmap"></div>
      }

      <Footer />
    </>
  )
}

export default Destinations

