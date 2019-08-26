import { Schema, model } from 'mongoose';

const adminSchema = new Schema({
    userId: Schema.Types.ObjectId,
    description: Schema.Types.String,
    completed: Schema.Types.Boolean,
  });

const AdminModel = model('Admin', adminSchema);

export default AdminModel;