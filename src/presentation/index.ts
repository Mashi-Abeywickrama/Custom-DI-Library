import express from 'express';
import 'reflect-metadata';
import { Repository } from 'typeorm';
import { AppDataSource } from '../data-source';
import { injectable } from '../di/InjectDecorator';
import { TypeORMUserRepository } from '../infrastructure/repositories/UserRepository';
import { UserService } from '../application/UserService';
import { UserController } from './controller/UserController';
import { User } from '../domain/entity/user';

require('dotenv').config()

const app = express();
const port = process.env.PORT;

app.use(express.json());

AppDataSource.initialize()
    .then(() => {
        console.info("Connected to database successfully");

        injectable(new TypeORMUserRepository(new Repository<User>(User, AppDataSource.manager)));
        injectable(new UserService);
        const userController = new UserController();

        app.get("/users/:id", userController.getUserById.bind(userController));

        // server port
        app.listen(port, () => {
            console.log("server is running on", port);
        })
    })
    .catch((error) => {
        console.error("Error connecting to database:", error);
        process.exit(1);
    });

export default app;
