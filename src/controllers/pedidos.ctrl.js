const Pedidos = require ("../models/pedidos")

const postPedido = async (req, res) => {
    try {

        const {user_name,
            productName,
            productID, 
            especificaciones,
            precio,
            cantidad, 
            proveedor } = req.body

        const postCollection = {
            user_name,
            productName,
            productID, 
            especificaciones,
            precio,
            cantidad, 
            proveedor
        }

        const newCollection = await Pedidos (postCollection).save()
        return res.json ({
            ok: true,
            msg: "pedido recibido",
            data: newCollection
        }); 
    } catch (error) {
        return res.status (500).json ({
            ok: false,
            msg: "error al cargar producto",
            data: {}
        });
    }
}

const getPedidos = async (req, res) => {
    try {

        const pedidosCollection = await Pedidos.find()

        return res.json ({
            ok: true,
            msg: "pedidos obtenidos",
            data: pedidosCollection
        })
    } catch (error) {
        return res.status (500).json ({
            ok: false,
            msg: "error en el servidor",
            data: {}
        });
    }
};

const getPedido = async (req, res) => {
    try {
      const { id } = req.params;
      const product = await Pedidos.findById(id);
  
      return res.json({
        ok: true,
        msg: "Pedido obtenido",
        data: product,
      });
    } catch (error) {
      return res.status(500).json({
        ok: false,
        msg: "Error en el servidor",
        data: {},
      });
    }
  };

const putPedido = async (req, res) =>{
    try {
        const {id} = req.params;
        const {user_name,
            productName,
            productID, 
            especificaciones,
            precio,
            cantidad, 
            proveedor } = req.body;
    
        const newInformation = {
            user_name,
            productName, 
            productID, 
            especificaciones,
            precio,
            cantidad, 
            proveedor
        }
    
        const putCollection = await Pedidos.findByIdAndUpdate (id,newInformation, {new:true})
        return res.json ({
            ok: true,
            msg: "pedido actualizado",
            data: putCollection
        })
        
    } catch (error) {
        return res.status (500).json ({
            ok:false,
            msg: "error en el servidor put",
            data: {}
        })
    }
    }
    
    const deletePedido = async (req, res) => {
        try {
    
            const {id} = req.params;
    
            const deletCollection = await Pedidos.findByIdAndRemove(id);
    
            return res.json ({
                ok: true,
                msg: "pedido eliminado",
                data: deletCollection
            })
            
        } catch (error) {
            return res.status (500).json ({
                ok: false,
                msg: "error en el servidor delete",
                data: {}
            })
        }
    } 
    
    module.exports = {
        getPedidos,
        getPedido,
        postPedido,
        putPedido,
        deletePedido
    }