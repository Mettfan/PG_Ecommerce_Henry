const jwt = require('jsonwebtoken');

const tokenSign = async (user) => {
    const token = jwt.sign(
        {
            id: user.id, 
            permission: user.permission
        }, 
        process.env.KEY, 
        {
            expiresIn: '1h'
        }
    );
    return token;
}

const verifyToken = async (token) => {
    try {
        return jwt.verify(token, process.env.KEY);
    } catch (error) {
        console.log(error);
    }
}

module.exports = {tokenSign, verifyToken};