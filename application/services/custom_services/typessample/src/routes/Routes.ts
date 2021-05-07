import { Request, Response, NextFunction } from "express";
import { typesampleController } from '../controller/typesampleController';


export class Routes {
    private typesample: typesampleController = new typesampleController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/typesample').get(this.typesample.GpGetAllValues);
app.route('/typesample').post(this.typesample.GpCreate);
     }

}