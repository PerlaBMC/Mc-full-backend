const Shoes = require ("../models/productShoes")

const getShoes = async (req,res) => {
try {
    const shoesCollection = await Shoes.find ()

    return res.json ({
        ok: true, 
        msg: "producto obtenido",
        data: shoesCollection,
    });
} catch (error) {
    return res.status (500).json ({
        ok: false, 
        msg: "error en el servidos get",
        data: {}
    })
}
}

const getShoesID = async (req, res) => {
    try {
      const { id } = req.params;
      const product = await Shoes.findById(id);
  
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

const postShoes = async (req, res) => {
 try {
    const {        
        productName,
        productID,
        productPrice,
        productSize,
        image,
        image2,
        description,} = req.body

    const postCollection = {
        productName,
        productID,
        productPrice,
        productSize,
        image,
        image2,
        description,
    }

    const newCollection = await Shoes (postCollection).save()
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

const putShoes = async (req, res) =>{
try {
    const {id} = req.params;
    const {
        productName,
        productID,
        productPrice,
        productSize,
        image,
        image2,
        description, 
    } = req.body;

    const newInformation = {
        productName,
        productID,
        productPrice,
        productSize,
        image,
        image2,
        description,
    }

    const putCollection = await Shoes.findByIdAndUpdate (id,newInformation, {new:true})
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

const deleteShoes = async (req, res) => {
    try {

        const {id} = req.params;

        const deletCollection = await Shoes.findByIdAndRemove(id);

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
  getShoes,
  getShoesID,
  postShoes,
  putShoes,
  deleteShoes
}