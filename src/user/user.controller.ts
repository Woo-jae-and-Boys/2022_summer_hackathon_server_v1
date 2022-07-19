import { Controller, Get } from '@nestjs/common';
import { Token } from 'src/common/decorators/token.decorator';
import { InfToken } from 'src/share/interfaces/InfToken';
import { TokenService } from 'src/token/token.service';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly tokenSerivce: TokenService,
  ) {}

  @Get('/test')
  test(): any {
    const token: string = this.tokenSerivce.makeAccessToken('youEunJae');
    const refreshToken: string =
      this.tokenSerivce.makeRefreshToken('youEunJae');

    return token;
  }

  @Get('testing')
  getToken(@Token() token: InfToken): any {
    console.log(token);
  }
}
