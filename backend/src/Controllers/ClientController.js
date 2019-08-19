// Boa pratica de criação de metodos em controllers diz que apenas os metodos INDEX, SHOW, STORE, UPDATE e DELETE 
// devem ser criados
// Outros metodos tornam-se proprios controllers


const axios = require('axios');
const Client = require('../models/Client');

module.exports = {
    async index(req, res) {
        const { user } = req.headers;

        const loggedClient = Client.findById(user);

        const users = await Client.find({
            $and: [
                { _id: { $ne: user } },
                { _id: { $nin: loggedClient.likes } },
                { _id: { $nin: loggedClient.dislikes } }

            ],
        })

        return res.json(users);
    },

    async store(req, res) {
        const { username } = req.body;

        const userExists = await Client.findOne({ user: username });

        if (userExists) {
            return res.json(userExists);
        }

        const response = await axios.get(`https://api.github.com/users/${username}`)

        const { name, bio, email, avatar_url } = response.data;

        const client = await Client.create({
            name,
            bio,
            user: username,
            email,
            avatar: avatar_url
        })

        return res.json(client);
    }
};