//constructor del objeto
var Moto= function(id, color, modelo, ubicacion){
    this.id=id;
    this.color=color;
    this.modelo=modelo;
    this.ubicacion=ubicacion;
}


//data
Moto.listaMotos=[];
Moto.agregar= function(moto){
    Moto.listaMotos.push(moto);
}

var moto1=new Moto(1, 'rojo','urbana',[7.888297, -72.495912]);
var moto2=new Moto(2, 'blanca','urbana',[7.915991, -72.493325]);

Moto.agregar(moto1);
Moto.agregar(moto2);

//buscar
Moto.buscar= function(motoId){
    var motoId=Moto.listaMotos.find(x=>x.id==motoId);
    if(motoId)
        return motoId;
    else
        throw new Error('no existe una moto con Id ${motoId}');
}

Moto.eliminar= function(motoId){
    for(var i=0, i<Moto.listaMotos.length; i++){
        if(Moto.listaMotos[i].id == motoId){
            Moto.listaMotos.splice(i,1);
            break
        }
    }
}



module.exports=Moto;