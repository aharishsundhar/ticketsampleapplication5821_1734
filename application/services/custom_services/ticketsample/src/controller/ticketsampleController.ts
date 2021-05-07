import { Request, Response } from 'express';
import { ticketsampleService } from '../service/ticketsampleService';
import { CustomLogger } from '../config/Logger'
let ticketsample = new ticketsampleService();

export class ticketsampleController {
    
    constructor() { }
    
    public GpDelete(req: Request, res: Response) {
ticketsample.GpDelete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into ticketsampleController.ts: GpDelete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from ticketsampleController.ts: GpDelete');
    })}
public GpSearch(req: Request, res: Response) {
ticketsample.GpSearch(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into ticketsampleController.ts: GpSearch');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from ticketsampleController.ts: GpSearch');
    })}
public GpUpdate(req: Request, res: Response) {
ticketsample.GpUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into ticketsampleController.ts: GpUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from ticketsampleController.ts: GpUpdate');
    })}
public GpSearchForUpdate(req: Request, res: Response) {
ticketsample.GpSearchForUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into ticketsampleController.ts: GpSearchForUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from ticketsampleController.ts: GpSearchForUpdate');
    })}
public GpGetAllValues(req: Request, res: Response) {
ticketsample.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into ticketsampleController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from ticketsampleController.ts: GpGetAllValues');
    })}
public GpCreate(req: Request, res: Response) {
ticketsample.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into ticketsampleController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from ticketsampleController.ts: GpCreate');
    })}
public GpGetNounById(req: Request, res: Response) {
ticketsample.GpGetNounById(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into ticketsampleController.ts: GpGetNounById');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from ticketsampleController.ts: GpGetNounById');
    })}


}