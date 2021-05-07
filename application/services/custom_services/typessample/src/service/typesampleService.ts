import { Request, Response } from 'express';
import {typesampleDao} from '../dao/typesampleDao';
import { CustomLogger } from '../config/Logger'
let typesample = new typesampleDao();

export class typesampleService {
    
    constructor() { }
    
    public GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into typesampleService.ts: GpGetAllValues')
     
     typesample.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from typesampleService.ts: GpGetAllValues')
         callback(response);
         });
    }
public GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into typesampleService.ts: GpCreate')
     const  typesampleData = req.body;
     typesample.GpCreate(typesampleData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from typesampleService.ts: GpCreate')
         callback(response);
         });
    }


}