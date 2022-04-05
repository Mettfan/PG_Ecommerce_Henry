const getInfo = require('../../../src/routes/infoApi.js');


const productByGender =  async (req, res) => {
    const {gender} = req.params
    const allProducts = await getInfo();
    // console.log(gender)
    try {
      if (gender) {
            const productGender = await allProducts.filter((gend) => gend.gender.toLocaleLowerCase() === gender.toLocaleLowerCase());
            // console.log(productGender)
            res.status(200).json(productGender)
        } else {
            res.status(404).send({msg: 'no existe el producto'})
        }    
    }
    catch (error) {
    res.status(400).send("Error en la base de datos");
    }
}
module.exports = productByGender;