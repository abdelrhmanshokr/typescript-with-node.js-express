import express, { Application } from 'express';
import mongoose from 'mongoose';
import compression from 'compression';
import cors from 'cors';
import morgan from 'morgan'; // this is used for loggin in development
import helmet from 'helmet';

import Controller from './utils/Controller.interface';

// into the code itself 
class App{
    public express: Application;
    public port: number;

    constructor(controllers: Controller[], port: number){
        this.express = express();
        this.port = port;
    }
}