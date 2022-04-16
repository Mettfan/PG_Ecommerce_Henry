const {User} = require('../../db');

const userInformation = async (req, res, next) => {
    try {
        const {email} = req.body;
        const userFound = await User.findOne({where: {email}, attributes: ['name', 'lastName', 'gender', 'born', 'dni', 'email', 'address', 'province', 'phone']});
        
        if (userFound) {
            res.status(200).json({
                user: userFound,
                msg: 'Usuario encontrado'
            });
        } else {
            res.status(400).json({
                msg: 'No hay usuarios almacenados en la base de datos'
            });
        }
    } catch (error) {
        next(error);
    }
};

module.exports = userInformation;