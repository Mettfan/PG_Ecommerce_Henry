const {Order,User} = require ('../../db');
const nodemailer= require('nodemailer');



const emailUserOrder= async (req, res) => {
  const {email,id} = req.body;
  const user = await User.findOne({
      where: {
          email:email,
          id:id
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


  //var mensaje = "Su pedido fue exitoso";
    var mensaje = `
    <b><h2>¡Su pedido fue exitoso!</h2></b>
    </br>
    <b><h3>Su numero de orden es:${id}</h3></b>
    `


  var mailOptions = {
    from: '"Envio de email"<malcolm.kihn33@ethereal.email>',
    to: email,
    subject: 'Pedido exitoso',
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







module.exports= emailUserOrder;