const {tokenSignOut} = require('../../helpers/generateToken');
const {User} = require('../../db');
const jwt = require('jsonwebtoken')


const logoutUser = async (req, res, next) => {
    try {
        
        const token = req.headers.authorization.split(' ').pop();
        console.log(token)
        const deco  = jwt.decode(token);
        console.log(deco.email,'email')
        const user = await User.findOne({where : {email: deco.email}});
        const tokenLogout = await tokenSignOut(user);
        console.log(tokenLogout,'logout');
        res.status(200).json({msg: 'usuario deslogueado con éxito', user, tokenLogout});
    } catch (error) {
        next(error);
    }
}

module.exports = logoutUser;

