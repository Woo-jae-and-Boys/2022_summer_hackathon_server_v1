import { Delivery } from 'src/delivery/entitiy/delivery.entitiy';
import { Errand } from 'src/errands/entities/errand.entity';
import { Project } from 'src/project/entitiy/project.entitiy';
import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryColumn()
  email: string;

  @Column()
  password: string;

  @Column()
  job: string;

  @Column()
  des: string;

  @Column()
  studentId: string;

  @OneToMany(() => Project, (project) => project.user)
  projects: Project[];

  @OneToMany(() => Errand, (errand) => errand.user)
  errands: Errand[];

  @OneToMany(() => Delivery, (delivery) => delivery.user)
  delivery: Delivery[];
}
