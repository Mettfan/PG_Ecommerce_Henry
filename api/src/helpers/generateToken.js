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

const tokenSignOut = async (token) => {
    try {
        return jwt.sign(
            {
                id: token.id, 
                permission: token.permission
            }, 
            process.env.KEY, 
            {
                expiresIn: 1
            }
        );
    } catch (error) {
        console.log(error);
    }
}

module.exports = {tokenSign, verifyToken, tokenSignOut};