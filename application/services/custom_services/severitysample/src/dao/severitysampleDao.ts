import * as mongoose from 'mongoose';
import severitysampleModel from '../models/severitysample';
import { CustomLogger } from '../config/Logger'


export class severitysampleDao {
    private severitysample = severitysampleModel;
    constructor() { }
public GpGetAllValues(callback){
new CustomLogger().showLogger('info', 'Enter into severitysampleDao.ts: GpGetAllValues')

this.severitysample.find().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from severitysampleDao.ts: GpGetAllValues');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpCreate(severitysampleData, callback){
new CustomLogger().showLogger('info', 'Enter into severitysampleDao.ts: GpCreate')
let temp = new severitysampleModel(severitysampleData);
;
temp.save().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from severitysampleDao.ts: GpCreate');
callback(result);
}).catch((error)=>{
callback(error);
});}


}