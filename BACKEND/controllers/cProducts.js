const Producto = require("../models/mProducts");

exports.getProducts = (req, res) => {
  Producto.find().then((productoResult) => {
    res.status(200).json(productoResult);
  });
};

exports.addProduct = (req, res) => {
  const productosAdd = new Producto({
    
    categoria: req.body.categoria,
    codigo: req.body.codigo,
    nombre: req.body.nombre,
    especificaciones: req.body.especificaciones,
    marca: req.body.marca,
    referencia: req.body.referencia,
    valorunitario: req.body.valorunitario,
    proveedor: req.body.proveedor,
    almacenamiento: req.body.almacenamiento,
    disponible: req.body.disponible,
  });

  productosAdd.save().then((createdProduct) => {
    console.log(createdProduct);
    res.status(201).json("Creado exitosamente");
  });
};

exports.getProductId = (req, res) => {
  Producto.findById(req.params.id).then((productoResult) => {
    if (productoResult) {
      res.status(200).json(productoResult);
    } else {
      res.status(404).json("No Encontrado");
    }
  });
};

exports.getProductosDisponibles = (req, res) => {
  Producto.find({ disponible: true }).then((productoResult) => {
    res.status(200).json(productoResult);
  });
};

exports.deleteProduct = (req, res) => {
  Producto.findById(req.params.id).then((productoResult) => {
    if (productoResult) {
      Producto.findByIdAndDelete(
        { _id: req.params.id },
        req.body,
        function (err) {
          res.status(200).json("Eliminado");
        }
      );
    } else {
      res.status(404).json("No Encontrado");
    }
  });
};

exports.updateProductById = (req, res) => {
  Producto.findById(req.params.id).then((productoResult) => {
    if (productoResult) {
      Producto.findByIdAndUpdate(
        { _id: req.params.id },
        req.body,
        function (err) {
          res.status(200).json("Actualizado");
        }
      );
    } else {
      res.status(404).json("No actualizado");
    }
  });
};
