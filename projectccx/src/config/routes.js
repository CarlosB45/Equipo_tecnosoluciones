import {var_rout, var_path} from './paths'

const routes = [{
  //Modulo Inicio
    path: var_path.path_in_Home,
    component: var_rout.rout_in_Home,
  }, {
    path: var_path.path_in_Login,
    component: var_rout.rout_in_Login,
  }, {
    path: var_path.path_in_Register,
    component: var_rout.rout_in_Register,
  }, {
  
  //Modulo Inventarios
    path: var_path.path_in_Home,
    component: var_rout.rout_in_Home,
  }, {
    path: var_path.path_in_Login,
    component: var_rout.rout_in_Login,
  }, {
    path: var_path.path_in_Register,
    component: var_rout.rout_in_Register,
  }, {

  //Modulo productos
    path: var_path.path_mp_Edicionproductos,
    component: var_rout.rout_mp_Edicionproductos,
  }, {
    path: var_path.path_mp_Editproduct,
    component: var_rout.rout_mp_Editproduct,
  }, {
    path: var_path.path_mp_Fichaproducto,
    component: var_rout.rout_mp_Fichaproducto,
  }, {
    path: var_path.path_mp_Iniciomodulos,
    component: var_rout.rout_mp_Iniciomodulos,
  }, {
    path: var_path.path_mp_Listproducts,
    component: var_rout.rout_mp_Listproducts,
  }, {
    path: var_path.path_mp_Registerproduct,
    component: var_rout.rout_mp_Registerproduct,
  },  {

  //Modulo usuario
    path: var_path.path_mu_Create,
    component: var_rout.rout_mu_Create,
  }, {
    path: var_path.path_mu_Modification,
    component: var_rout.rout_mu_Modification,
  }, {
    path: var_path.path_mu_Remove,
    component: var_rout.rout_mu_Remove,
  }, {
    path: var_path.path_mu_Vizualizacion,
    component: var_rout.rout_mu_Vizualizacion,
  }, {
    
  //Modulo vendedor
    path: var_path.path_mv_ConsulVendedor,
    component: var_rout.rout_mv_ConsulVendedor,
  }, {
    path: var_path.path_mv_ElimVendedor,
    component: var_rout.rout_mv_ElimVendedor,
  }, {
    path: var_path.path_mv_IngreVendedor,
    component: var_rout.rout_mv_IngreVendedor,
  }, {
    path: var_path.path_mv_ModVendedor,
    component: var_rout.rout_mv_ModVendedor,
  }, {
    path: var_path.path_mv_indexVendedor,
    component: var_rout.rout_mv_indexVendedor,
  }, {
    path: '/',
    component: var_rout.rout_mv_indexVendedor,
  }, {
  
  //Modulo ventas
    path: var_path.path_mv_Indivsearch,
    component: var_rout.rout_mv_Indivsearch,
  }, {
    path: var_path.path_mv_Inquirysales,
    component: var_rout.rout_mv_Inquirysales,
  }, {
    path: var_path.path_mv_mv_Salesmodif,
    component: var_rout.rout_mv_Salesmodif,
  }, {
    path: var_path.path_mv_Salesrecord,
    component: var_rout.rout_mv_Salesrecord,
  },   
  

  /* And so on. */];

export default routes;



