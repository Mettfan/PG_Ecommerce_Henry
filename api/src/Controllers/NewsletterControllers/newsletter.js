const mailchimp = require("@mailchimp/mailchimp_marketing");


function getRequestParams(email){

}


const newsletter = async (req, res) => {
  const {email} = req.body;
  if (!email || !email.length) {
    return res.status(404).json({msg:"Por favor ingrese un email correcto"});
  }
  try {

    const {url, data, headers} = getRequestParams(email);
    const response = await axios.post(url, data, {headers});
    return res.status(200).json({msg:"Te has suscrito a nuestro newsletter"});

    
  } catch (error) {
    console.log(error);
    return res.status(500).json({msg:"Error al enviar el email"});
  }
}

module.exports = newsletter;