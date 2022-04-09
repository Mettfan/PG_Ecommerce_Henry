const {User} = require ('../../db');
const nodemailer= require('nodemailer');



const postUserEmail= async (req, res) => {
    const {email} = req.body;
    const user = await User.findOne({
        where: {
            email:email
        }
    });
    try{
    if(user){
     var transporter = nodemailer?.createTransport({
        host:"smtp.ethereal.email",
        port:587,
        secure:false,
        auth:{
            user:"malcolm.kihn33@ethereal.email",
            pass:"SB3McwyksjF35GeQ9C"
             }
        });
       await transporter?.sendMail( {
        
        from:'"Envio de email"<malcolm.kihn33@ethereal.email>',
        to:email,
        subject:"Enviado desde Node.js",
        text:"Holaaaaaa"
        });
        transporter?.verify().then(()=>{
            console.log("enviando email")
        })
        
      }}
        catch(err){
            console.log(err)
        }

    
    }


    
    
module.exports = postUserEmail;