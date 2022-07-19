import { Injectable } from '@nestjs/common';
import { UserController } from './user.controller';

@Injectable()
export class UserService {
  public getHello(): string {
    return 'study';
  }
}
