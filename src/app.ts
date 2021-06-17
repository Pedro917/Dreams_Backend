import "reflect-metadata";
import './database/connection';
import express, { Application } from "express";
import { errors } from 'celebrate';
import cors from "cors";
import dotenv from "dotenv";
import routes from "./routes";

class App {
  public express: Application;

  public constructor() {
    this.express = express();
    
    dotenv.config();

    this.middlewares();
  }

  private middlewares(): void {
    this.express.use(express.json());
    this.express.use(cors());
    this.express.use(routes);
    this.express.use(errors());
  }
}

export default new App().express;
