const {User} = require ('../../db');
const bcrypt = require('bcryptjs');

const putUserPass = async (req, res, next) => {
    const {email, password} = req.body;

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
}

module.exports = putUserPass;