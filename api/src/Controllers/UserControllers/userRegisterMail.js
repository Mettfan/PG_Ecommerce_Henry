const {User} = require ('../../db');
const nodemailer= require('nodemailer');





const emailUserRegister= async (req, res) => {
  const {email,name} = req.body;
  const user = await User.findOne({
      where: {
          email:email,
          name:name

      },

  });


  console.log(user);
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



    var mensaje = `
    
    <h1>¡¡Te damos la bienvenida ${name} a Booma!!</h1>
    </br>
    <b>Tu registro fue exitoso, podes iniciar sesion haciendo click en el siguiente enlace:</b>
    <a href="http://localhost:3000/login">Iniciar sesion</a>
        `

  var mailOptions = {
    from: '"Envio de email"<malcolm.kihn33@ethereal.email>',
    to:email,
    subject: 'Registro exitoso',
    //text: mensaje
        html: mensaje
  };

    }
  transporter?.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email enviado: ' + info.response);
    }
  });

}







module.exports= emailUserRegister;