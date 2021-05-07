import * as mongoose from 'mongoose';
import typesampleModel from '../models/typesample';
import { CustomLogger } from '../config/Logger'


export class typesampleDao {
    private typesample = typesampleModel;
    constructor() { }
public GpGetAllValues(callback){
new CustomLogger().showLogger('info', 'Enter into typesampleDao.ts: GpGetAllValues')

this.typesample.find().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from typesampleDao.ts: GpGetAllValues');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpCreate(typesampleData, callback){
new CustomLogger().showLogger('info', 'Enter into typesampleDao.ts: GpCreate')
let temp = new typesampleModel(typesampleData);
;
temp.save().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from typesampleDao.ts: GpCreate');
callback(result);
}).catch((error)=>{
callback(error);
});}


}