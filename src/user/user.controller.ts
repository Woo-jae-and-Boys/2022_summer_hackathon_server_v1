import { Body, Controller, Get, Post } from '@nestjs/common';
import { Token } from 'src/common/decorators/token.decorator';
import { AuthGuard } from 'src/common/guards/auth.guard';
import DataResponse from 'src/common/response/DataResponse';
import Response from 'src/common/response/response';
import { InfToken } from 'src/share/interfaces/InfToken';
import { TokenService } from 'src/token/token.service';
import { loginDto } from './dto/login.dto';
import { UserDto } from './dto/user.dto';
import { InfLoginResponse } from './responses/login.response';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  async register(@Body() dto: UserDto): Promise<Response> {
    await this.userService.register(dto);

    return Response.success('회원가입 성공');
  }

  @Post('login')
  async login(@Body() dto: loginDto): Promise<DataResponse<InfLoginResponse>> {
    const loginRes: InfLoginResponse = await this.userService.login(dto);

    return DataResponse.dataSuccesss('로그인 성공', loginRes);
  }
}
