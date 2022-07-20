import { Module } from '@nestjs/common';
import { ProjectService } from './project.service';
import { ProjectController } from './project.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectRepository } from './repositories/project.repository';
import { TokenModule } from 'src/token/token.module';
import { UserModule } from 'src/user/user.module';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [
    TypeOrmModule.forFeature([ProjectRepository]),
    MulterModule.registerAsync({ useFactory: () => ({ dest: './upload' }) }),
    TokenModule,
    UserModule,
  ],
  controllers: [ProjectController],
  providers: [ProjectService],
  exports: [ProjectModule],
})
export class ProjectModule {}
