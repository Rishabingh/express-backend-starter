import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import path from 'path'

const app = express();

dotenv.config({
  path: './.env'
});

if(!process.env.ORIGINS) throw new Error('origin not provided to run application');
const origin = process.env.ORIGINS.split(',');

app.use(cors({
  origin,
  credentials: true
}));

app.use(cookieParser());
app.use(express.json({limit: '22kb'})); // change size according to your usage json data more than 22kb will be rejected
app.use(express.urlencoded({extended: true ,limit: '22kb'}));
app.use(express.static(path.join(process.cwd(), './public')));

// importing routes here


// defining route


// global error handler


export {
  app
}