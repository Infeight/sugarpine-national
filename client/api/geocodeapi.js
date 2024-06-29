import axios from 'axios'
export default async function geocodeinfo(address){

   try{
  const{ data : {results}} = await axios.get( 'https://trueway-geocodsdcsdvdfcing.p.rapidapi.com/Geocode',
    
         {
          params: {
            address: `${address}`,
            language: 'en'
          },
          headers: {
            'X-RapidAPI-Key': '83b4ece1fdmsh6e15116b4405962p12376djsn696bbeafa209',
            'X-RapidAPI-Host': 'trueway-geocoding.p.rapidapi.com'
          }
          })
         
   //  let data1 = data.properties
    console.log(results);   
    return results;
   //  return null
   }
   catch(error){
  
  return null;
   }
}