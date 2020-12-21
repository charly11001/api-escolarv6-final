import {DefaultCrudRepository} from '@loopback/repository';
import {Carrera, CarreraRelations} from '../models';
import {DbLocalDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class CarreraRepository extends DefaultCrudRepository<
  Carrera,
  typeof Carrera.prototype.id,
  CarreraRelations
> {
  constructor(
    @inject('datasources.DBLocal') dataSource: DbLocalDataSource,
  ) {
    super(Carrera, dataSource);
  }
}
