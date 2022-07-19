import { EntityRepository, Repository } from 'typeorm';
import { Project } from '../entitiy/project.entitiy';

@EntityRepository(Project)
export class ProjectRepository extends Repository<Project> {}
