import React from 'react'

import Destinations from './destinations';

const Vehicles = ({func}) => {

  return (
    <div className='guide-cont' >
        <h3 className='guideconth3'>Our Vehicles at Your Service!</h3>
       <div className="guideslide">
        <li className='guides' onClick = {func} >
            <img className='guide-img' src="bicycle.png" alt="" />
            <div className="guidename" style={{display:"none"}}>200</div>
            <div className="exp">Bicycle</div>
            <div className="guide-price">200/-(per day)</div>
        </li>
        <li className='guides'onClick = {func} >
            <img className='guide-img' src="motorcycle.png" alt="" />
            <div className="guidename" style={{display:"none"}}>800</div>
            <div className="exp">Motorcycle</div>
            <div className="guide-price">800/-(per day)</div>
        </li>
        <li className='guides'onClick = {func} >
            <img className='guide-img' src="scooter.png" alt="" />
            <div className="guidename" style={{display:"none"}}>500</div>
            <div className="exp">Scooter</div>
            <div className="guide-price">500/-(per day)</div>
        </li>
        <li className='guides' onClick = {func}>
            <img className='guide-img' src="sedan.png" alt="" />
            <div className="guidename" style={{display:"none"}}>1500</div>
            <div className="exp">Sedan</div>
            <div className="guide-price">1500/-(per day)</div>
        </li>
        <li className='guides' onClick = {func}>
            <img className='guide-img' src="suv.png" alt="" />
            <div className="guidename" style={{display:"none"}}>2200</div>
            <div className="exp">SUV</div>
            <div className="guide-price">2200/-(per day)</div>
        </li>
        <li className='guides'onClick = {func} >
            <img className='guide-img' src="jeep.png" alt="" />
            <div className="guidename" style={{display:"none"}}>2200</div>
            <div className="exp">4 X 4 Jeep</div>
            <div className="guide-price">2200/-(per day)</div>
        </li>
        <li className='guides' onClick = {func}>
            <img className='guide-img' src="minivan.png" alt="" />
            <div className="guidename" style={{display:"none"}}>2700</div>
            <div className="exp">Mini Van</div>
            <div className="guide-price">2700/-(per day)</div>
        </li>
      
        <li className='guides'onClick = {func} >
            <img className='guide-img' src="campervan.png" alt="" />
            <div className="guidename" style={{display:"none"}}>2900</div>
            <div className="exp">Camper Van</div>
            <div className="guide-price">2900/-(per day)</div>
        </li>
        <li className='guides'onClick = {func} >
            <img className='guide-img' src="minibus.png" alt="" />
            <div className="guidename" style={{display:"none"}}>2900</div>
            <div className="exp">Mini Bus</div>
            <div className="guide-price">2900/-(per day)</div>
        </li>
        <li className='guides' onClick = {func}>
            <img className='guide-img' src="bus.png" alt="" />
            <div className="guidename" style={{display:"none"}}>3200</div>
            <div className="exp">Bus</div>
            <div className="guide-price">3200/-(per day)</div>
        </li>
        
       </div>
    </div>
  )
}

export default Vehicles 
