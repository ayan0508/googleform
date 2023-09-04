import { Box,styled} from '@mui/material';
import Typography from '@mui/joy/Typography';

const TextWidth=styled(Box)(({theme})=>({
    width:'42vw',
    [theme.breakpoints.down('lg')]:{
        width:'42vh',
    },
    [theme.breakpoints.down('md')]:{
        
        width:'42vw',
    },
    [theme.breakpoints.down('sm')]:{
        width:'90vw',
    }
}))



const Foot=()=>{
    return (
        <Box style={{display:'flex',justifyContent:'center',marginTop:8,marginBottom:20,paddingButtom:10,}}>
            <TextWidth >
                <Typography  color="neutral" style={{fontSize:'12px'}}>Never submit passwords through Google Forms.</Typography>
                <Typography  color="neutral" style={{fontSize:'12px',display:'flex',justifyContent:'center',marginTop:10}}>This content is neither created nor endorsed by Google. Report Abuse - Terms of Service - Privacy Policy</Typography>
                <Typography  color="neutral" style={{fontSize:'24px',display:'flex',justifyContent:'center',marginTop:10}}>Google Forms</Typography>
            </TextWidth>
        </Box>
    )
}

export default Foot;