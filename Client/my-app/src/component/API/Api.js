
import axios from 'axios';
const URL='http://localhost:8000';
export const ACart=async(data)=>{
    try{
       // console.log(data);
        return await axios.post(`${URL}/chat`,{
            params:data,
        });
    }
    catch(err){
        console.error(err);
    }
}