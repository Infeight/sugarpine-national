import axios from 'axios'
export default async function locationinfo(addresssearched,indate,outdate){

   try{
  const{ data : {suggestionLocation}} = await axios.get( 'https://agoda-com.p.rapidapi.com/hotels-homes/overnight-stays/search',
    
         {
          params: {
            location: `${addresssearched}`,
            checkin_date: `${indate}`,
            checkout_date: `${outdate}`
          },
          headers: {
            'X-RapidAPI-Key': '83b4ece1fdmsh6e15116b4405962p12376djsn696bbeafa209',
            'X-RapidAPI-Host': 'agoda-com.p.rapidapi.com'
          }
          })
          console.log(suggestionLocation)
    let data1 = suggestionLocation
    console.log(suggestionLocation);   
    return data1;
   //  return null;
   }
   catch(error){
  
  return null;
   }
}