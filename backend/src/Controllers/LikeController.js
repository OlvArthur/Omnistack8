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


        if(!loggedClient.likes.includes(targetClient._id)){
            loggedClient.likes.push(targetClient._id);
            if(targetClient.likes.includes(loggedClient._id)){
                console.log('Deu match');
            };
        }
        else(console.log('Ja deu like'));

        await loggedClient.save();

        return res.json(loggedClient);
    }
}