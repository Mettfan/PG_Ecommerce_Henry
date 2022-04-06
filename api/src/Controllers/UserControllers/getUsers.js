const {User} = require ('../../db');


const getUsers = async (req, res, next) => {
    const allUsers = await User.findAll();
    if (allUsers.length) {
        try {
            res.status(200).json(allUsers);
        } catch (error) {
            next(error);
        }
    } else {
        res.status(400).json({msg:'No hay usuarios almacenados en la base de datos'});
    }
}

module.exports = getUsers;