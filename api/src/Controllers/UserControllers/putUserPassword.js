const {User} = require ('../../db');
const bcrypt = require('bcryptjs');

const putUserPass = async (req, res, next) => {
    const {email, password} = req.body;
    const allUsers = await User.findAll();
    if (allUsers.length) {
        
        try {
            const updatePassword = await User.update({password: await bcrypt.hash(password, 10)},
                {where: {
                    email: email,
                }}
            );
            res.status(200).json({msg: 'Contraseña actualizada'})
    
        } catch (error) {
            next(error);
        }
    } else {
        res.status(400).json({msg: 'No hay usuarios almacenados en la base de datos'});
    }
}

module.exports = putUserPass;