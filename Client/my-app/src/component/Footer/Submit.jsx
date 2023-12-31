import Button from '@mui/joy/Button';
import { styled } from '@mui/material';
import { useFormData } from '../../Context/Dataprovider'; 
import { useNavigate } from 'react-router-dom';
import {Questions} from '../../constant/constant'
import { ACart } from '../API/Api';
// const ButtonStyle=styled(Button)`
// color:white;
// max-height: 39px;
// width:100px;
// magin-right:50px;
// &:hover {
    
//     cursor:pointer;
//  }
// `



const ButtonStyle = styled(Button)(({theme})=>({
    color:'white',
    maxHeight: '39px',
    width:'100px',
    maginRight:'50px',
   
       [theme.breakpoints.down('lg')]:{
           width:'90vw',
       },
       [theme.breakpoints.down('md')]:{
           width:'42vw',
           maxHeight: '5vh',
           flexDirection:'column',
           justifyContent:'center',
       },
       [theme.breakpoints.down('sm')]:{
           maxHeight: 20,
           width:115,
       }
   }))


const Submit=()=>{
    const { Form , resetForm} = useFormData();
    const navigate=useNavigate();
    const sendData= async()=>{
       // console.log(Form);
        const objlegth=Object.keys(Form).length;
        const ques_lenght= Questions.length;
       if(objlegth===ques_lenght)
       {
            navigate('/submit');
            const res=await ACart(Form);
            resetForm();
            if(res.status===200)
            {
                alert('You will Get a email soon!');
            }
        }
        else
        {
            alert('Fill all the value');
        }
    }
return(
    <>
    <ButtonStyle type="submit" onClick={sendData}>Submit</ButtonStyle>
    
    </>
) 
};
export default Submit;