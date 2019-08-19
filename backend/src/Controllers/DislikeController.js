const axios = require('axios');
const Client = require('../models/Client');

module.exports = {
    async store(req, res)  {

        const{ user } = req.headers;
        const{ clientId } = req.params;
        
        const loggedClient = await Client.findById(user);
        const targetClient = await Client.findById(clientId);

        if(!targetClient){
            return res.status(400).json({ error: `Client doesn't exist`});
        }

        loggedClient.dislikes.push(targetClient._id);
            
        await loggedClient.save();

        return res.json(loggedClient);
    }
}