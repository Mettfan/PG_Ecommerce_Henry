const {User} = require ('../../db');

const putUser = async (req, res, next) => {
    
    const {name, lastName, gender, born, email, address,dni, province, postal, phone} = req.body;
    const allUsers = await User.findAll();
    
    if (allUsers.length) {
        try {
            const result = await User.update({name, lastName, gender, born, address,dni, province, postal, phone},
                {where: {
                    email: email,
                }},
            );
            res.status(200).json({msg: 'Usuario actualizado'})
    
        } catch (error) {
            next(error);
        };
    } else {
        res.status(400).json({msg: 'No hay usuarios almacenados en la base de datos'});
    }
}
module.exports = putUser;