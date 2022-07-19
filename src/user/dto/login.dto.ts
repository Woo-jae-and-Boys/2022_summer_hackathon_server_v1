import { IsEmpty, IsString } from 'class-validator';

export class loginDto {
  @IsString()
  @IsEmpty()
  email: string;

  @IsString()
  @IsEmpty()
  password: string;
}
