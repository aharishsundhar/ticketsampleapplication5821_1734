
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const ticketsampleSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   name: String,
   groups: String,
   description: String,
   types: { type: Schema.Types.String, ref: 'typesample' },
   severity: { type: Schema.Types.String, ref: 'severitysample' }
})

const ticketsampleModel = mongoose.model('ticketsample', ticketsampleSchema, 'ticketsample');
export default ticketsampleModel;
