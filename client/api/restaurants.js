import axios from 'axios'
export default async function restaurants(lat,lng){

   try{
  const{ data:{data} } = await axios.get( `https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng`,
    
         {
            params: {
                latitude: `${lat}`,
                longitude: `${lng}`,
                limit: '30',
                currency: 'USD',
                distance: '2',
                open_now: 'false',
                lunit: 'km',
                lang: 'en_US'
              },

              headers: {
                'X-RapidAPI-Key': '83b4ece1fdmsh6e15116b4405962p12376djsn696bbeafa209',
                'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
              }
          })
        
      
      console.log(data)
     return await data ;
   //  return null
   }
   catch(error){
  
  return null;
   }
}