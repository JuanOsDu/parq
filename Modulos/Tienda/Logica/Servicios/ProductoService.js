import ProductoRepositorio from '../../Persistencia/Repositorios/ProductoRepositorio.js'
import Producto from '../../Persistencia/Modelos/Producto.js';
class ProductoService{

    constructor(){
        this.productoRepositorio = new ProductoRepositorio();
    }
    async  getAllProductos() {
        try {
       
          const productos = await this.productoRepositorio.getAllProductos();
           
          return productos
        } catch (error) {
          throw new Error('Error fetching products from the database '+error);
        }
      }
      async  getProductosByNombre(qNombre) {
        try {
       
          const productos = await this.productoRepositorio.getProductosByNombre(qNombre);
           
          return productos
        } catch (error) {
          throw new Error('Error fetching products from the database '+error);
        }
      }
      async  getProductosById(id) {
        try {
       
          const productos = await this.productoRepositorio.getProductosById(id);
           
          return productos
        } catch (error) {
          throw new Error('Error fetching products from the database '+error);
        }
      }
      
}

export default ProductoService;
