import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'this will return all movies.';
  }

  @Get('search')
  search(@Query('year') searchingYear: string) {
    return `we are searching for a movie after: ${searchingYear}`;
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return `this wil return one movie id: ${id}`;
  }

  @Post()
  create(@Body() movieData) {
    console.log(movieData);
    return movieData;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `this will remove a movie id:${id}`;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateData) {
    return {
      updateMovieId: id,
      ...updateData,
    };
  }
}
