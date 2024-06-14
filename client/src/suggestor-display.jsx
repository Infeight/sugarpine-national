import React from 'react'
import { useEffect } from 'react'
import data from '../../server/suggestion.json'
// import { connect, Schema, model } from 'mongoose';
// import locations from '../backend/app.js'
const Suggestordisplay = () => {
  
 

  return(

  data && data.map(data1 =>{
    return(
      <div className='display' key={data1._id}>
        <h3 className='suggestion-head'>{data1.place}</h3>
        <p className='suggestion'>{data1.placedesc}</p>
        <div className='suggestor'>{`-${data1.username}`}</div>
      </div>
    )
  })


    
  )



}

export default Suggestordisplay
