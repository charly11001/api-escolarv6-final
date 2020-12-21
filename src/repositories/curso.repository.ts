import {DefaultCrudRepository} from '@loopback/repository';
import {Curso, CursoRelations} from '../models';
import {DbLocalDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class CursoRepository extends DefaultCrudRepository<
  Curso,
  typeof Curso.prototype.id,
  CursoRelations
> {
  constructor(
    @inject('datasources.DBLocal') dataSource: DbLocalDataSource,
  ) {
    super(Curso, dataSource);
  }
}
