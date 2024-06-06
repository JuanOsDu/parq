import ProductoService from '../Servicios/ProductoService.js'

class TiendaController {

    constructor(){
        this.productoService = new ProductoService();
    }

    async getProductos(){
        try{
            let res = await this.productoService.getAllProductos();
            return res
        }catch(error){
            throw new Error("Error en controlador "+error)
        }
       
    }
    async getProductosByNombre(qNombre){
        try{
            let res = await this.productoService.getProductosByNombre(qNombre);
            return res
        }catch(error){
            throw new Error("Error en controlador "+error)
        }
       
    }
    async getProductosById(id){
        try{
            let res = await this.productoService.getProductosById(id);
            return res
        }catch(error){
            throw new Error("Error en controlador "+error)
        }
       
    }
    

}

export default TiendaController;