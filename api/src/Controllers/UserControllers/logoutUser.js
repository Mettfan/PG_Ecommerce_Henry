const {tokenSignOut} = require('../../helpers/generateToken');


const logoutUser = (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];
    const tokenSession = tokenSignOut(token);
    res.status(200).json({msg: 'usuario deslogueado con éxito', tokenSession});
}

module.exports = logoutUser;
