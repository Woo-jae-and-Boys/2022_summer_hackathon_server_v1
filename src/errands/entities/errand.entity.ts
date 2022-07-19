import { User } from 'src/user/entities/user.entitiy';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Errand {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  title: string;

  @Column({ length: 2000 })
  content: string;

  @Column({ length: 2000 })
  ToDo: string;

  @Column()
  otherInfo: string;

  @ManyToOne(() => User, (user) => user.errands)
  @JoinColumn({ name: 'owner' })
  user: User;
}
