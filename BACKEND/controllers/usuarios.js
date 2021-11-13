const { response, request } = require('express')

const usuariosGet=(req=request, res=response)=>{
    const usuario = req.body
    res.json({
        msj: "estoy en usuarioGET"
    })
}

const usuariosPost=(req=request, res=response)=>{
    const usuario = req.body
    res.json({
        msj: "estoy en usuarioPOST"
    })
}

const usuariosPut=(req=request, res=response)=>{
    const usuario = req.body
    res.json({
        msj: "estoy en usuarioPUT"
    })
}

const usuariosDelete=(req=request, res=response)=>{
    const usuario = req.body
    res.json({
        msj: "estoy en usuarioDELETE"
    })
}
//GET POST PUT DELETE

module.exports={
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete,
}