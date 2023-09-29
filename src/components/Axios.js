import axios from "axios";

export const getdata=async()=>{
    const options = {
        method: 'GET',
        url: 'https://free-football-soccer-videos.p.rapidapi.com/',
        headers: {
          'X-RapidAPI-Key': '96a598104emsh1d6e277e408e1aep1f7703jsnd4a1022119bf',
          'X-RapidAPI-Host': 'free-football-soccer-videos.p.rapidapi.com'
        }
      };
      
      try {
          const response = await axios.request(options);
          console.log(response.data[0]);
      } catch (error) {
          console.error(error);
      }
}