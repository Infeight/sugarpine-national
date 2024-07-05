import React from 'react'
import './dest_cards.css'
import { Link } from 'react-router-dom'
import { BiTrip } from "react-icons/bi";

const Dest_cards = () => {

  const locationinfo={
    "goa": "Goa, in western India, is famed for its beaches, nightlife, and Portuguese legacy. Its culture blends Indian and Western influences seen in its food, music, and architecture. Goa attracts tourists with its relaxed vibe, water sports, and beachside eateries. The state also boasts lush landscapes perfect for adventure and discovery.",
    "kashmir":"Kashmir, in northern India, is famed for its stunning landscapes and diverse cultural heritage. It's a region of mountains, valleys, and lakes, with influences from Hindu, Buddhist, and Islamic traditions. Political tensions between India and Pakistan have affected the area, but Kashmir still attracts visitors seeking natural beauty and cultural richness.",
    "jaisalmer":"Jaisalmer, located in the heart of the Thar Desert in Rajasthan, India, is known as the GOlden City due to its sandstone architecture that glows in the sunlight. The majestic Jaisalmer Fort dominates the skyline, offering panoramic views of the desert landscape. The city is famous for its intricately carved havelis (mansions) that showcase exquisite craftsmanship and designs.",
    "munnar":"Munnar, located in the Western Ghats mountain range of Kerala, South India, is renowned for its vast tea plantations, rolling hills, and misty landscapes. The region's cool climate and scenic beauty make it a popular destination for honeymooners and nature lovers alike. Munnar is also home to several endangered species of flora and fauna, adding to its ecological significance. ",
     "agra":"Agra, located in northern India, is best known as the home of the iconic Taj Mahal, a UNESCO World Heritage Site and one of the Seven Wonders of the World. Alongside the Taj Mahal, Agra is rich in Mughal architecture, including the Agra Fort, another UNESCO site, and the exquisite tomb of Itimad-ud-Daulah. The city showcases a blend of Mughal and Indian cultures. ",
     "manali":"Nestled in the Indian state of Himachal Pradesh, Manali is a picturesque hill station renowned for its breathtaking mountain vistas, lush greenery, and adventurous activities. Situated along Beas River, it offers opportunities for trekking, skiing, and paragliding amidst its stunning landscapes. The town's marketplaces add to its charm.",
     "mussouri":"Mussoorie, nestled in the foothills of the Himalayas in Uttarakhand, India, is a charming hill station renowned for its picturesque beauty and pleasant climate. It offers panoramic views of the surrounding snow-capped peaks and lush green valleys. The town boasts colonial-era architecture, and a range of outdoor activities such as trekking and paragliding.",
     "naninital":"Nainital, a charming hill station in the Indian state of Uttarakhand, is known for its picturesque surroundings, including a sparkling lake surrounded by verdant hills. The town is famous for its pleasant climate, making it a popular summer retreat for tourists seeking respite from the heat. Nainital offers various activities such as boating on the lake, and local handicrafts.",
     "ooty":"Ooty, also known as Udhagamandalam, is a scenic hill station in Tamil Nadu, India, renowned for its lush tea gardens, rolling hills, and pleasant climate. It attracts tourists with its picturesque landscapes, including the Ooty Lake, Botanical Gardens, and Doddabetta Peak. The town's colonial-era charm is reflected in its architecture and the heritage Nilgiri Mountain Railway.",
     "haridwar":" Haridwar, one of India’s most ancient and revered cities. Situated on the banks of the holy Ganges River, Haridwar is a hub of spirituality and culture, \"THE GATEWAY OF GODS\". Whether you’re seeking spiritual solace, exploring historic temples, or experiencing vibrant festivals, Haridwar offers a rich and immersive experience.",
     "ujjain":"Ujjain, located in the Indian state of Madhya Pradesh, is one of the country's oldest cities and a significant religious center. It is renowned for the Mahakaleshwar Temple, one of the twelve Jyotirlingas, and the Kumbh Mela, a major Hindu festival held every twelve years.On the banks of the Shipra River, a rich cultural and heritage with ancient architectural marvels. ",
     "auli":"Auli, located in the Indian state of Uttarakhand, is a renowned ski destination set amidst the stunning Himalayan peaks. Known for its well-maintained slopes and panoramic views, it attracts both professional skiers and beginners. Besides skiing, Auli offers trekking opportunities, such as the trek to Gorson Bugyal, and cable car rides with breathtaking vistas.",
     "mahabaleshwar":"Mahabaleshwar, a hill station in Maharashtra, India, is known for its stunning viewpoints, lush strawberry farms, and cool climate. The town offers breathtaking vistas of the Western Ghats and the Krishna River, attracting nature lovers and trekkers. Key attractions include Arthur's Seat, Venna Lake, and Pratapgad Fort. Mahabaleshwar's vibrant markets add to its charm.",
     "rishikesh":"\"YOGA CAPITAL OF THE WORLD\", a serene town nestled in the foothills of the Himalayas and known as the Gateway to the Garhwal Himalayas. Famous for its spiritual ambiance, adventure activities, and stunning natural beauty, Rishikesh offers a unique blend of peace and excitement. Here’s a brief guide to help you explore this enchanting destination.",
     "coorg":"Coorg, also known as Kodagu, is a picturesque hill station in Karnataka, India, famous for its coffee plantations and verdant landscapes. The region offers a tranquil retreat with its lush forests, cascading waterfalls, and mist-covered hills. Visitors can enjoy its rich history through ancient temples, traditional Kodava festivals, and local cuisine.",
     "mumbai":" The \"CITY OF DREAMS\", the bustling metropolis that never sleeps! As the financial capital of India and a melting pot of cultures, Mumbai offers a unique blend of traditional charm and modern vibrancy. Here's a brief guide to help you explore and enjoy this dynamic city.Mumbai is a city that promises an unforgettable experience with its rich history, and vibrant lifestyle."
  }
  // localStorage.removeItem("exploredloc")

  const handlelocname = (e)=>{
//  console.log(e.target.closest(".img").querySelector(".placename").innerText)
 localStorage.setItem("exploredloc",`${e.target.closest(".img").querySelector(".placename").innerText}, India` )
  }

 
  return (
 <>
    <div className='main-card' >
      <div className="maincardscroll">
      <div className="img" style={{"--position": 1}} id='img1'><img src="../../goaimg.jpg" alt="" /><div className="explorebtncont"><h3 className="placename">GOA</h3><li className='explorebtn' onClick={handlelocname} style={{}}><Link to= {'/destinations'}><BiTrip /> Explore </Link></li></div><p className='place-head'>{locationinfo.goa}</p></div>
      <div className="img" style={{"--position": 3}} id='img2'><img src="../../kashmir.jpg" alt="" /><div className="explorebtncont"><h3 className="placename">KASHMIR</h3><li className='explorebtn' onClick={handlelocname} style={{}}><Link to= {'/destinations'}><BiTrip /> Explore </Link></li></div><p className='place-head'>{locationinfo.kashmir}</p></div>
      <div className="img" style={{"--position": 4}} id='img3'><img src="../../jaisalmer.jpg" alt="" /><div className="explorebtncont"><h3 className="placename">JAISALMER</h3><li className='explorebtn' onClick={handlelocname} style={{}}><Link to= {'/destinations'}><BiTrip /> Explore </Link></li></div><p className='place-head'>{locationinfo.jaisalmer}</p></div>
      <div className="img" style={{"--position": 5}} id='img4'><img src="../../agra.jpg" alt="" /><div className="explorebtncont"><h3 className="placename">AGRA</h3><li className='explorebtn' onClick={handlelocname} style={{}}><Link to= {'/destinations'}><BiTrip /> Explore </Link></li></div><p className='place-head'>{locationinfo.agra}</p></div>
      <div className="img" style={{"--position": 6}} id='img5'><img src="../../ooty.jpg" alt="" /><div className="explorebtncont"><h3 className="placename">OOTY</h3><li className='explorebtn' onClick={handlelocname} style={{}}><Link to= {'/destinations'}><BiTrip /> Explore </Link></li></div><p className='place-head'>{locationinfo.ooty}</p></div>
      <div className="img" style={{"--position": 7}} id='img6'><img src="../../ujjain.jpg" alt="" /><div className="explorebtncont"><h3 className="placename">UJJAIN</h3><li className='explorebtn' onClick={handlelocname} style={{}}><Link to= {'/destinations'}><BiTrip /> Explore </Link></li></div><p className='place-head'>{locationinfo.ujjain}</p></div>
      <div className="img" style={{"--position": 8}} id='img7'><img src="../../shimla.jpg" alt="" /><div className="explorebtncont"><h3 className="placename">Shimla</h3><li className='explorebtn' onClick={handlelocname} style={{}}><Link to= {'/destinations'}><BiTrip /> Explore </Link></li></div><p className='place-head'>{locationinfo.mahabaleshwar}</p></div>
      <div className="img" style={{"--position": 9 , marginRight:"1vw"}} id='img8'><img src="../../auli.jpg" alt="" /><div className="explorebtncont"><h3 className="placename">AULI</h3><li className='explorebtn' style={{}}><Link to= {'/destinations'}><BiTrip /> Explore </Link></li></div><p className='place-head'>{locationinfo.auli}</p></div>
      </div>
     
    </div>
    <div className="slidernav" style={{width:"50vw",margin:"auto", height:"2vw",position:"relative", top:"12vw", justifyContent:"space-evenly", alignItems:"center"}}>
        <a href="#img1"></a>
        <a href="#img2"></a>
        <a href="#img3"></a>
        <a href="#img4"></a>
        <a href="#img5"></a>
        <a href="#img6"></a>
        <a href="#img7"></a>
        <a href="#img8"></a>
      </div>
    
    <div className='main-card' >
      <div className="maincardscroll">
      <div className="img" id='img11'><img src="../../munnar.jpg" alt="" /><div className="explorebtncont"><h3 className="placename">MUNNAR</h3><li className='explorebtn' onClick={handlelocname} style={{}}><Link to= {'/destinations'}><BiTrip /> Explore </Link></li></div><p className='place-head'>{locationinfo.munnar}</p></div>
      <div className="img" id='img12'><img src="../../nainital.jpg" alt="" /><div className="explorebtncont"><h3 className="placename">NAINITAL</h3><li className='explorebtn' onClick={handlelocname} style={{}}><Link to= {'/destinations'}><BiTrip /> Explore </Link></li></div><p className='place-head'>{locationinfo.naninital}</p></div>
      <div className="img" id='img13'><img src="../../manali.jpg" alt="" /><div className="explorebtncont"><h3 className="placename">MANALI</h3><li className='explorebtn' onClick={handlelocname} style={{}}><Link to= {'/destinations'}><BiTrip /> Explore </Link></li></div><p className='place-head'>{locationinfo.manali}</p></div>
      <div className="img" id='img14'><img src="../../mussori.jpg" alt="" /><div className="explorebtncont"><h3 className="placename">MUSSOURI</h3><li className='explorebtn' onClick={handlelocname} style={{}}><Link to= {'/destinations'}><BiTrip /> Explore </Link></li></div><p className='place-head'>{locationinfo.mussouri}</p></div>
      <div className="img" id='img15'><img src="../../rishikesh.jpg" alt="" /><div className="explorebtncont"><h3 className="placename">RISHIKESH</h3><li className='explorebtn' onClick={handlelocname} style={{}}><Link to= {'/destinations'}><BiTrip /> Explore </Link></li></div><p className='place-head'>{locationinfo.rishikesh}</p></div>
      <div className="img" id='img16'><img src="../../coorg.jpg" alt="" /><div className="explorebtncont"><h3 className="placename">COORG</h3><li className='explorebtn' onClick={handlelocname} style={{}}><Link to= {'/destinations'}><BiTrip /> Explore </Link></li></div><p className='place-head'>{locationinfo.coorg}</p></div>
      <div className="img" id='img17'><img src="../../mumbai.jpg" alt="" /><div className="explorebtncont"><h3 className="placename">MUMBAI</h3><li className='explorebtn' onClick={handlelocname} style={{}}><Link to= {'/destinations'}><BiTrip /> Explore </Link></li></div><p className='place-head'>{locationinfo.mumbai}</p></div>
      <div className="img" id='img18' style={{ marginRight: "1vw"}}><img src="../../haridwar.jpg" alt="" /><div className="explorebtncont"><h3 className="placename">HARIDWAR</h3><li className='explorebtn' style={{}}><Link to= {'/destinations'}><BiTrip /> Explore </Link></li></div><p className='place-head'>{locationinfo.haridwar}</p></div>
      </div>
    </div>
    <div className="slidernav" style={{width:"50vw",margin:"auto", height:"2vw",position:"relative", top:"12vw", justifyContent:"space-evenly", alignItems:"center"}}>
        <a href="#img11"></a>
        <a href="#img12"></a>
        <a href="#img13"></a>
        <a href="#img14"></a>
        <a href="#img15"></a>
        <a href="#img16"></a>
        <a href="#img17"></a>
        <a href="#img18"></a>
      </div>

    {/* <li className='location-more-btn'><Link to= {'/destinations'} style={{color:"white", textDecoration:"none",fontFamily:"cursive"}}>More</Link></li> */}
    </>
  )
}

export default Dest_cards
