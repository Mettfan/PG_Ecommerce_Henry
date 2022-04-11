const { User } = require('../../db');
const { encrypt } = require('../../helpers/handlebcripts');
const { tokenSign } = require('../../helpers/generateToken');


const postUser = async (req, res, next) => {
    try {
        const { name, lastName, picture, gender, born, dni, email, address, province, postal, phone, password, permission } = req.body;
        let passwordHash = null;

        if (password) {
            passwordHash = await encrypt(password);
        }

        let user = await User.findOne({ where: { email } });
        //let searchDni = await User.findOne({where : {dni}})
        if (!user/*  && !searchDni */) {
            user = await User.create({
                name,
                lastName,
                picture,
                gender,
                born,
                dni,
                email,
                address,
                province,
                postal,
                phone,
                password: passwordHash,
                permission,
            });

            const token = await tokenSign(user);
            //console.log(token)
            res.status(200).json({ msg: 'usuario creado con éxito', user, token });

        } else {
            user ? res.status(400).json({ msg: `Ya hay un usuario registrado con el email: ${email}` }) : res.status(400).json({ msg: `Ya hay un usuario registrado con el DNI: ${dni}` });

        }
    } catch (error) {
        next(error);
    }
};

module.exports = postUser;