import {
  BadRequestException,
  CanActivate,
  ExecutionContext,
  Injectable,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { InfToken } from 'src/share/interfaces/InfToken';
import { validationNullORUndefined } from 'src/share/utils/validation.util';
import { TokenService } from 'src/token/token.service';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly userService: UserService,
    private readonly tokenService: TokenService,
  ) {}

  public async canActivate(context: ExecutionContext): Promise<boolean> {
    const req = context.switchToHttp().getRequest();

    const token: string = req.headers['authorization'];
    if (validationNullORUndefined(token)) {
      throw new BadRequestException('토큰이 없습니다');
    }

    // req.user = user;
    return true;
  }
}
