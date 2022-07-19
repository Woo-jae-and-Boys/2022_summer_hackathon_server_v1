import { IsEmpty, IsString } from 'class-validator';

export class UserDto {
  @IsString()
  @IsEmpty()
  email!: string;

  @IsString()
  @IsEmpty()
  password!: string;

  @IsString()
  @IsEmpty()
  job!: string;

  @IsString()
  @IsEmpty()
  des!: string;

  @IsString()
  @IsEmpty()
  studentId: string;
}
