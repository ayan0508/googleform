import Clear from './Clear';
import Submit from './Submit';
import { Box,styled} from '@mui/material';
import Typography from '@mui/joy/Typography';
import Foot from './Foot';
const Wrapper=styled(Box)`
width:42vw;
min-height: 5vh;   
display: flex;

`
const BlueStripe=styled(Box)`
background-color: green;
border-radius: 20px;
width: 15vw;
height: 10px;
margin: 15px 10px 0px 70px;
`
const Footer=()=>{

return(
    <>
    <Box style={{display:'flex',justifyContent:'center',marginTop:20}}>
        <Wrapper>
            <Submit/>
            <BlueStripe ></BlueStripe><Typography style={{fontSize:14, marginTop:'10px',marginRight:'10px'}}>Page 1 of 1</Typography>
            <Clear/>
        </Wrapper> 
    </Box>

    <Foot/>
    </>

) 
};
export default Footer;