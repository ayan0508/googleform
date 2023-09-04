import Button from '@mui/joy/Button';
import { styled } from '@mui/material';
import { useFormData } from '../../Context/Dataprovider'; 
// const =styled()`
// max-height: 20px;
// width:7vw;
// &:hover {
//     background-color:#e0f9f6;
//     cursor:pointer;
//  }
// ` 

const ButtonStyle = styled(Button)(({theme})=>({
    
 maxHeight: 20,
 width:'7vw',
 '&:hover': {
     backgroundColor:'#e0f9f6', 
 },
    [theme.breakpoints.down('lg')]:{
        width:'90vw',
    },
    [theme.breakpoints.down('md')]:{
        width:'42vw',
        maxHeight: '5vh',
        
    },
    [theme.breakpoints.down('sm')]:{
        maxHeight: 20,
        width:115,
    }
}))


const Clear=()=>{
    const {resetForm} = useFormData();
    const handleClear=()=>{
        resetForm();
    }
return(
    <>
    
    <ButtonStyle variant="plain" style={{marginLeft: 'auto' }} onClick={handleClear}>Clear form</ButtonStyle>
    
    </>
) 
};
export default Clear;