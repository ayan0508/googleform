import Clear from './Clear';
import Submit from './Submit';
import { Box,styled} from '@mui/material';
import Typography from '@mui/joy/Typography';
import Foot from './Foot';
// const Wrapper=styled(Box)`
// width:42vw;
// min-height: 5vh;
// display: flex;
// `
const Wrapper = styled(Box)(({theme})=>({
    width:'42vw',
    minHeight: '5vh',
    display: 'flex',
    flexDirection: 'row', // Change to row for horizontal alignment
    justifyContent: 'space-between',
    // justifyContent: 'center', 
    alignItems: 'center',
    [theme.breakpoints.down('lg')]:{
        width:'42vw',
    },
    [theme.breakpoints.down('md')]:{
        width:'42vw',
        minHeight: '5vh',
        flexDirection:'column',
        justifyContent:'row',
    },
    [theme.breakpoints.down('sm')]:{
        width:'100vw',
        minHeight: '5vh',
        flexDirection:'column',
        justifyContent:'center',
    }
}))




const BlueStripe=styled(Box)(({theme})=>({
    backgroundColor: 'green',
    borderRadius: 20,
    width:'15vw',
    height: '10px',
    margin: '5px 0px 0px 0px',
    marginLeft:60,
  
    [theme.breakpoints.down('md')]:{
        marginLeft:30,
        marginBottom:25,
        width:'10vw',
    },
    [theme.breakpoints.down('sm')]:{
       
        marginTop:2,
        width:'10vw',
        marginLeft:30,
    }
}))
const StyleTypo=styled(Typography)(({theme})=>({
    fontSize:14, marginTop:'10px',marginRight:'10px',
    [theme.breakpoints.down('lg')]:{

        marginRight:0,
    },
    [theme.breakpoints.down('md')]:{
        marginBottom:20,
        marginLeft:0,
    },
    [theme.breakpoints.down('sm')]:{
        marginLeft:10,
        marginBottom:20,
    }
}))

const SubmitButton = styled(Submit)(({ theme }) => ({
    marginLeft: 'auto', // Pushes the button to the left
  }));
  
  const ClearButton = styled(Clear)(({ theme }) => ({
    marginRight: 'auto', // Pushes the button to the right
  }));

const ButtonWrap=styled(Box)(({theme})=>({
    display:'flex',
    justifyContent: 'space-between',
  width: '100%',
    [theme.breakpoints.down('lg')]:{

        marginRight:0,
    },
    [theme.breakpoints.down('md')]:{
        marginBottom:20,
        marginLeft:0,
    },
    [theme.breakpoints.down('sm')]:{
        marginLeft:10,
        marginBottom:20,
    }
}))

const TextWrap=styled(Box)(({theme})=>({
    display: 'flex', alignItems: 'center',justifyContent:'center',marginBottom:0,
    [theme.breakpoints.down('lg')]:{
        marginRight:0,
    },
    [theme.breakpoints.down('md')]:{
        display: 'flex',
        flexDirection:'column',
        marginBottom:20,
        marginLeft:0,
    },
    [theme.breakpoints.down('sm')]:{
        display: 'flex',
        alignItems:'center',
        marginLeft:10,
        marginBottom:20,
    }
}))


const Footer=()=>{

return(
    <>
    <Box style={{display:'flex',justifyContent:'center',marginTop:20}}>
        <Wrapper>
           
                <ButtonWrap>
                    <SubmitButton  />
                    <TextWrap ><BlueStripe ></BlueStripe><StyleTypo style={{marginLeft:5}}>Page 1 of 1</StyleTypo></TextWrap>
                    <ClearButton  />
                </ButtonWrap>
        </Wrapper>
    </Box>
    <Foot/>
    </>

)
};
export default Footer;