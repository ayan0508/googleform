import {styled,Box,Typography,Input,  NativeSelect} from '@mui/material';
import Radio from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import { useFormData } from '../../Context/Dataprovider';
import '../../App.css';


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
padding:0px 10px 10px 15px;
margin-left: 10px;`

// const StyleTypo=styled(Typography)`
    // font-family: 'Roboto', sans-serif;
    // font-weight: 400;
    // font-size: 12pt;
    // line-height: 1.0;
    // letter-spacing: 0;`
const StyleTypo=styled(Typography)(({theme})=>({
    fontFamily: "'Roboto', sans-serif",
    fontWeight: 400,
    fontSize: '12pt',
    lineHeight: '1.0',
    letterSpacing: 0,
    display: 'flex',
    [theme.breakpoints.down('sm')]:{
        flexDirection: 'row',
    }
}))


const StyleInput=styled(Input)(({theme})=>({
    width: '20vw',
    margin: '10px 0px 15px 0px',
    [theme.breakpoints.down('lg')]:{
        width:'20vw',
    },
    [theme.breakpoints.down('md')]:{
        width:'30vw',
    },
    [theme.breakpoints.down('sm')]:{
        width:'50vw',
    }
}))


    // const SelectStyle=styled(NativeSelect)`
    // width:10vw;
    // height:7vh;
    // margin-bottom: 30px;
    // margin-top: 30px;
    // `

const SelectStyle=styled(NativeSelect)(({theme})=>({
    minWidth:'15vw',
    height:'7vh',
    marginBottom: '30px',
    marginTop: '30px',
    [theme.breakpoints.down('sm')]:{
        minwidth:'15vw',
    }
}))
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
            if(fieldName==='English Scores - Listening'||fieldName==='English Scores - Reading'||fieldName==='English Scores - Speaking'||fieldName==='English Scores - Writing')
            {
                if(fieldValue>0&&fieldValue<10)
                {
                    updateForm(fieldName, fieldValue);
                }
                else
                {
                    alert('This Value must be grater than 0 and less than 10');
                    e.preventDefault();
                }
                    
            }
            else
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
                            <StyleTypo  style={{ margin: '20px 0 0 0'}}>{Ques}<Star>*</Star></StyleTypo > 
                            <SelectStyle
                                variant="standard"
                                value={Form[Ques]}
                                placeholder='Choose'
                                
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







