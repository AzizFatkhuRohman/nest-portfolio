import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { Repository } from 'typeorm';
import { Project } from './entities/project.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(Project)
    private readonly projectRepository: Repository<Project>
  ){}
  async create(createProjectDto: CreateProjectDto) {
      await this.projectRepository.create(createProjectDto)
      return "Create Project Success"
  }

  async findAll() {
      return await this.projectRepository.find()
  }

  findOne(id: number) {
    return this.projectRepository.findOneBy({id})
  }

  update(id: number, updateProjectDto: UpdateProjectDto) {
    return this.projectRepository.update(id,updateProjectDto)
  }

  remove(id: number) {
    return this.projectRepository.delete(id)
  }
}
