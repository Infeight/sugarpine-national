import axios from 'axios'
export default async function tourxid(xid){

   try{
  const{ data:{name,otm, wikipedia} } = await axios.get( `https://opentripmap-places-v1.p.rapidapi.com/en/places/xid/${xid}`,
    
         {
            headers: {
                'X-RapidAPI-Key': '83b4ece1fdmsh6e15116b4405962p12376djsn696bbeafa209',
                'X-RapidAPI-Host': 'opentripmap-places-v1.p.rapidapi.com'
              }
          })
        
          let placedats =  [name,otm,wikipedia];
   
     
    return  placedats;
   //  return null
   }
   catch(error){
  
  return null;
   }
}