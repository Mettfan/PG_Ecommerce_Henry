const { Product } = require('../../db.js')
const deleteProduct = async(req,res)=>{
    // const { id } = req.body
    const {id} = req.params
    console.log('id', id)
    const product = Product.findOne({where: { id: id }})

    if(!product.length){
        
        Product.destroy({
            where: {
                id: id

            }
        }).then( rowDeleted => {
            if(rowDeleted === 1){
                console.log('DELETE SUCCES!!')
                res.status(201).json({msg: 'Product deleted correctly '})
            }
            else{
                console.log('NOTHING HAPPENDED')
                res.status(201).json({msg: 'NOTHING HAPPENED'})
            }
        }, err => {
            res.status(201).json({msg: err })
        })
    }
    else{
        console.log('DELETE SUCCESS!')
        // await Product.destroy({where: { id: id}}).then( res => console.log('deleted'), err => console.log('error'));
        // res.status(201).json({msg: 'Product deleted correctly '})
        
    }
    
            
     
    }

    module.exports = deleteProduct;
