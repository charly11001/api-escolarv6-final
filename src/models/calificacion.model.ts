import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Calificacion extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  nomAlumno: string;

  @property({
    type: 'number',
    required: true,
  })
  numCalificacion: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Calificacion>) {
    super(data);
  }
}

export interface CalificacionRelations {
  // describe navigational properties here
}

export type CalificacionWithRelations = Calificacion & CalificacionRelations;
