const {User, key} = require ('../../db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const postLogin = async (req, res, next) => {
    const {email, password} = req.body;
    try {
        let user = await User.findOne({where : {email}});
        if(user){
            const match = await bcrypt.compare(password, user.password);
        if(match){
            const token = jwt.sign({id: user.id, email: user.email, permission: user.permission}, key, {expiresIn: '1h'});
            //console.log(token);
            res.status(200).json({msg: 'usuario logueado con éxito', token});
        } else {
            res.status(400).json({msg: 'contraseña incorrecta'});
        }
        } else {
            res.status(400).json({msg: 'email no registrado'});
        }
    } catch (error) {
        next(error);
    }
}


module.exports = postLogin;
