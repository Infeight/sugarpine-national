import React from 'react'
import { useState } from "react";

const Suggestor = () => {

    
        let [name,setName] = useState({
            name: "",
            place: "",
            description:"",
            id:"",
        });
       
      let valuename;let value;
   const handleChange = (e)=>{
      valuename = e.target.name;
      value = e.target.value;
      document.getElementById('suggest').style.animationName ='none'
  
      setName({...name,[valuename]:value,})
     }
      
    const updatename = async()=>{
     

        let r= fetch('https://sugarpine-national-server.vercel.app/' , {method:'post',headers:{"Content-Type": "application/json"} ,body:JSON.stringify(name)})
       
      // console.log(r)
      document.getElementById('suggest').style.animationName ='clicked'
      document.getElementById("suggestor").value = ""
      document.getElementById("suggested-place").value = ""
      document.getElementById("write-suggestion").value = ""
      
  //  let d = await fetch('http://localhost:5002/', {method:'get',headers:{"Content-Type": "application/json"}})

      
    }
      
  return(
    
    <>
 
     <div className="suggestion-desc" id='suggestion-desc'>
        <input type="text" name='name' value={name.name} id='suggestor' placeholder='Your name' onChange={handleChange}  />
        <input type="text" name='place' value={name.place} id='suggested-place' placeholder='Place' onChange={handleChange} />
        <textarea name="description" value={name.description}  id="write-suggestion" placeholder='Describe your experience visisting that place!!' onChange={handleChange}></textarea>
        <button id='suggest'  onClick={()=>{updatename()}}>Suggest</button>
       </div>
    </>
    
  );}

       
       
       

  


export default Suggestor
