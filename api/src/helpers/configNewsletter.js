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
  //console.log(base64ApiKey,'linea 16');
  const headers = {
    "content-type": "application/json",
    "authorization": `Basic ${base64ApiKey}`,
  };
  return { headers, url, data };

}

module.exports = getRequestParams;