const {Schema, model} = require ("mongoose");

const jewelerSchema = Schema ({
   productName: {
        type: String,
    },

    productID: {
        type: String,
    },

    productPrice: {
        type: Number
    },

    productSize: {
        type: {
            type1: {type: String},
            type2: {type:String},
            type3: {type:String},
            type4: {type: String},
            type5: {type: String}
        }
    },

    image: {
        type: String
    },

    description: {
        type: String
    }
})

jewelerSchema.methods.toJSON = function () {
    const {__v, _id, ...rest} = this.toObject();
    rest.id = _id;
    return rest;
};

module.exports = model ("jeweler", jewelerSchema, "jewelers");  