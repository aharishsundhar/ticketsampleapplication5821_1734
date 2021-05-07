import { Request, Response } from 'express';
import { typesampleService } from '../service/typesampleService';
import { CustomLogger } from '../config/Logger'
let typesample = new typesampleService();

export class typesampleController {
    
    constructor() { }
    
    public GpGetAllValues(req: Request, res: Response) {
typesample.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into typesampleController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from typesampleController.ts: GpGetAllValues');
    })}
public GpCreate(req: Request, res: Response) {
typesample.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into typesampleController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from typesampleController.ts: GpCreate');
    })}


}