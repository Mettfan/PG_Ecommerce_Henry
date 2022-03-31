const {User} = require ('../../db');

const deleteUser = async (req, res, next) => {
    const {id} = req.query;
    try {
        await User.destroy({
            where: { id: id },
        })
        res.status(200).json({msg:'El usuario fue eliminado con éxito'});
    } catch (err) {
        next(err);
    }
}

module.exports = deleteUser;