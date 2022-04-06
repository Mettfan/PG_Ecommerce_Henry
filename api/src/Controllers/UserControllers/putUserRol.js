const {User} = require ('../../db');


const putUserRole = async (req, res, next) => {
    
    try {
        const {email, permission} = req.body;
        const userFound = await User.findOne({where : {email}});
        
        if (userFound) {
                const result = await User.update({permission},
                    {where: {
                        email: email,
                    }},
                );
                res.status(200).json({msg: 'Usuario actualizado'});
        
            } else {
                res.status(400).json({msg: 'No hay usuarios almacenados en la base de datos'});
            }
    } catch (error) {
        next(error);
    };
}

module.exports = putUserRole;
