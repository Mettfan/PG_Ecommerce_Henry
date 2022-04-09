const {Product, User} = require('../../db.js');

const addProductToFavorites = async (req, res, next) => {
        const {id, email} = req.body // Recibo los parámetros de id e email por body
        console.log(id, email)
        await Product.findOne({where: {id: id}}).then (async product => { //Espero encontrar un producto en el cual el id coincida con el que le paso por body
            console.log(product, "linea 7")
            User.findOne( {where: {email: email}}).then (async user => { //Encuentro un usuario por su email
                console.log(user, "linea 9")
                await user.addFavorite(product) //Agrego el producto el producto a usuario a través de la tabla intermedia
                await user.getFavorites().then(favorites => { //Obtengo todos los favoritos del usuario y los envio
                     return res.send({msg: favorites});
                })
            })
        }).catch (error => {
            console.log(error);
             return res.send ({msg: error}) //Muestro el error si existiese, igual lo dudo
        })

}

module.exports = addProductToFavorites;