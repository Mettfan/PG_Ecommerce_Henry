


const getPromoProducts =  async (req, res) => {
    const {discount} = req.params
    const discountProducts = await getProduct();
    
    try {
      if (discount) {
            const productDiscount = await discountProducts.filter((el) => el.discount!== null);
            
            res.status(200).json(productDiscount)
        } else {
            res.status(404).send({msg: 'no existe el producto'})
        }    
    }
    catch (error) {
    res.status(400).send("Error en la base de datos");
    }
}
module.exports = getPromoProducts;