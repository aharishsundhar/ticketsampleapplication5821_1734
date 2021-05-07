import * as mongoose from 'mongoose';
import ticketsampleModel from '../models/ticketsample';
import { CustomLogger } from '../config/Logger'


export class ticketsampleDao {
    private ticketsample = ticketsampleModel;
    constructor() { }
public GpDelete(ticketsampleId, callback){
new CustomLogger().showLogger('info', 'Enter into ticketsampleDao.ts: GpDelete')

this.ticketsample.findByIdAndRemove(ticketsampleId).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from ticketsampleDao.ts: GpDelete');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpSearch(ticketsampleData, callback){
new CustomLogger().showLogger('info', 'Enter into ticketsampleDao.ts: GpSearch')
let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;Object.entries(ticketsampleData).forEach(
                        ([key,value]) => {
                            if(value !== ''){
                                andkey = key;
                                and_obj[andkey] = value;
                            }
                            else{
                                orkey = key;
                                or_obj[orkey] = { $ne: '' }
                            }
                        }
                    );;
;
this.ticketsample.find({$and: [
                        {
                            $or: [
                               or_obj
                            ]
                        },
                        and_obj
                    ]}).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from ticketsampleDao.ts: GpSearch');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpUpdate(ticketsampleData, callback){
new CustomLogger().showLogger('info', 'Enter into ticketsampleDao.ts: GpUpdate')

this.ticketsample.findOneAndUpdate({ _id: ticketsampleData._id }, ticketsampleData, { new: true }).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from ticketsampleDao.ts: GpUpdate');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpSearchForUpdate(ticketsampleData, callback){
new CustomLogger().showLogger('info', 'Enter into ticketsampleDao.ts: GpSearchForUpdate')

this.ticketsample.findOneAndUpdate({ _id: ticketsampleData._id }, ticketsampleData, { new: true }).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from ticketsampleDao.ts: GpSearchForUpdate');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpGetAllValues(callback){
new CustomLogger().showLogger('info', 'Enter into ticketsampleDao.ts: GpGetAllValues')

this.ticketsample.find().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from ticketsampleDao.ts: GpGetAllValues');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpCreate(ticketsampleData, callback){
new CustomLogger().showLogger('info', 'Enter into ticketsampleDao.ts: GpCreate')
let temp = new ticketsampleModel(ticketsampleData);
;
temp.save().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from ticketsampleDao.ts: GpCreate');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpGetNounById(ticketsampleId, callback){
new CustomLogger().showLogger('info', 'Enter into ticketsampleDao.ts: GpGetNounById')

this.ticketsample.findById(ticketsampleId).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from ticketsampleDao.ts: GpGetNounById');
callback(result);
}).catch((error)=>{
callback(error);
});}


}