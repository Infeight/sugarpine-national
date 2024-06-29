import React from 'react'


const Hotelcardcont = ({image, title,location,propertyType,rating,key,func,price}) => {

 return(
  <div className="hotels" onClick={func} key={key}>
  <div className="restimg"><img src={image} alt="" /></div>
  <div className="hotelname">{`${title}`}</div>
  <div className="hotelprice" >{`${price} per night`} </div>
  
</div>
)
     
    
  } 
export default Hotelcardcont
