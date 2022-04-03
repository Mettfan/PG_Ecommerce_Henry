const {Op}= require("sequelize");

const {Product, Category} = require('../../db');

const getInfo=require('../../../src/routes/infoApi.js');
const { Product } = require('../../db.js')

const getProduct= async(req,res, next)=>{
    const {name}=req.query;
     const apiInfo= await  getInfo();
     try{
         let hay= await Product.findAll({ include: {model: Category},})
         if(!hay.length) await Product.bulkCreate(apiInfo);
     }catch(error){
         console.log(error);
     }
     if(name){
        try{
            const product= await Product.findAll({
                where:{
                    name:{
                        [Op.like]:`%${name}%`
                    }
                }, include: {model: Category},
            })
           return res.send(product);
        }
        catch(error){
            console.log(error);
        }
     }else{
        try{
            const product= await Product.findAll({ include: {model: Category},});
            return res.send(product);
        }
        catch(error){
            console.log(error);
        }
     }
     
     


}



const getProduct = async(req,res)=>{
    const apiInfo= await getInfo();
    let allProducts = await Product.findAll()

    res.json(allProducts.reverse().concat(apiInfo));
    }

    module.exports=getProduct;