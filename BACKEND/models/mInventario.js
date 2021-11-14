const mongoose = require("mongoose");
var uniqueValidator = require("mongoose-unique-validator");

const inventario = mongoose.Schema({
  categoria: { type: String, required: true},
  codigo: { type: String, required: true, unique: true },
  nombre: { type: String, required: true, unique: true },
  marca: { type: String, required: true},
  proveedor: { type: String, required: true},
  unidades: { type: Number, required: true},
  novedad: { type: String, required: true},
  almacenamiento: { type:String, required: true },
  valorunitario: { type: Number, required: true },
  
  
});

producto.plugin(uniqueValidator);

module.exports = mongoose.model("Producto", producto);
