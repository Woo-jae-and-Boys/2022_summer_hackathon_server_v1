import { Injectable } from '@nestjs/common';
import { User } from 'src/user/entities/user.entitiy';
import { DeliveryDto } from './dto/delivery.dto';
import { Delivery } from './entitiy/delivery.entitiy';
import { DeliveryRepository } from './repositories/delivery.repository';

@Injectable()
export class DeliveryService {
  constructor(private readonly deliveryRepository: DeliveryRepository) {}

  public async createDelivery(dto: DeliveryDto, user: User): Promise<void> {
    const data = this.deliveryRepository.create(dto);
    data.user = user;
    await this.deliveryRepository.save(data);
  }

  public async getAllList(): Promise<Delivery[]> {
    const list: undefined | Delivery[] = await this.deliveryRepository.find({
      relations: ['user'],
    });
    console.log(list);

    return list;
  }

  public async getList(id: string): Promise<Delivery> {
    const list: undefined | Delivery = await this.deliveryRepository.findOne({
      where: { id },
      relations: ['user'],
    });

    return list;
  }
}
