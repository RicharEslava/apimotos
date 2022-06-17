var Moto=require('../models/motoModel');

exports.moto_lista= function(req, res){
    res.render('motos/index', {motos: Moto.listaMotos});
}

exports.moto_crear_get= function(req, res){
    res.render('motos/crear');
}

exports.moto_crear_post= function(req, res){
    var moto= new Moto(req.body.id, req.body.color, req.body.modelo);
    moto.ubicacion=[req.body.latitud, req.body.longitud]
    Moto.agregar(moto);
    res.redirect('/motos');
}

exports.moto_actualizar_get= function(req, res){
    var moto=Moto.buscar(req.params.id);
    res.render('motos/actualizar', {motos});
}

exports.moto_actualizar_post= function(req, res){
    var moto=Moto.buscar(req.params.id);
    moto.color= req.body.color;
    moto.modelo= req.body.modelo;
    moto.ubicacion=[req.body.latitud, req.body.longitud]
    res.redirect('/motos');
}

exports.moto_eliminar_post= function(req, res){
    Moto.eliminar(req.params.id);
    res.render('/motos');
}
