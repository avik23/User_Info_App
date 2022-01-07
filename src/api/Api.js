import axios from "axios"


export const GETRequest = async (apiPath)=>{

     return  await axios.get(`https://${apiPath}`);
      
}