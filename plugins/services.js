import ProveedoresService from '@/api/proveedores-service';

export default function(ctx, inject) {
  if (!ctx.$axios) {
    console.error( 'Please make sure $axios module is added');
  } else {
    inject('proveedores',  new ProveedoresService(ctx))
  }
}