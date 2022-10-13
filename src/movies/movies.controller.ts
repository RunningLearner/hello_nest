import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'this will return all movies.';
  }
  @Get('/:id')
  getOne(@Param('id') id: string) {
    return `this wil return one movie id: ${id}`;
  }
  @Post()
  create() {
    return `this will creat movie`;
  }
  @Delete('/:id')
  remove(@Param(':id') id: string) {
    return `this will remove a movie id:${id}`;
  }
  @Patch('/:id')
  update(@Param('/:id') id: string) {
    return `this will update a movie id:${id}`;
  }
}
