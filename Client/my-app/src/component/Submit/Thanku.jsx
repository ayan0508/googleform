import {styled,Box,Typography} from '@mui/material';
import Foot from '../Footer/Foot';
import Button from '@mui/joy/Button';
import { useNavigate } from 'react-router-dom';
const BoxStyle=styled(Box)`
background-color:#fff; 
width:42vw;
min-height: 10vh;
border: 1px solid #dadce0;
border-radius: 10px;
border-top-left-radius: 10px;
border-top-right-radius: 10px;
margin-bottom: -8px;
`
const TextStyle=styled(Box)`
padding:0px 10px 10px 15px;`

const BlueStripe=styled(Box)`
background-color: rgb(5, 160, 250);;
border-top-left-radius: 20px;
border-top-right-radius: 20px;
width:42vw;
height: 10px;`


const ButtonStyle=styled(Button)`
    max-height: 5px;
    margin-bottom:30px;
    &:hover {
      
        background-color: #fff; 
      
      }
`

const Thanku=()=>{ 
    const navigate=useNavigate();
    const newReq=()=>{
        navigate('/');
    }
    return (
        <>
            <Box style={{display:'flex',justifyContent:'center',marginTop:20,marginBottom:20}}>
                <BoxStyle>
                <BlueStripe></BlueStripe>
                    <TextStyle>
                        <Typography fontSize="35px" style={{fontFamily: 'docs-Roboto' ,margin: '5px 0 15px 0px'}}>Customized SOP Generator</Typography > 
                        <Typography level="h4" fontSize="15px">Thanks for using our customized SOP Generator. You will receive a customized SOP on the email you provided in this form. Feel free to use and edit it as you see fit. 
                        Good luck with your application!</Typography>
                    </TextStyle>
                    <ButtonStyle variant="plain" onClick={newReq}>Submit another response</ButtonStyle>
                </BoxStyle>
            </Box>
            <Foot/>
        </>
    )
}
export default Thanku;