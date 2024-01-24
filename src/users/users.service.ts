import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepostitory: Repository<User>
  ){}
  async create(createUserDto: CreateUserDto) {
    await this.usersRepostitory.save(createUserDto)
    return 'This action adds a new user';
  }

 async findAll() {
  return await this.usersRepostitory.find()
  }

  async findOne(id: number) {
      return await this.usersRepostitory.findOneBy({id})
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
      await this.usersRepostitory.update(id, updateUserDto)
      return "Update users success"
  }

  async remove(id: number) {
      await this.usersRepostitory.delete(id)
      return "Delete Users Success"
  }
}
