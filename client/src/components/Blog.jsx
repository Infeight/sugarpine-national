import React from 'react'
import Navbar from '../navbar'
import { useState, useEffect } from 'react'
import './blog.css'
import Footer from '../footer/footer'

const Blog = () => {
  const [blogdata,setBlogdata] = useState([]);

  const blogs = async()=>{
    let data = await fetch('https://sugarpine-national-server.vercel.app/blogs')
    let blogs = await data.json()
    // console.log(blogs.blogs)
    setBlogdata(blogs.blogs)
  }

  useEffect(()=>{
    blogs();
  },[])



  return (
    <>
      <Navbar/>
    
      <div className='blogcover'>
      <video className='blogvideo'  autoPlay loop muted>
        <source src="covervid.mp4" type='video/mp4'   />
      </video>
      <div className='blogsuggest'>LIVE WITH NO EXCUSES. <br /> <br /> TRAVEL WITH NO REGRETS.</div>
      </div>
     
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

 <div className="outro" style={{ margin:"auto", wordWrap:"break-word", position:"relative", marginTop:"10rem"}} >
 Stay tuned to the SugarPine National Blog for more travel insights, tips, and stories. Ready to start your adventure? Download the SugarPine National app today and embark on a journey of a lifetime!
 </div>

 <Footer/>
    </>
  )
}

export default Blog
