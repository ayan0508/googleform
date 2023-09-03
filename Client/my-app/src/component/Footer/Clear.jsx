import Button from '@mui/joy/Button';
import { styled } from '@mui/material';
import { useFormData } from '../../Context/Dataprovider'; 
const ButtonStyle=styled(Button)`
max-height: 20px;
width:7vw;
&:hover {
    background-color:#e0f9f6;
    cursor:pointer;
 }
` 

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