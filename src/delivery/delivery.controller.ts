import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { Token } from 'src/common/decorators/token.decorator';
import { AuthGuard } from 'src/common/guards/auth.guard';
import DataResponse from 'src/common/response/DataResponse';
import Response from 'src/common/response/response';
import { User } from 'src/user/entities/user.entitiy';
import { DeliveryService } from './delivery.service';
import { DeliveryDto } from './dto/delivery.dto';
import { Delivery } from './entitiy/delivery.entitiy';

@Controller('delivery')
export class DeliveryController {
  constructor(private readonly deliveryService: DeliveryService) {}

  @UseGuards(AuthGuard)
  @Post('craete')
  async createDelivery(
    @Body() dto: DeliveryDto,
    @Token() user: User,
  ): Promise<Response> {
    await this.deliveryService.createDelivery(dto, user);

    return Response.success('배달 등록 성공');
  }

  @Get()
  async getAllList(): Promise<DataResponse<Delivery[]>> {
    const list = await this.deliveryService.getAllList();

    return DataResponse.dataSuccesss('전체 배달 조회 성공', list);
  }

  @Get('/:id')
  async getList(@Param('id') id: string): Promise<DataResponse<Delivery>> {
    const list = await this.deliveryService.getList(id);

    return DataResponse.dataSuccesss('단일 배달 조회 성공', list);
  }
}
