const mailchimp = require("@mailchimp/mailchimp_marketing");

const newsletter = async (req, res) => {
  const {email} = req.body;
  if (!email || !email.length) {
    return res.status(404).json({msg:"Por favor ingrese un email correcto"});
  }
  try {
    
  } catch (error) {
    console.log(error);
    return res.status(500).json({msg:"Error al enviar el email"});
  }
}

module.exports = newsletter;