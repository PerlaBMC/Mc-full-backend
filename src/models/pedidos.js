const {Schema, model} = require ("mongoose");

const pedidosSchema = Schema ({
    user_name: {
        type: String,
        required: [true, "El nombre de usuario es obligatiro"],
    },

    productName: {
        type: String,
        required: [true, "Products ID es obligatorio"],
    },

    productID: {
        type: String,
        required: [true, "Products ID es obligatorio"],
    },

    especificaciones: {
        type: String,
        required: [true, "Detalles obligatorios"]
    },

    precio: {
        type: Number,
        required: [true, "Precio obligatoria"]
    },

    cantidad: {
        type: Number,
        required: [true, "Cantidad obligatoria"]
    },

    proveedor: {
        type: String,
        required: [true, "Proveedor es obligatorio"],
    }
})

pedidosSchema.methods.toJSON = function () {
    const {__v, _id, ...rest} = this.toObject();
    rest.id = _id;
    return rest;
};

module.exports = model ("pedido", pedidosSchema, "pedidos");