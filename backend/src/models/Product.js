const { Schema, model } = require('mongoose');

const ProductSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    value: {
        type: String,
        //required : true
    },
    image: String,
    /*likes: [{
        type: Schema.Types.ObjectId,
        ref: 'Product',
    }],
    dislikes:[{
        type: Schema.Types.ObjectId,
        ref: 'Product',
    }]*/
}, {
        timestamps: true,
    }
);

module.exports = model('Product', ProductSchema);