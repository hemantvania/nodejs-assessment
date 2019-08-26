import express from 'express';
import { adminController } from '../controllers';
import { verifyToken } from '../lib/auth';

const routes = express.Router();
// Token verify
routes.all('/userlist', verifyToken);

// Insert Data route
routes.post('/userlist', async (req, res, next) => {
    try {
        const record = await adminController.create(req.body, req.decoded.data._id);
        res.status(201).json({ success: true, record });
    }
    catch (error) {
        console.log(error.message);
        next(error);
    }
});


// get all data route
routes.get('/userlist', async (req, res, next) => {
    try {
        const record = await adminController.getAll(req.decoded.data._id);
        res.status(200).json({ success: true, record });
    }
    catch (error) {
        next(error);
    }
});

// get data by id route
routes.get('/userlist/:id', async (req, res, next) => {
    try {
        const id = req.params.id;
        const record = await adminController.get(id);
        res.status(200).json({ success: true, record });
    }
    catch (error) {
        next(error);
    }
});

//Update data by id route
routes.put('/userlist/:id', async (req, res, next) => {
    try {
        const id = req.params.id;

        const record = await adminController.update(id, req.body);

        res.status(200).json({ success: true, record });
    }
    catch (error) {
        next(error);
    }
});


// Delete data by id route
routes.delete('/userlist/:id', async (req, res, next) => {
    try {
        const id = req.params.id;
        const record = await adminController.remove(id);
        res.status(200).json({ success: true, record });
    }
    catch (error) {
        next(error);
    }
});

export default routes;