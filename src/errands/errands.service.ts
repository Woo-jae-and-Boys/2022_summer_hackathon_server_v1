import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Token } from 'src/common/decorators/token.decorator';
import { validationNullORUndefined } from 'src/share/utils/validation.util';
import { User } from 'src/user/entities/user.entitiy';
import { createErrandDto } from './dto/create-errand.dto';
import { Errand } from './entities/errand.entity';
import { ErrandRepository } from './repositories/errand.repository';

@Injectable()
export class ErrandsService {
  constructor(private readonly errandRepository: ErrandRepository) {}

  public async createErrand(
    dto: createErrandDto,
    @Token() user: User,
  ): Promise<void> {
    const errand: undefined | Errand = await this.errandRepository.findOne({
      where: { title: dto.title },
    });

    if (!validationNullORUndefined(errand)) {
      throw new UnauthorizedException('이미 존재하는 제목입니다');
    }

    const data = this.errandRepository.create(dto);
    data.user = user;
    await this.errandRepository.save(data);
  }

  public async getAllList(): Promise<Errand[]> {
    const list: undefined | Errand[] = await this.errandRepository.find({
      relations: ['user'],
    });

    return list;
  }

  public async getList(id: string): Promise<Errand> {
    const list: undefined | Errand = await this.errandRepository.findOne({
      where: { id },
      relations: ['user'],
    });

    return list;
  }
}
