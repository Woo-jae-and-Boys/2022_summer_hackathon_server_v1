import { Module } from '@nestjs/common';
import { DeliveryService } from './delivery.service';
import { DeliveryController } from './delivery.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TokenModule } from 'src/token/token.module';
import { UserModule } from 'src/user/user.module';
import { DeliveryRepository } from './repositories/delivery.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([DeliveryRepository]),
    TokenModule,
    UserModule,
  ],
  controllers: [DeliveryController],
  providers: [DeliveryService],
  exports: [DeliveryModule],
})
export class DeliveryModule {}
