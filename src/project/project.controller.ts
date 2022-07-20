import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Request,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Token } from 'src/common/decorators/token.decorator';
import { AuthGuard } from 'src/common/guards/auth.guard';
import { multerDiskOptions } from 'src/common/multer/multer.options';
import DataResponse from 'src/common/response/DataResponse';
import Response from 'src/common/response/response';
import { User } from 'src/user/entities/user.entitiy';
import { createProjectDto } from './dto/project-create.dto';
import { Project } from './entitiy/project.entitiy';
import { ProjectService } from './project.service';

@Controller('project')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @UseGuards(AuthGuard)
  @UseInterceptors(FileInterceptor('file', multerDiskOptions))
  @Post('create')
  async createProject(
    @Body() dto: createProjectDto,
    @Token() user: User,
    @UploadedFile() file: Express.Multer.File,
  ): Promise<Response> {
    await this.projectService.createProject(dto, user, file);

    return Response.success('프로젝트 등록 성공');
  }

  @Get()
  async getAllList(): Promise<DataResponse<Project[]>> {
    const list = await this.projectService.getAllList();

    return DataResponse.dataSuccesss('전체 프로젝트 조회 성공', list);
  }

  @Get('/:id')
  async getList(@Param('id') id: string): Promise<DataResponse<Project>> {
    const list = await this.projectService.getList(id);

    return DataResponse.dataSuccesss('단일 프로젝트 조회 성공', list);
  }
  @Post('/image')
  @UseInterceptors(FileInterceptor('image', multerDiskOptions))
  async uploadImage(
    @UploadedFile() file: Express.Multer.File,
  ): Promise<DataResponse<string>> {
    return DataResponse.dataSuccesss('사진 업로드 성공', file.path);
  }
}
