const {User,Order} = require ('../../db');
const nodemailer= require('nodemailer');



const emailUserForgot= async (req, res) => {
    const {email} = req.body;
    const user = await User.findOne({
        where: {
            email:email
        }
    });
    //console.log(user);
    if(user){
        var transporter = nodemailer.createTransport({
        host:"smtp.ethereal.email",
        port:587,
        secure:false,
        auth:{
            user:"malcolm.kihn33@ethereal.email",
            pass:"SB3McwyksjF35GeQ9C"
             }
        });
  
  //var mensaje = "Si olvido su contraseña puede restablecerla haciendo click en el siguiente enlace: http://localhost:3000/resetPassword";
  var mensaje = `
  <b>Si olvido su contraseña puede restablecerla haciendo click en el siguiente enlace:</b>
  <a href="http://localhost:3000/resetPassword">Restablecer contraseña</a>
   `
  var mailOptions = {
    from: '"Envio de email"<malcolm.kihn33@ethereal.email>',
    to: email,
    subject: 'Restablecer contraseña',
    //text: mensaje
     html: mensaje
  };
}
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email enviado: ' + info.response);
    }
  });
       
}

const emailUserOrder= async (req, res) => {
    const {email} = req.params;
    if (email) {
        let usuario = await Order.findOne( { where: { id:id} } )
        const {email} = usuario;
        var transporter = nodemailer.createTransport({
        host:"smtp.ethereal.email",
        port:587,
        secure:false,
        auth:{
            user:"malcolm.kihn33@ethereal.email",
            pass:"SB3McwyksjF35GeQ9C"
             }
        });
  
  //var mensaje = "Su pedido fue exitoso";
    var mensaje = `
    <b>Su pedido fue exitoso</b>
    `

  
  var mailOptions = {
    from: '"Envio de email"<malcolm.kihn33@ethereal.email>',
    to: email,
    subject: 'Pedido exitoso',
    //text: mensaje
        html: mensaje
  };
}
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email enviado: ' + info.response);
    }
  });
       
}


const emailUserRegister= async (req, res) => {
  const {email} = req.body;
  const user = await User.findOne({
      where: {
          email:email
      },
      
  });
  
  
  //console.log(user);
  if(user){
      var transporter = nodemailer.createTransport({
      host:"smtp.ethereal.email",
      port:587,
      secure:false,
      auth:{
          user:"malcolm.kihn33@ethereal.email",
          pass:"SB3McwyksjF35GeQ9C"
           }
      });
      
    
 // var mensaje = "Su registro fue exitoso, puede iniciar sesion haciendo click en el siguiente enlace: http://localhost:3000/login";
    var mensaje = `
    <b>Su registro fue exitoso, puede iniciar sesion haciendo click en el siguiente enlace:</b>
    <a href="http://localhost:3000/login">Iniciar sesion</a>
        `
       
  var mailOptions = {
    from: '"Envio de email"<malcolm.kihn33@ethereal.email>',
    to: email,
    subject: 'Registro exitoso',
    //text: mensaje
        html: mensaje
  };

    }
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email enviado: ' + info.response);
    }
  });
       
}





    
    
module.exports= emailUserRegister,emailUserForgot, emailUserOrder;
