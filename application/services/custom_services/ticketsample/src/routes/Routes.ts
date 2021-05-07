import { Request, Response, NextFunction } from "express";
import { ticketsampleController } from '../controller/ticketsampleController';


export class Routes {
    private ticketsample: ticketsampleController = new ticketsampleController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/ticketsample/:id').delete(this.ticketsample.GpDelete);
app.route('/ticketsample/get/search').get(this.ticketsample.GpSearch);
app.route('/ticketsample').put(this.ticketsample.GpUpdate);
app.route('/ticketsample/get/update').put(this.ticketsample.GpSearchForUpdate);
app.route('/ticketsample').get(this.ticketsample.GpGetAllValues);
app.route('/ticketsample').post(this.ticketsample.GpCreate);
app.route('/ticketsample/:id').get(this.ticketsample.GpGetNounById);
     }

}