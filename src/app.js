import express from "express";
import morgan from "morgan";
import {config} from 'dotenv'
config()
import productsRouter from './routes/products.routes.js';
import userRouter from './routes/user.routes.js'

const app = express();

//Seetings 
app.set('view engine', 'ejs');

//Middlewares
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(morgan('dev'));

app.use('/', productsRouter);
app.use('/', userRouter)

export default app;
