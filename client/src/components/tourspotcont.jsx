import React from 'react'

const Tourspotcont = ({ title, wikidata, maps, func1 }) => {

 

    return(
       
        <div  onClick={func1} className="tourspot" >
        <li   className='tourspottitle' >{`${title}`}</li>
   <li className='wikidata'><a target='_blank' href={wikidata}>More data !</a></li>  
        <li className="maps"><a target='_blank' href={maps}>Map !</a></li> 
        
      </div>
      )
}

export default Tourspotcont
