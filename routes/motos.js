var express=require('express');
var router=express.Router();
var motoController=require('../controllers/motocontroller');

router.get('/', motoController.moto_lista);
router.get('/crear', motoController.moto_crear_get);
router.post('/crear', motoController.moto_crear_post);
router.get('/:id/actualizar', motoController.moto_actualizar_get);
router.post('/:id/actualizar', motoController.moto_actualizar_post);
router.post('/:id/eliminar', motoController.moto_eliminar_post);

module.exports=router;

