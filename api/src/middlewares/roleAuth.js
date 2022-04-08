const { verifyToken } = require("../helpers/generateToken");
const {User} = require ('../db');


const checkRoleAdmin = (roles) => async (req, res, next)=> {
    try {
        const token = req.headers.authorization.split(' ').pop();
        const tokenData = await verifyToken(token);
        console.log(tokenData,'tokenData')
        const userData = await User.findOne({where: { id: tokenData.id }});
        //console.log(userData, 'userData')
        //console.log(userData.permission, 'userData.permission')
        if([].concat(roles).includes(userData.permission)){
            next();
        } else {
            res.status(401).json({msg: `No miciela, no tienes el permiso de ${roles} `})
        }
        
    } catch (error) {
        console.log(error);
    }
}

module.exports = checkRoleAdmin;