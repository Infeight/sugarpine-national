import axios from 'axios'
export default async function tourattr(lng,lat){

   try{
  const{ data:{features} } = await axios.get( 'https://opentripmap-places-v1.p.rapidapi.com/en/places/radius',
    
         {
            params: {
                radius: '5000',
                lon:`${lng}`,
                lat:`${lat}`
              },
              headers: {
                'X-RapidAPI-Key': '83b4ece1fdmsh6e15116b4405962p12376djsn696bbeafa209',
                'X-RapidAPI-Host': 'opentripmap-places-v1.p.rapidapi.com'
              }
          })
          console.log(lng,lat)
          console.log(features)
   
     
    return features;
   //  return null
   }
   catch(error){
  
  return null;
   }
}