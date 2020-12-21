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
import {Curso} from '../models';
import {CursoRepository} from '../repositories';

export class CursoController {
  constructor(
    @repository(CursoRepository)
    public cursoRepository : CursoRepository,
  ) {}

  @post('/cursos', {
    responses: {
      '200': {
        description: 'Curso model instance',
        content: {'application/json': {schema: getModelSchemaRef(Curso)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Curso, {
            title: 'NewCurso',
            exclude: ['id'],
          }),
        },
      },
    })
    curso: Omit<Curso, 'id'>,
  ): Promise<Curso> {
    return this.cursoRepository.create(curso);
  }

  @get('/cursos/count', {
    responses: {
      '200': {
        description: 'Curso model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Curso) where?: Where<Curso>,
  ): Promise<Count> {
    return this.cursoRepository.count(where);
  }

  @get('/cursos', {
    responses: {
      '200': {
        description: 'Array of Curso model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Curso, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Curso) filter?: Filter<Curso>,
  ): Promise<Curso[]> {
    return this.cursoRepository.find(filter);
  }

  @patch('/cursos', {
    responses: {
      '200': {
        description: 'Curso PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Curso, {partial: true}),
        },
      },
    })
    curso: Curso,
    @param.where(Curso) where?: Where<Curso>,
  ): Promise<Count> {
    return this.cursoRepository.updateAll(curso, where);
  }

  @get('/cursos/{id}', {
    responses: {
      '200': {
        description: 'Curso model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Curso, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Curso, {exclude: 'where'}) filter?: FilterExcludingWhere<Curso>
  ): Promise<Curso> {
    return this.cursoRepository.findById(id, filter);
  }

  @patch('/cursos/{id}', {
    responses: {
      '204': {
        description: 'Curso PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Curso, {partial: true}),
        },
      },
    })
    curso: Curso,
  ): Promise<void> {
    await this.cursoRepository.updateById(id, curso);
  }

  @put('/cursos/{id}', {
    responses: {
      '204': {
        description: 'Curso PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() curso: Curso,
  ): Promise<void> {
    await this.cursoRepository.replaceById(id, curso);
  }

  @del('/cursos/{id}', {
    responses: {
      '204': {
        description: 'Curso DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.cursoRepository.deleteById(id);
  }
}
