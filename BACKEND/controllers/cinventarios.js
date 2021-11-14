const Inventario = require("../models/mInventario");

exports.getInventory = (req, res) => {
  Inventario.find().then((inventarioResult) => {
    res.status(200).json(inventarioResult);
  });
};

exports.addInventario = (req, res) => {
  const inventarioAdd = new Inventario({
    
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

  inventarioAdd.save().then((createdInventario) => {
    console.log(createdInventary);
    res.status(201).json("Creado exitosamente");
  });
};

exports.getInventarioId = (req, res) => {
    Inventario.findById(req.params.id).then((inventarioResult) => {
    if (inventarioResult) {
      res.status(200).json(inventarioResult);
    } else {
      res.status(404).json("No Encontrado");
    }
  });
};

exports.getinventarioDisponibles = (req, res) => {
    inventario.find({ disponible: true }).then((inventarioResult) => {
    res.status(200).json(inventarioResult);
  });
};

exports.deleteInventario = (req, res) => {
   Inventario.findById(req.params.id).then((inventarioResult) => {
    if (inventarioResult) {
      Inventario.findByIdAndDelete(
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
  Inventario.findById(req.params.id).then((inventarioResult) => {
    if (inventarioResult) {
     Inventario.findByIdAndUpdate(
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
