const {User} = require ('../../db');

const deleteUser = async (req, res, next) => {
    const {id} = req.query;
    const allUsers = await User.findAll();
    
    if (allUsers.length) {
        try {
            await User.destroy({
                where: { id: id },
            })
            res.status(200).json({msg:'El usuario fue eliminado con éxito'});
        } catch (err) {
            next(err);
        }
    } else {
        res.status(400).json({msg:'No hay usuarios almacenados en la base de datos'});
    }
}

module.exports = deleteUser;