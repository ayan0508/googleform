const express=require('express');
const Router=express.Router();
const OpenAIApi = require('openai');
const dotenv = require('dotenv');

dotenv.config();
//const openai = new OpenAIApi({ apiKey: });



const getCoverletter=async(user,email,age)=>{

 
    const apiKey = process.env.OPENAI_API_KEY; 
   
    
    const response = await fetch('https://api.openai.com/v1/engines/text-davinci-002/completions', {

   
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      
      body: JSON.stringify({
        prompt:`he is a very ${user}good in his academics in the age${age} and successfully qualified GRE Exam and apply for canada visa for study ECE with his ${email}`
    ,
        max_tokens: 300, // Adjust as needed
      }),
    });

    if (!response.ok) {
        console.error(`API request failed with status ${response.status}`);
        throw new Error('API request failed');
      }
  
      const data = await response.json();
      
      if (!data.choices || data.choices.length === 0) {
        throw new Error('Invalid API response');
      }
   // console.log(data.choices[0].text);
    return data.choices[0].text;
    
   
    
  }
  module.exports = { getCoverletter };