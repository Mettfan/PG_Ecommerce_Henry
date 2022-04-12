// const mailchimp = require("@mailchimp/mailchimp_marketing");
// const md5 = require("md5");
// const listId = process.env.ID_LIST_MAILCHIMP;
const {User} = require('../../db.js');
// const axios = require ('axios');
// const getRequestParams = require('../../helpers/configNewsletter')


// const newsProductFavorite = async (req, res, next) => {
//     const {email} = req.body;
//     if (!email) return res.status(404).json({msg:"Por favor ingrese un email correcto"});
//     try {
//         const user = await User.findOne({where: {email}});
//         if(!user) {
//             res.status(404).json({msg: 'Usuario no encontrado'});
//         } else {
//             const products = await user.getProducts();
//             // console.log(products, '<--')
//             const name = products.map(product => product.name); 
//             // console.log(name, 'name')
//             const {url, data, headers} = getRequestParams(email);
//             await axios.post(url, data, {headers});
            
                
//                 const subscriberHash = md5(email.toLowerCase());
//                 await mailchimp.post(`lists/${listId}/members/${subscriberHash}/tags`, {
//                     tags: [{"name": "mierda", "status": "active"}]
//                 })
                
//             }
//             res.status(200).json({msg: 'Subscripto a noticias de sus productos favoritos'});
//             console.log(response, 'response');
        
//     } catch (error) {
//         next(error);
//     }
    

// }
const Mailchimp = require('mailchimp-api-v3');
var md5 = require('md5');

// load and create api key and list id constants
const API_KEY_MAILCHIMP = process.env.API_KEY_MAILCHIMP;
const ID_LIST_MAILCHIMP = process.env.ID_LIST_MAILCHIMP;

// This bad boy will have the honor of representing mailchimp :)
let mailchimp;

// If api constant is not undefined go head and instatiate mailchimp
if(API_KEY_MAILCHIMP){
  mailchimp = new Mailchimp(API_KEY_MAILCHIMP);
}
// This flag is set to whether mailchimp is empty
const isEmptyMailchimp = typeof mailchimp === Object && mailchimp.keys(mailchimp).length === 0 && mailchimp.constructor === Object;

// ==========> This function is in charge of actually trying to add a subscriber <==============
const newsProductFavorite = (req, res, data) => {
    const {email} = req.body;

    // Make sure mailchimp, email and listid are all set and not undefined
    if (!mailchimp || !email || isEmptyMailchimp || !ID_LIST_MAILCHIMP) {
        const msg = `No puede suscribirse, el parametro ${!email ? 'email': 'API Key or List ID'}`;
        console.warn(msg);
        return Promise.reject({ msg });
    }

    return mailchimp.post(`lists/${ID_LIST_MAILCHIMP}`, {
       
        members: [{
            email_address: email.toLowerCase(),
            status : data.status || 'subscribed',
            merge_fields: {},
        }],

    }).then(m => {
        if (m && Object.keys(m.errors).length > 0) {
            console.log('Error adding new subscriber to MC', m.errors);
            return Promise.reject({ m });
        }
        addTag(email)
        return Promise.resolve({ m });
    }).catch(err => {
        console.warn('Failed adding subscriber', email, err);
        return Promise.reject({ err });
    });
}


const addTag = async (email) => {

    const user = await User.findOne({where: {email: email}});
    if(!user) {
        res.status(404).json({msg: 'Usuario no encontrado'});
    }
    const products = await user.getProducts();
    // console.log(products, '<--')
    const name = products.map(product => product.name); 
    let emailHash = md5(email.toLowerCase());
    return mailchimp.post(`lists/${ID_LIST_MAILCHIMP}/members/${emailHash}/tags`, {
        // TODO make sure to change this part right here
        tags: [{"name": `${name}`, "status": "active"}]
    }).then(m => {
        if (m && m.errors && Object.keys(m.errors).length > 0) {
            console.log('Error adding tag to subscriber ', m.errors);
        }
        return m;
    }).catch(err => {
        console.warn('Failed to tag subscriber', email, err);
    });
}

module.exports = newsProductFavorite;

