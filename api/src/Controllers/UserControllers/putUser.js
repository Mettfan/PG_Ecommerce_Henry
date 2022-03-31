const {User} = require ('../../db');

const putUser = async (req, res, next) => {
    
    const {name, lastName, gender, born, email, address, province, phone} = req.body;

    try {

        const result = await User.update({name, lastName, gender, born, address, province, phone},
            {where: {
                email: email,
            }},
        );
        res.status(200).json({msg: 'Usuario actualizado'})

    } catch (error) {
        next(error);
    };
};

module.exports = putUser;