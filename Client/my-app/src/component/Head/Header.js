import {styled,Box,Typography,Link} from '@mui/material';
import Divider from '@mui/joy/Divider';
import { useAuth0 } from "@auth0/auth0-react";
import Button from '@mui/joy/Button';



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





const TextStyle=styled(Box)`
padding:0px 10px 10px 15px;`

const TypographyStyle=styled(Typography)(({theme})=>({
    [theme.breakpoints.down('sm')]:{
        maxWidth:'70vw',
        padding:0,
        margin:0,
    }
}))
const LinkStyle=styled(Link)(({theme})=>({
    [theme.breakpoints.down('sm')]:{
        maxWidth:'80vw',
        paddingLeft:10,
        marginLeft:0,
    }
}))
const AccStyle=styled(Box)`
    padding:10px 0px 7px 15px;`

const ButtonStyle=styled(Button)`
    max-height: 5px;
    &:hover {
        background-color:#fff;
        cursor:pointer;
     }
`


const HeadingStyle= styled(Typography)(({theme})=>({
    fontSize:35,
    [theme.breakpoints.down('sm')]:{
        fontSize:20,
    }
}))

const Question=()=>{
    const Url='https://effizient-immigration-inc.square.site/s/shop';
    const { loginWithRedirect,isAuthenticated,user } = useAuth0();
    return (
        <Box style={{display:'flex',justifyContent:'center',marginTop:20}}>
            <BoxStyle>
            <BlueStripe></BlueStripe>
                <TextStyle>
                    <HeadingStyle  style={{fontFamily: 'docs-Roboto' ,margin: '5px 0 15px 0px'}}>Customized SOP Generator</HeadingStyle > 
                    <Typography level="h4" fontSize="15px">Fill this questionnaire for the student. After submitting, you will receive an email at the email address that you have provided with a 
                    Statement of Purpose customized for you. You can use and modify that as per your needs.</Typography>
                    <Typography style={{ margin: '20px 0' }} fontSize="15px">If you would like to get it edited, reviewed, or drafted by our experts, you can get in touch with us:<LinkStyle href={Url} underline="always">{"https://effizient-immigration-inc.square.site/s/shop"}</LinkStyle>
                   </Typography>
                </TextStyle>
                <Divider />
                <AccStyle>
                    {
                        isAuthenticated ?<TypographyStyle style={{fontWeight:600}} color="neutral" >{user.email}</TypographyStyle>:<ButtonStyle variant="plain" onClick={() => loginWithRedirect()}>Sign in With Google</ButtonStyle>
                    }
                </AccStyle>
                <Divider />
                <AccStyle><Typography  fontSize="15px" style={{color:'red'}}>* Indicates required question</Typography></AccStyle>
            </BoxStyle>
        </Box>
    )
}
export default Question;