import { User } from 'src/user/entities/user.entitiy';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Project {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  title: string;

  @Column({ length: 2000 })
  content: string;

  @Column({ length: 2000 })
  ToDo: string;

  @Column()
  teamInfo: string;

  @Column()
  platForm: string;

  @Column()
  otherInfo: string;

  @Column()
  img: string;

  @ManyToOne(() => User, (user) => user.projects)
  @JoinColumn({ name: 'owner' })
  user: User;
}
