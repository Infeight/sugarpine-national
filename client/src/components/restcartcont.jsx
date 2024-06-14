import React from 'react'

const Restcartcont = ({key,title,image,rating,webpage,func1}) => {
  return (
    <div className="restaurant" key={key} >
           <li className="restimg"><img src={image} alt="" /></li>
   <div className="restli" >

    <div className="restname">{`${title}`}</div>
    <li className="rating">Rating:{rating}</li>
    <li className="webpage"><a href={webpage} target='_blank'>Visit Hotel's Webpage!</a></li>
   </div>
  </div>
  )
}

export default Restcartcont

