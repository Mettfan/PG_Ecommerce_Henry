const {User} = require ('../../db');
const bcrypt = require('bcryptjs');

const postUser = async (req, res, next) => {
    const {name, lastName, gender, born, dni, email, address, province, phone, password,  permission} = req.body;
    let user = await User.findOne({where : {email}});
    let searchDni = await User.findOne({where : {dni}})
    if(!user && !searchDni){
        try {
            user = await User.create({
                name,
                lastName,
                gender,
                born,
                dni,
                email,
                address,
                province,
                phone,
                password: await bcrypt.hash(password, 10),
                permission,
            })
        
            res.status(201).json({msg: 'usuario creado con éxito'});
        
        } catch (error) {
            next(error);
        }
    } else {
        user? res.status(400).json({msg: `Ya hay un usuario registrado con el email: ${email}`}) : res.status(400).json({msg: `Ya hay un usuario registrado con el DNI: ${dni}`});
        
    }
};

module.exports = postUser;