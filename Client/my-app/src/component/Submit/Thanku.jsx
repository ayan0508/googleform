import {styled,Box,Typography} from '@mui/material';
import Foot from '../Footer/Foot';
import Button from '@mui/joy/Button';
import { useNavigate } from 'react-router-dom';

const BoxStyle=styled(Box)(({theme})=>({
    backgroundColor:'#fff', 
    width:'42vw',
    minHeight:'10vh',
    border: '1px solid #dadce0',
    borderRadius: 8,
    borderTop: 10,
    marginBottom:-8,
[theme.breakpoints.down('lg')]:{
    width:'42vw',
},
[theme.breakpoints.down('md')]:{
    width:'42vw',
},
[theme.breakpoints.down('sm')]:{
    width:'100vw',
}
}))


const TextStyle=styled(Box)`
padding:0px 10px 10px 15px;`

const BlueStripe=styled(Box)(({theme})=>({
    backgroundColor: 'rgb(5, 160, 250)',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    width:'42vw',
    height: '10px',
    [theme.breakpoints.down('lg')]:{
        width:'42vw',
    },
    [theme.breakpoints.down('md')]:{
        width:'42vw',
    },
    [theme.breakpoints.down('sm')]:{
        width:'100vw',
    }
}))

const ButtonStyle=styled(Button)`
    max-height: 5px;
    margin-bottom:30px;
    &:hover {
      
        background-color: #fff; 
      
      }
`
const HeadingStyle= styled(Typography)(({theme})=>({
    fontSize:35,
    [theme.breakpoints.down('sm')]:{
        fontSize:20,
    }
}))

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
                        <HeadingStyle fontSize="35px" style={{fontFamily: 'docs-Roboto' ,margin: '5px 0 15px 0px'}}>Customized SOP Generator</HeadingStyle > 
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