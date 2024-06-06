
import TiendaRouter from '../Modulos/Tienda/Presentacion/TiendaRoutes.js'

class RouterFactory {
  static crearRouter(modulo) {
    switch (modulo) {
      case 'tienda':
        return new TiendaRouter();
      
      default:
        throw new Error(`Módulo desconocido: ${modulo}`);
    }
  }
}

export default RouterFactory;
