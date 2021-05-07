import { Request, Response } from 'express';
import {ticketsampleDao} from '../dao/ticketsampleDao';
import { CustomLogger } from '../config/Logger'
let ticketsample = new ticketsampleDao();

export class ticketsampleService {
    
    constructor() { }
    
    public GpDelete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into ticketsampleService.ts: GpDelete')
     const  ticketsampleId = req.params.id;
     ticketsample.GpDelete(ticketsampleId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from ticketsampleService.ts: GpDelete')
         callback(response);
         });
    }
public GpSearch(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into ticketsampleService.ts: GpSearch')
     const  ticketsampleData = req.query;
     ticketsample.GpSearch(ticketsampleData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from ticketsampleService.ts: GpSearch')
         callback(response);
         });
    }
public GpUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into ticketsampleService.ts: GpUpdate')
     const  ticketsampleData = req.body;
     ticketsample.GpUpdate(ticketsampleData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from ticketsampleService.ts: GpUpdate')
         callback(response);
         });
    }
public GpSearchForUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into ticketsampleService.ts: GpSearchForUpdate')
     const  ticketsampleData = req.body;
     ticketsample.GpSearchForUpdate(ticketsampleData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from ticketsampleService.ts: GpSearchForUpdate')
         callback(response);
         });
    }
public GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into ticketsampleService.ts: GpGetAllValues')
     
     ticketsample.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from ticketsampleService.ts: GpGetAllValues')
         callback(response);
         });
    }
public GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into ticketsampleService.ts: GpCreate')
     const  ticketsampleData = req.body;
     ticketsample.GpCreate(ticketsampleData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from ticketsampleService.ts: GpCreate')
         callback(response);
         });
    }
public GpGetNounById(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into ticketsampleService.ts: GpGetNounById')
     const  ticketsampleId = req.params.id;
     ticketsample.GpGetNounById(ticketsampleId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from ticketsampleService.ts: GpGetNounById')
         callback(response);
         });
    }


}