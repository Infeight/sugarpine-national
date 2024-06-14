import React from 'react'

import Destinations from './destinations';

const Guides = () => {
    let guidename,guideprice;
    const handleguide =(e)=>{
 guidename =   e.target.closest(".guides").querySelector(".guidename").innerText;
 guideprice = e.target.closest(".guides").querySelector(".guide-price").innerText;
 
    }



  return (
    <div className='guide-cont'>
        <h3>Our Expert Guides at Your Service!</h3>
       <div className="guideslide">
        <li className='guides' onClick={handleguide}>
            <img className='guide-img' src="guideimg.jpg" alt="" />
            <div className="guidename">Tarun</div>
            <div className="exp">Experience lvl: Pro</div>
            <div className="guide-price">3000/-</div>
        </li>
        <li className='guides' onClick={handleguide}>
            <img className='guide-img' src="guideimg.jpg" alt="" />
            <div className="guidename">Amir</div>
            <div className="exp">Experience lvl: Pro</div>
            <div className="guide-price">3000/-</div>
        </li>
        <li className='guides' onClick={handleguide}>
            <img className='guide-img' src="guideimg.jpg" alt="" />
            <div className="guidename">Hassan</div>
            <div className="exp">Experience lvl: plus</div>
            <div className="guide-price">2500/-</div>
        </li>
        <li className='guides' onClick={handleguide}>
            <img className='guide-img' src="guideimg.jpg" alt="" />
            <div className="guidename">Ishaan</div>
            <div className="exp">Experience lvl: Expert</div>
            <div className="guide-price">4500/-</div>
        </li>
        <li className='guides' onClick={handleguide}>
            <img className='guide-img' src="guideimg.jpg" alt="" />
            <div className="guidename">Eesha</div>
            <div className="exp">Experience lvl: Pro</div>
            <div className="guide-price">3000/-</div>
        </li>
        <li className='guides' onClick={handleguide}>
            <img className='guide-img' src="guideimg.jpg" alt="" />
            <div className="guidename">Meera</div>
            <div className="exp">Experience lvl: Expert</div>
            <div className="guide-price">4500/-</div>
        </li>
        <li className='guides' onClick={handleguide}>
            <img className='guide-img' src="guideimg.jpg" alt="" />
            <div className="guidename">Mithun</div>
            <div className="exp">Experience lvl: Pro</div>
            <div className="guide-price">3000/-</div>
        </li>
        <li className='guides' onClick={handleguide}>
            <img className='guide-img' src="guideimg.jpg" alt="" />
            <div className="guidename">Zahir</div>
            <div className="exp">Experience lvl:Expert</div>
            <div className="guide-price">4500/-</div>
        </li>
        <li className='guides' onClick={handleguide}>
            <img className='guide-img' src="guideimg.jpg" alt="" />
            <div className="guidename">Reena</div>
            <div className="exp">Experience lvl: Expert</div>
            <div className="guide-price">4500/-</div>
        </li>
        <li className='guides' onClick={handleguide}>
            <img className='guide-img' src="guideimg.jpg" alt="" />
            <div className="guidename">Zoey</div>
            <div className="exp">Experience lvl: 4500/-</div>
            <div className="guide-price">Expert</div>
        </li>
       </div>
    </div>
  )
}

export default Guides 
