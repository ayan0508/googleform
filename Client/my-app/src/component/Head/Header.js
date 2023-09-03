import {styled,Box,Typography} from '@mui/material';
import Divider from '@mui/joy/Divider';
import { useAuth0 } from "@auth0/auth0-react";
import Button from '@mui/joy/Button';
const BoxStyle=styled(Box)`
background-color:#fff; 
width:42vw;
min-height: 10vh;
border: 1px solid #dadce0;
border-radius: 8px;
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
const AccStyle=styled(Box)`
    padding:10px 0px 7px 15px;`

const ButtonStyle=styled(Button)`
    max-height: 5px;
    &:hover {
        background-color:#fff;
        cursor:pointer;
     }
`

const Question=()=>{
    const Url='https://effizient-immigration-inc.square.site/s/shop';
    const { loginWithRedirect,isAuthenticated,user } = useAuth0();
    return (
        <Box style={{display:'flex',justifyContent:'center',marginTop:20}}>
            <BoxStyle>
            <BlueStripe></BlueStripe>
                <TextStyle>
                    <Typography fontSize="35px" style={{fontFamily: 'docs-Roboto' ,margin: '5px 0 15px 0px'}}>Customized SOP Generator</Typography > 
                    <Typography level="h4" fontSize="15px">Fill this questionnaire for the student. After submitting, you will receive an email at the email address that you have provided with a 
                    Statement of Purpose customized for you. You can use and modify that as per your needs.</Typography>
                    <Typography style={{ margin: '20px 0' }} fontSize="15px">If you would like to get it edited, reviewed, or drafted by our experts, you can get in touch with us:<a href={Url} style={{margin:'0 0 0 5px'}}target="_blank" rel="noopener noreferrer">
                    https://effizient-immigration-inc.square.site/s/shop</a> </Typography>
                </TextStyle>
                <Divider />
                <AccStyle>
                    {
                        isAuthenticated ?<Typography style={{fontWeight:600}} color="neutral" >{user.email}</Typography>:<ButtonStyle variant="plain" onClick={() => loginWithRedirect()}>Sign in With Google</ButtonStyle>
                    }
                </AccStyle>
                <Divider />
                <AccStyle><Typography  fontSize="15px" style={{color:'red'}}>* Indicates required question</Typography></AccStyle>
            </BoxStyle>
        </Box>
    )
}
export default Question;