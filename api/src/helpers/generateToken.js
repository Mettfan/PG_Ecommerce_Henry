const jwt = require('jsonwebtoken');

const tokenSign = async (user) => {
    try {
        const token = jwt.sign(
            {
                id: user.id, 
                permission: user.permission,
                email: user.email,
            }, 
            process.env.KEY, 
            {
                expiresIn: '1h'
            }
        );
        return token;
        
    } catch (error) {
        console.log(error);
    }
}

const verifyToken = async (token) => {
    try {
        return jwt.verify(token, process.env.KEY);
    } catch (error) {
        console.log(error);
    }
}

const tokenSignOut = async (user) => {
    try {
        return jwt.sign(
            {
                id: user.id, 
                permission: user.permission,
                email: user.email,
            }, 
            process.env.KEY, 
            {
                expiresIn: '1'
            }
        );
    } catch (error) {
        console.log(error);
    }
}

module.exports = {tokenSign, verifyToken, tokenSignOut};