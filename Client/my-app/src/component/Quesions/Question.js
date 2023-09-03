import React from 'react';
import {Questions} from '../../constant/constant';
import Footer from '../Footer/Footer';
import { Box } from '@mui/material';
import Frame from './Frame';
import Header from '../Head/Header';
const Question =()=>{

    return(
        <>
        <Header/>
       <Box style={{display:'flex',flexDirection:'column'}}> 
           {
            Questions.map((Question)=>{
                return (<Frame data={Question} />)
            })
           }
           
           <Footer/>
       </Box></>
    )
};
export default Question;