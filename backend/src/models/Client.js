const { Schema, model } = require('mongoose');

const ClientSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    user: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        //required: true,
    },
    avatar: String,
    bio: String,
    likes: [{
        type: Schema.Types.ObjectId,
        ref: 'Client',
    }],
    dislikes: [{
        type: Schema.Types.ObjectId,
        ref: 'Client',
    }]
}, {
        timestamps: true,
    }
);

module.exports = model('Client', ClientSchema);