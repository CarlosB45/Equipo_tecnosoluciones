import {var_rout, var_path} from './paths'

const routes = [{
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
  }, /* And so on. */];

export default routes;



