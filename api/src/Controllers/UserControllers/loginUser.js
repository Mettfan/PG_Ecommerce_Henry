const {User} = require ('../../db');
const { compare } = require('../../helpers/handlebcripts');
const { tokenSign } = require('../../helpers/generateToken');
//const jwt = require('jsonwebtoken');


const postLogin = async (req, res, next) => {
    try {
    const {email, password} = req.body;
        let user = await User.findOne({where : {email}});
        if(user){
            const match = await compare(password, user.password)
            const tokenSession = await tokenSign(user);
            if(match){
                //console.log(token);
                res.status(200).json({msg: 'usuario logueado con éxito',user: user, id: user.id, name: user.name, permission:user.permission, tokenSession});
                //console.log(jwt.verify(tokenSession, process.env.KEY))
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
