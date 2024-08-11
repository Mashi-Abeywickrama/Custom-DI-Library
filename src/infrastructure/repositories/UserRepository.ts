import { EntityRepository, Repository } from "typeorm";
import { User } from "../../domain/entity/user";
import { UserRepository } from "../../domain/userRepository";
import { injectable } from "../../di/InjectDecorator";
import { AppDataSource } from "../../data-source";

// @EntityRepository(User)

export class TypeORMUserRepository implements UserRepository {
  
  constructor(private readonly userRepository: Repository<User>) {
  }

  async findById(id: number): Promise<User | null> {
    return await this.userRepository.findOneBy({ id });
  }

  async findByEmail(email: string): Promise<User | null> {
    return await this.userRepository.findOneBy({ email });
  }
}

