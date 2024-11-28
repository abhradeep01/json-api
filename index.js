import express from 'express';
import 'dotenv/config.js';
import router from './routes/main.routes.js';

const app = express();

// port 
const port = process.env.PORT||4500;

// api url
app.use('/api/v1',router);

//listener function
app.listen(port,()=>{
    console.log("port number:",port);
});