import { EntityRepository, Repository } from 'typeorm';
import { Errand } from '../entities/errand.entity';

@EntityRepository(Errand)
export class ErrandRepository extends Repository<Errand> {}
