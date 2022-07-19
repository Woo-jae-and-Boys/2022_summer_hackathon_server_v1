import { IsEmpty, IsString } from 'class-validator';

export class createProjectDto {
  @IsString()
  @IsEmpty()
  title: string;

  @IsString()
  @IsEmpty()
  content: string;

  @IsString()
  @IsEmpty()
  ToDo: string;

  @IsString()
  @IsEmpty()
  platForm: string;

  @IsString()
  @IsEmpty()
  teamInfo: string;
}
