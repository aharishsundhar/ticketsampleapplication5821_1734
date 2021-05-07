import { Request, Response } from 'express';
import { severitysampleService } from '../service/severitysampleService';
import { CustomLogger } from '../config/Logger'
let severitysample = new severitysampleService();

export class severitysampleController {
    
    constructor() { }
    
    public GpGetAllValues(req: Request, res: Response) {
severitysample.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into severitysampleController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from severitysampleController.ts: GpGetAllValues');
    })}
public GpCreate(req: Request, res: Response) {
severitysample.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into severitysampleController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from severitysampleController.ts: GpCreate');
    })}


}