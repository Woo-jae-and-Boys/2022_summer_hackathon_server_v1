import { Module } from '@nestjs/common';
import { ErrandsService } from './errands.service';
import { ErrandsController } from './errands.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ErrandRepository } from './repositories/errand.repository';
import { TokenModule } from 'src/token/token.module';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([ErrandRepository]),
    TokenModule,
    UserModule,
  ],
  controllers: [ErrandsController],
  providers: [ErrandsService],
  exports: [ErrandsModule],
})
export class ErrandsModule {}
