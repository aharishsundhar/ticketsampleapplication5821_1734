import { Request, Response } from 'express';
import {severitysampleDao} from '../dao/severitysampleDao';
import { CustomLogger } from '../config/Logger'
let severitysample = new severitysampleDao();

export class severitysampleService {
    
    constructor() { }
    
    public GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into severitysampleService.ts: GpGetAllValues')
     
     severitysample.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from severitysampleService.ts: GpGetAllValues')
         callback(response);
         });
    }
public GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into severitysampleService.ts: GpCreate')
     const  severitysampleData = req.body;
     severitysample.GpCreate(severitysampleData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from severitysampleService.ts: GpCreate')
         callback(response);
         });
    }


}