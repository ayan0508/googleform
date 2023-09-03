import { Box} from '@mui/material';
import Typography from '@mui/joy/Typography';

const Foot=()=>{
    return (
        <Box style={{display:'flex',justifyContent:'center',marginTop:8,marginBottom:20,paddingButtom:10}}>
            <Box style={{width:'42vw'}}>
                <Typography  color="neutral" style={{fontSize:'12px'}}>Never submit passwords through Google Forms.</Typography>
                <Typography  color="neutral" style={{fontSize:'12px',display:'flex',justifyContent:'center',marginTop:10}}>This content is neither created nor endorsed by Google. Report Abuse - Terms of Service - Privacy Policy</Typography>
                <Typography  color="neutral" style={{fontSize:'24px',display:'flex',justifyContent:'center',marginTop:10}}>Google Forms</Typography>
            </Box>
        </Box>
    )
}

export default Foot;