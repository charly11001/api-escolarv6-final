import {DefaultCrudRepository} from '@loopback/repository';
import {Docente, DocenteRelations} from '../models';
import {DbLocalDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class DocenteRepository extends DefaultCrudRepository<
  Docente,
  typeof Docente.prototype.id,
  DocenteRelations
> {
  constructor(
    @inject('datasources.DBLocal') dataSource: DbLocalDataSource,
  ) {
    super(Docente, dataSource);
  }
}
