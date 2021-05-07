import { Request, Response, NextFunction } from "express";
import { severitysampleController } from '../controller/severitysampleController';


export class Routes {
    private severitysample: severitysampleController = new severitysampleController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/severitysample').get(this.severitysample.GpGetAllValues);
app.route('/severitysample').post(this.severitysample.GpCreate);
     }

}