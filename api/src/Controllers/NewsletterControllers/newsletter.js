const mailchimp = require("@mailchimp/mailchimp_marketing");
const axios = require ('axios');

const apiKey = process.env.API_KEY_MAILCHIMP;
const prefix = process.env.SERVER_PREFIX_MAILCHIMP;
const list = process.env.ID_LIST_MAILCHIMP;

function getRequestParams(email){
  const url = `https://${prefix}.api.mailchimp.com/3.0/lists/${list}/members`;
  const data = {
    email_address: email,
    status: 'subscribed',
  };
  //! la apyKey necesita se codificada en base64
  const base64ApiKey = Buffer.from(`anystring:${apiKey}`).toString('base64');
  console.log(base64ApiKey,'linea 16');
  const headers = {
    "content-type": "application/json",
    "authorization": `Basic ${base64ApiKey}`,
  };
  return { headers, url, data };

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

