import { Controller, Get, Post, Body, UseGuards, Param } from '@nestjs/common';
import { Token } from 'src/common/decorators/token.decorator';
import { AuthGuard } from 'src/common/guards/auth.guard';
import DataResponse from 'src/common/response/DataResponse';
import Response from 'src/common/response/response';
import { User } from 'src/user/entities/user.entitiy';
import { createErrandDto } from './dto/create-errand.dto';
import { Errand } from './entities/errand.entity';
import { ErrandsService } from './errands.service';

@Controller('errands')
export class ErrandsController {
  constructor(private readonly errandsService: ErrandsService) {}

  @UseGuards(AuthGuard)
  @Post('create')
  async createErrand(
    @Body() dto: createErrandDto,
    @Token() user: User,
  ): Promise<Response> {
    await this.errandsService.createErrand(dto, user);

    return Response.success('심부름 등록 성공');
  }

  @Get()
  async getAllList(): Promise<DataResponse<Errand[]>> {
    const list = await this.errandsService.getAllList();

    return DataResponse.dataSuccesss('전체 심부름 조회 성공', list);
  }

  @Get('/:id')
  async getList(@Param('id') id: string): Promise<DataResponse<Errand>> {
    const list = await this.errandsService.getList(id);

    return DataResponse.dataSuccesss('단일 심부름 조회 성공', list);
  }
}
