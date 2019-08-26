import { AdminModel } from '../models';
import { UserModel } from '../models';

function create(data, userId) {
    return AdminModel.create({ ...data, userId });
}

function get(id) {
    return AdminModel.findById({ _id: id });
}

async function getAll(user_id){
    let user_role = await UserModel.find({_id:user_id},{ role: 1, _id: 0 });
    if(user_role.length > 0){
        if(user_role[0].role === "admin"){
          return AdminModel.find()      
        } else{
           var query = {userId : user_id}
           return AdminModel.find(query);
        }
  
    }
}

function update(id, data) {
    return AdminModel.findOneAndUpdate({ _id: id }, data, { new: true });
}

function remove(id) {
    return AdminModel.findByIdAndRemove({ _id: id });
}
export {
    create,
    get,
    getAll,
    update,
    remove
};