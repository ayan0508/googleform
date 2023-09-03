import {styled,Box,Typography,Input,  NativeSelect} from '@mui/material';
import Radio from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import { useFormData } from '../../Context/Dataprovider';
import '../../App.css';


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
padding:0px 10px 10px 15px;
margin-left: 10px;`

const StyleTypo=styled(Typography)`
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 12pt;
    line-height: 1.0;
    letter-spacing: 0;`
const StyleInput = styled(Input)`
    width: 20vw;  /* Adjust the height as needed */
      margin: 10px 0px 20px 0px;  
    `;
    const SelectStyle=styled(NativeSelect)`
    width:10vw;
    height:7vh;
    margin-bottom: 30px;
    margin-top: 30px;
    `
const Star=styled(Typography)`
color:red;
padding-left: 2px;
margin-top:-5px;`

const Question=({data})=>{
    const { Form, updateForm } = useFormData();
   
    const handleData=(e)=>{
        const fieldName = e.target.name;
        const fieldValue = e.target.value;
        if (fieldValue === null&&fieldValue.trim() === "") {
            alert('Field is required');
            e.preventDefault();
          }
        else{
            updateForm(fieldName, fieldValue);
        } 
    };

    const {id,Ques,des}=data;
    
    return (
        <Box style={{display:'flex',justifyContent:'center',marginTop:20}} id={id} >
            <BoxStyle style={{paddingBottom:20}}>
                    {
                        (id===4)?
                        <TextStyle  key={id}>
                            <StyleTypo  style={{ margin: '20px 0 14px 0px',display:'flex'}}>{Ques}<Star>*</Star></StyleTypo > 

                            <SelectStyle
                                variant="standard"
                                value={Form[Ques]}
                                placeholder='Choose'
                                sx={{ minWidth: 200 }}
                                onChange={handleData} name={Ques}> 
                                 <option value=""></option>            
                                    <option value="Grade12">Grade 12</option>
                                    <option value="Diploma" >Diploma</option>
                                    <option value="Bachelors">Bachelors</option>
                                    <option value="Masters">Masters</option>
                                    <option value="Phd" >Phd</option>
                            </SelectStyle>
                        </TextStyle>
                       :
                        (id === 17 || id===19)?
                        <TextStyle  key={id}> 
                            <StyleTypo   style={{ margin: '20px 0 30px 0px',display:'flex'}} >{Ques}<Star>*</Star></StyleTypo >
                            <RadioGroup defaultValue="outlined" name="radio-buttons-group" style={{marginBottom:10}}  >
                                <Radio value="Yes" label="Yes" variant="outlined" onChange={(e)=>{handleData(e)}} name={Ques} />
                                <Radio value="No"  variant="outlined" label="No" onChange={(e)=>{handleData(e)}} name={Ques}  />
                            </RadioGroup>
                        </TextStyle>
                      :
                       <TextStyle  key={id}>
                            <StyleTypo  style={{ margin: '20px 0 14px 0px' ,display:'flex'}} >{Ques}<Star>*</Star></StyleTypo>
                            {
                                (des!=='')?<Box>
                                    <StyleTypo style={{fontSize:14}} >Write None if no work experience. Provide the following details if yes:</StyleTypo>
                                        <List aria-labelledby="decorated-list-demo">
                                            <ListItem style={{fontSize:14}}>1.Job Title </ListItem>
                                            <ListItem style={{fontSize:14}}>2.Company Name </ListItem>
                                            <ListItem style={{fontSize:14}}>3.Job duties</ListItem>
                                        </List>
                                    <StyleTypo style={{fontSize:14,lineHeight: '1.5',marginBottom:10}} >Sample Answer: I worked as a Sales Manager at Effizient Immigration Inc from Jan 2022 till Feb 2023. In this role, I managed sales operations, reaching out to leads, lead the outreach program, ensured meeting monthly targets.</StyleTypo>
                                </Box>:<Box></Box>
                            }
                            <StyleInput placeholder="Your answer" size="xs"  variant="standard" onChange={(e)=>{handleData(e)}} name={Ques} key={id} value={Form[Ques] ||''}
                            />
                        </TextStyle>
                       
                    }
                
                </BoxStyle>
        </Box>
    )
}
export default Question;







