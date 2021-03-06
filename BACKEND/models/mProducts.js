const mongoose = require("mongoose");
var uniqueValidator = require("mongoose-unique-validator");

const producto = mongoose.Schema({
  categoria: { type: String, required: true},
  codigo: { type: String, required: true, unique: true },
  nombre: { type: String, required: true, unique: true },
  especificaciones: { type: String, required: true},
  marca: { type: String, required: true},
  referencia: { type: String, required: true},
  valorunitario: { type: Number, required: true },
  proveedor: { type: String, required: true},
  almacenamiento: { type:String, required: true },
});

producto.plugin(uniqueValidator);

module.exports = mongoose.model("Producto", producto);
