import { EntityRepository, Repository } from 'typeorm';
import { Delivery } from '../entitiy/delivery.entitiy';

@EntityRepository(Delivery)
export class DeliveryRepository extends Repository<Delivery> {}
