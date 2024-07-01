import React from 'react'
import { useEffect,useState } from 'react'
import { FaEyeSlash } from 'react-icons/fa6'
// import data from '../../server/suggestion.json'
// import { connect, Schema, model } from 'mongoose';
// import locations from '../backend/app.js'
const Suggestordisplay = () => {
const[suggestions,setSuggestions]= useState([]);

const getsuggestions = async()=>{
  let  data = await fetch('https://sugarpine-national-server.vercel.app/suggestions')
  let suggestions = await data.json();
   // console.log(suggestions)
   setSuggestions(suggestions.suggestions)
}
  useEffect(()=>{
  getsuggestions();
    
      // let suggestion = suggestions.
  })


  return(

  suggestions&& suggestions.map(data1 =>{
    return(
      <div className='display' key={data1._id}>
        <h3 className='suggestion-head'>{data1.place}</h3>
        <p className='suggestion'>{data1.placedesc}</p>
        <div className='suggestor'>{`-${data1.username.slice(0,16)}`}</div>
      </div>
    )
  })


    
  )



}

export default Suggestordisplay
