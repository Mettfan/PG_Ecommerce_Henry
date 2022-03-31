const {User} = require ('../../db');
const bcrypt = require('bcryptjs');


const getUsers = async (req, res, next) => {
    try {
        const allUsers = await User.findAll();
        res.status(200).json(allUsers);
    } catch (error) {
        next(error);
    }
}

module.exports = getUsers;