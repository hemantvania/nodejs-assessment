import express from 'express';
import { userController } from '../controllers';
import {generateToken} from '../lib/auth'

const routes = express.Router();


routes.post('/signup', async (req, res, next) => {
    
    try {
        const record = await userController.create(req.body)
        const userRecord = {"userId": record._id,"email": record.email, "name": record.firstName +" "+ record.lastName, "role": record.role } 
        res.status(200).json({ success: true, ...userRecord });
    }
    catch (error) {
        console.log(error.message);
        next(error);
    }
});

routes.post('/login', async (req, res, next) => {
    
    try {
        const { email, password } = req.body
        const record = await userController.getByEmail(email, password);
        res.status(200).json({ success: true, token: generateToken(record) });
    }
    catch (error) {
        console.log(error.message);
        next(error);
    }
});

routes.put('/user/:id', async (req, res, next) => {
    try {
        const id = req.params.id;
        const record = await userController.updateUser(id, req.body);
        res.status(200).json({ success: true, record });
    }
    catch (error) {
        next(error);
    }
});

export default routes;