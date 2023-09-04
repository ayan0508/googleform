
import axios from 'axios';
const URL='https://gform-2vmh.onrender.com';
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