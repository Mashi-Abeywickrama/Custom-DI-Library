import { inject, injectable } from "../di/InjectDecorator";
import { User } from "../domain/entity/user";
import { UserRepository } from "../domain/userRepository";

export class UserService {
   @inject('TypeORMUserRepository')
    public userRepository: UserRepository;

  async getUserById(id: number): Promise<User | null> {
    try {
      return await this.userRepository.findById(id);
    } catch (error) {
      console.error("Error while fetching user:", error);
      throw error; 
    }
  }
}


