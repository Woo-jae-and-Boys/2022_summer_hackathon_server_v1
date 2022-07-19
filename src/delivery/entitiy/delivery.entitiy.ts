import { User } from 'src/user/entities/user.entitiy';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Delivery {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  food: string;

  @Column()
  location: string;

  @Column()
  otherInfo: string;

  @ManyToOne(() => User, (user) => user.delivery)
  @JoinColumn({ name: 'owner' })
  user: User;
}
