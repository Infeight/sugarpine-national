import React from 'react'
import './dest_cards.css'
import { Link } from 'react-router-dom'

const Dest_cards = () => {

  const locationinfo={
    "goa": "Goa, in western India, is famed for its beaches, nightlife, and Portuguese legacy. Its culture blends Indian and Western influences seen in its food, music, and architecture. Goa attracts tourists with its relaxed vibe, water sports, and beachside eateries. The state also boasts lush landscapes perfect for adventure and discovery.",
    "kashmir":"Kashmir, in northern India, is famed for its stunning landscapes and diverse cultural heritage. It's a region of mountains, valleys, and lakes, with influences from Hindu, Buddhist, and Islamic traditions. Political tensions between India and Pakistan have affected the area, but Kashmir still attracts visitors seeking natural beauty and cultural richness.",
    "jaisalmer":"Jaisalmer, located in the heart of the Thar Desert in Rajasthan, India, is known as the GOlden City due to its sandstone architecture that glows in the sunlight. The majestic Jaisalmer Fort dominates the skyline, offering panoramic views of the desert landscape. The city is famous for its intricately carved havelis (mansions) that showcase exquisite craftsmanship and intricate designs.",
    "munnar":"Munnar, located in the Western Ghats mountain range of Kerala, South India, is renowned for its vast tea plantations, rolling hills, and misty landscapes. The region's cool climate and scenic beauty make it a popular destination for honeymooners and nature lovers alike. Munnar is also home to several endangered species of flora and fauna, adding to its ecological significance. ",
     "agra":"Agra, located in northern India, is best known as the home of the iconic Taj Mahal, a UNESCO World Heritage Site and one of the Seven Wonders of the World. Alongside the Taj Mahal, Agra is rich in Mughal architecture, including the Agra Fort, another UNESCO site, and the exquisite tomb of Itimad-ud-Daulah. The city showcases a blend of Mughal and Indian cultures, arts, and traditions. ",
     "manali":"Nestled in the Indian state of Himachal Pradesh, Manali is a picturesque hill station renowned for its breathtaking mountain vistas, lush greenery, and adventurous activities. Situated along Beas River, it offers opportunities for trekking, skiing, and paragliding amidst its stunning landscapes. The town's marketplaces add to its charm, while nearby Solang Valley attract travelers year-round.",
     "mussouri":"Mussoorie, nestled in the foothills of the Himalayas in Uttarakhand, India, is a charming hill station renowned for its picturesque beauty and pleasant climate. It offers panoramic views of the surrounding snow-capped peaks and lush green valleys. The town boasts colonial-era architecture, bustling markets, and a range of outdoor activities such as trekking and paragliding.",
     "naninital":"Nainital, a charming hill station in the Indian state of Uttarakhand, is known for its picturesque surroundings, including a sparkling lake surrounded by verdant hills. The town is famous for its pleasant climate, making it a popular summer retreat for tourists seeking respite from the heat. Nainital offers various activities such as boating on the lake, and local handicrafts in its bustling markets."
  }


 
  return (
 <>
    <div className='main-card' >
      
      <div className="img"><img src="../../goaimg.jpg" alt="" /><h3 className="placename">GOA</h3><p className='place-head'>{locationinfo.goa}</p></div>
      <div className="img"><img src="../../kashmir.jpg" alt="" /><h3 className="placename">KASHMIR</h3><p className='place-head'>{locationinfo.kashmir}</p></div>
      <div className="img"><img src="../../jaisalmer.jpg" alt="" /><h3 className="placename">JAISALMER</h3><p className='place-head'>{locationinfo.jaisalmer}</p></div>
      <div className="img"><img src="../../agra.jpg" alt="" /><h3 className="placename">AGRA</h3><p className='place-head'>{locationinfo.agra}</p></div>
    </div>
    
    <div className='main-card' >
      
      <div className="img"><img src="../../munnar.jpg" alt="" /><h3 className="placename">MUNNAR</h3><p className='place-head'>{locationinfo.munnar}</p></div>
      <div className="img"><img src="../../nainital.jpg" alt="" /><h3 className="placename">NAINITAL</h3><p className='place-head'>{locationinfo.naninital}</p></div>
      <div className="img"><img src="../../manali.jpg" alt="" /><h3 className="placename">MANALI</h3><p className='place-head'>{locationinfo.manali}</p></div>
      <div className="img"><img src="../../mussori.jpg" alt="" /><h3 className="placename">MUSSOURI</h3><p className='place-head'>{locationinfo.mussouri}</p></div>
     
    </div>

    <button className='location-more-btn'><Link to= {'/destinations'} style={{color:"white", textDecoration:"none",fontFamily:"cursive"}}>More</Link></button>
    </>
  )
}

export default Dest_cards
