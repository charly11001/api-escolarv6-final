import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Calificacion} from '../models';
import {CalificacionRepository} from '../repositories';

export class CalificacionController {
  constructor(
    @repository(CalificacionRepository)
    public calificacionRepository : CalificacionRepository,
  ) {}

  @post('/calificacions', {
    responses: {
      '200': {
        description: 'Calificacion model instance',
        content: {'application/json': {schema: getModelSchemaRef(Calificacion)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Calificacion, {
            title: 'NewCalificacion',
            exclude: ['id'],
          }),
        },
      },
    })
    calificacion: Omit<Calificacion, 'id'>,
  ): Promise<Calificacion> {
    return this.calificacionRepository.create(calificacion);
  }

  @get('/calificacions/count', {
    responses: {
      '200': {
        description: 'Calificacion model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Calificacion) where?: Where<Calificacion>,
  ): Promise<Count> {
    return this.calificacionRepository.count(where);
  }

  @get('/calificacions', {
    responses: {
      '200': {
        description: 'Array of Calificacion model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Calificacion, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Calificacion) filter?: Filter<Calificacion>,
  ): Promise<Calificacion[]> {
    return this.calificacionRepository.find(filter);
  }

  @patch('/calificacions', {
    responses: {
      '200': {
        description: 'Calificacion PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Calificacion, {partial: true}),
        },
      },
    })
    calificacion: Calificacion,
    @param.where(Calificacion) where?: Where<Calificacion>,
  ): Promise<Count> {
    return this.calificacionRepository.updateAll(calificacion, where);
  }

  @get('/calificacions/{id}', {
    responses: {
      '200': {
        description: 'Calificacion model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Calificacion, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Calificacion, {exclude: 'where'}) filter?: FilterExcludingWhere<Calificacion>
  ): Promise<Calificacion> {
    return this.calificacionRepository.findById(id, filter);
  }

  @patch('/calificacions/{id}', {
    responses: {
      '204': {
        description: 'Calificacion PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Calificacion, {partial: true}),
        },
      },
    })
    calificacion: Calificacion,
  ): Promise<void> {
    await this.calificacionRepository.updateById(id, calificacion);
  }

  @put('/calificacions/{id}', {
    responses: {
      '204': {
        description: 'Calificacion PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() calificacion: Calificacion,
  ): Promise<void> {
    await this.calificacionRepository.replaceById(id, calificacion);
  }

  @del('/calificacions/{id}', {
    responses: {
      '204': {
        description: 'Calificacion DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.calificacionRepository.deleteById(id);
  }
}
