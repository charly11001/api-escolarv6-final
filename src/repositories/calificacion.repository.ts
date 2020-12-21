import {DefaultCrudRepository} from '@loopback/repository';
import {Calificacion, CalificacionRelations} from '../models';
import {DbLocalDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class CalificacionRepository extends DefaultCrudRepository<
  Calificacion,
  typeof Calificacion.prototype.id,
  CalificacionRelations
> {
  constructor(
    @inject('datasources.DBLocal') dataSource: DbLocalDataSource,
  ) {
    super(Calificacion, dataSource);
  }
}
