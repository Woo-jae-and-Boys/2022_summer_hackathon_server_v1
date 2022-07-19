import { IsEmpty, IsString } from 'class-validator';

export class createErrandDto {
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
  otherInfo: string;
}
