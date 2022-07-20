import { Injectable, UnauthorizedException } from '@nestjs/common';
import { validationNullORUndefined } from 'src/share/utils/validation.util';
import { User } from 'src/user/entities/user.entitiy';
import { createProjectDto } from './dto/project-create.dto';
import { Project } from './entitiy/project.entitiy';
import { ProjectRepository } from './repositories/project.repository';

@Injectable()
export class ProjectService {
  constructor(private readonly projectRepository: ProjectRepository) {}

  public async createProject(
    dto: createProjectDto,
    user: User,
    file: Express.Multer.File,
  ): Promise<void> {
    const proeject: undefined | Project = await this.projectRepository.findOne({
      where: { title: dto.title },
    });

    const filepath = file.path.split('/');

    if (!validationNullORUndefined(proeject)) {
      throw new UnauthorizedException('이미 존재하는 제목입니다');
    }

    const data = this.projectRepository.create(dto);
    data.user = user;
    data.img = filepath[1];
    await this.projectRepository.save(data); // 파일명에 확장자 저장 + http://{ip}:{port}/upload/{파일명.확장자}
  }

  public async getAllList(): Promise<Project[]> {
    const list: undefined | Project[] = await this.projectRepository.find({
      relations: ['user'],
    });

    return list;
  }

  public async getList(id: string): Promise<Project> {
    const list: undefined | Project = await this.projectRepository.findOne({
      where: { id },
      relations: ['user'],
    });

    return list;
  }
}
