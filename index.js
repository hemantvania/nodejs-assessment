import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

//import routes
import { userRoutes } from './routes';
import { adminRoutes } from './routes'
const app = express();
const port = 8181;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// routes
app.get('/', ( req, res)  => { 
      res.send(`Welcome to the ToDo App! ${req.baseUrl}`) ;    
  });

app.use(userRoutes);
app.use(adminRoutes)

// connect to mongoDB
mongoose.connect(`mongodb+srv://node-test:node-test@cluster0-fwoep.mongodb.net/nodetodo`, { useNewUrlParser: true }, (err) => {
  if (err) console.log('mongodb failed to connect', err);
  else console.log('mongodb successfully connected!');
});

//error handling
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send(`Something went wrong! ${err.message}`);
})

// start app on port
app.listen(port, () =>
  console.log(`We are using port ${port}!`),
);