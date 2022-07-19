import { IsEmail, IsEmpty, IsString } from 'class-validator';

export class DeliveryDto {
  @IsString()
  @IsEmpty()
  food: string;

  @IsString()
  @IsEmpty()
  location: string;

  @IsString()
  @IsEmpty()
  otherInfo: string;
}
