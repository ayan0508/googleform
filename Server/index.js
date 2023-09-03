const express=require('express');
const { getCoverletter } = require('./Controller/Openai.js');
const cors=require('cors');
const bodyParser=require('body-parser');
const transporter = require('./Controller/mailer.js');

const app=express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());



app.post('/chat',async (req, res) => {
    try {

        const {'Full Name':user}=req.body.params;
        const email=req.body.params.Email;
        const age=req.body.params.Age;
     const visaApplication = await getCoverletter(user, email, age);
    res.json({ visaApplication }); 
    //  console.log(req.body.params.Email);
    const visaApplicationHTML = `
    <p><strong>Customise Generated Text With openai:</strong> ${visaApplication}</p>
    <br/>
  `;
      const paramsAsText = JSON.stringify(req.body.params);
      const obj= req.body.params;
    const emailContentHTML =  Object.entries(obj).map((entry => `
        <p><strong>Question ${entry[0]}:</strong> ${entry[1]}</p>
        <br/>
      `)).join('');

      const combineHTML=`${emailContentHTML}${visaApplicationHTML}`;
      const mailOptions = {
        from: '"Ayan" <ayanbanerjee89@gmail.com>', 
        to: req.body.params.Email, 
        subject: 'Visa Application',
        headers: {
            'content-type': 'text/html',
          },
        html: combineHTML,
      };
  
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error(error);
          res.status(500).json({ error: 'An error occurred while sending the email.' });
        } else {
          console.log('Email sent: ' + info.response);
          res.json({ paramsAsText});
        }
      });
   
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while generating the visa application.' });
    }
  });


const port=8000;
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});


