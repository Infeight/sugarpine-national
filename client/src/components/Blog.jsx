import React from 'react'
import Navbar from '../navbar'
import { useState, useEffect } from 'react'
import './blog.css'
import Footer from '../footer/footer'
// import data1 from '../../../server/blogs.json'
const Blog = () => {
  const [blogdata,setBlogdata] = useState([]);

  const blogs = async()=>{
    let data = await fetch('http://localhost:5002/blogs')
    let blogs = await data.json()
    console.log(blogs.blogs)
    setBlogdata(blogs.blogs)
  }

  useEffect(()=>{
    blogs();
  })

  return (



    <>
      <Navbar/>
      <img src="Travelblogcover.png" className='travelblogcover' alt=""
      
      
      />
      
   {blogdata&&blogdata.map((data)=>{
    console.log(data)
    return(
      <div className="blogdiv">
        <div className="blogtitle"><h3>{data.Title}</h3></div>
       <div className="blogimage" style={{boxShadow:"0rem 0rem 2rem"}}><img style={{width:"100%",height:"100%"}} src={data.Image? data.Image: "Image Loading"} alt="" /></div>
        <div className="blogmatter" style={{marginTop:"3rem"}}><p>{data.blog}</p></div>
 
      </div>
    )
   })}

 <div className="outro" style={{width:"80%", margin:"auto", fontFamily:"math", fontSize:"3.5rem", wordWrap:"break-word", top:"10rem", position:"relative", marginTop:"10rem"}} >
 Stay tuned to the SugarPine National Blog for more travel insights, tips, and stories. Ready to start your adventure? Download the SugarPine National app today and embark on a journey of a lifetime!
 </div>

 <Footer/>
    </>
  )
}

export default Blog
