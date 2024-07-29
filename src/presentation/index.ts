import express from 'express';
import 'reflect-metadata';
import { AppDataSource } from '../data-source';

require('dotenv').config()

const app = express();
const port = process.env.PORT;

app.use(express.json());

AppDataSource.initialize()
  .then(() => {
    console.log("Connected to database successfully");

    // server port
    app.listen(port, () => {
        console.log("server is running on", port);
    })})
    .catch((error) => {
        console.error("Error connecting to database:", error);
        process.exit(1);
    });
 
export default app;
