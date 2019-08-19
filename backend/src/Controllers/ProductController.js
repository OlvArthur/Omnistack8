const axios = require('axios');
const Product = require('../models/Product');

module.exports = {
    async store(req,res){
        const { repositorie } = req.body;

        const productExists = await Product.findOne({name: repositorie });

        if(productExists){
            return res.json(productExists);
        }

        const response = await axios.get(`https://api.github.com/repos/OlvArthur/${repositorie}`)

        const { name } = response.data;

        const product = await Product.create({
            name
        })

        return res.json(product);

        
       
    }
};