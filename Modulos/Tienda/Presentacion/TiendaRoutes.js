import Router from '../../../Core/Router.js'
import TiendaController from '../Logica/Controladores/TiendaController.js'
 

class TiendaRouter extends Router {
    constructor() {
        super('tienda');
        this.defineRoutes();
        this.tiendaController = new TiendaController();
    }

    defineRoutes() {
        this.router.get('/Tienda', async(req, res) => {
            try{

                const data = await this.tiendaController.getProductos()
                // Renderiza la vista 'index.ejs' en la carpeta 'views'
                return res.render('Tienda', { productos: data });
            }catch(error){
                console.log(error)
                return res.render('InternalError', { error: error });
            }
        });

        this.router.get('/buscarProductos', async(req, res) => {
            try{
                const nombre = req.query.nombre
                const data = await this.tiendaController.getProductosByNombre(nombre)
            
                return res.render('Tienda', { productos: data });
            }catch(error){
                console.log(error)
                return res.render('InternalError', { error: error });
            }
        });


        this.router.get('/vistaDetalle', async(req, res) => {
            try{
                const id = parseInt(req.query.id)
                const data = await this.tiendaController.getProductosById(id)
                // Renderiza la vista 'index.ejs' en la carpeta 'views'
                return res.render('vistaDetalle', { productos: data });
            }catch(error){
                console.log(error)
                return res.render('InternalError', { error: error });
            }
        });
    }

}

export default TiendaRouter;