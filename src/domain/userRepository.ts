import { injectable } from "../di/InjectDecorator";
import { User } from "./entity/user";


export interface UserRepository {

  findById(id: number): Promise<User | null>;


  findByEmail(email: string): Promise<User | null>;

 
}

