import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Curso extends Entity {
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
  nomCurso: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Curso>) {
    super(data);
  }
}

export interface CursoRelations {
  // describe navigational properties here
}

export type CursoWithRelations = Curso & CursoRelations;
