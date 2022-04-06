const {verifyToken} = require('../helpers/generateToken');

const checkAuth = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ').pop();
        //console.log(token, 'token')
        const tokenData = await verifyToken(token);
        //console.log(tokenData);
        if(tokenData.id) {
            next()
        } else {
            res.status(401).json({msg: 'no autorizado'})
        }
    } catch (error) {
        res.status(409).json({msg: 'Pues no miciela, token inválido!!!!'})
    }
}


module.exports = checkAuth;