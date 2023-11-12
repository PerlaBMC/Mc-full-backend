const Close = require ("../models/productClose")

const getClose = async (req,res) => {
try {
    const closeCollection = await Close.find()

    return res.json ({
        ok: true, 
        msg: "producto obtenido",
        data: closeCollection,
    });
} catch (error) {
    return res.status (500).json ({
        ok: false, 
        msg: "error en el servidos get",
        data: {}
    })
}
}

const getCloseID = async (req, res) => {
    try {
      const { id } = req.params;
      const product = await Close.findById(id);
  
      return res.json({
        ok: true,
        msg: "Producto obtenido",
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

const postClose = async (req, res) => {
 try {
    const {
        productName,
        productID,
        productPrice,
        productSize,
        image,
        image2,
        description,
    } = req.body

    const postCollection = {
        productName,
        productID,
        productPrice,
        productSize,
        image,
        image2,
        description,
    }

    const newCollection = await Close (postCollection).save()
    return res.json ({
        ok: true,
        msg: "colección creado",
        data: newCollection
    });
 } catch (error) {
    return res.status (500).json ({
        ok: false,
        msg: "error en el servidor",
        data: {}
    });
 }
}

const putClose = async (req, res) =>{
try {
    const {id} = req.params;
    const {        
        productName,
        productID,
        productPrice,
        productSize,
        image,
        image2,
        description,} = req.body;

    const newInformation = {
        productName,
        productID,
        productPrice,
        productSize,
        image,
        image2,
        description, 
    }

    const putCollection = await Close.findByIdAndUpdate (id,newInformation, {new:true})
    return res.json ({
        ok: true,
        msg: "colección actualizada",
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

const deleteClose = async (req, res) => {
    try {

        const {id} = req.params;

        const deletCollection = await Close.findByIdAndRemove(id);

        return res.json ({
            ok: true,
            msg: "colección eliminada",
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
getClose,
postClose,
putClose,
deleteClose,
getCloseID
}