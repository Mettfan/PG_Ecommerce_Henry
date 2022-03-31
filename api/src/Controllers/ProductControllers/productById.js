const getInfo=require('../../../src/routes/infoApi.js');

const productById=async(req,res)=>{
    const {id} = req.params
    const apiInfo= await getInfo();
    try {
        if (id) {
          let productId = await apiInfo.filter((el) => el.id === parseInt(id)
          );
       
          productId.length? res.status(200).send(productId)
            : res.status(400).send("Not found");
        }
      } catch (err) {
        res.json({ message: err });
      }
    }
    module.exports=productById;

  
