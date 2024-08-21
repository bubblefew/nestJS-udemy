import {
  Controller,
  Get,
  Post,
  Patch,
  Put,
  Delete,
  Query,
  Param,
  Body,
  ParseIntPipe,
  DefaultValuePipe,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get(':id/:optional?')
  public getUsers(
    @Param('id', ParseIntPipe) id: number | undefined,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
  ) {
    return 'Get all users';
  }

  @Post()
  public createUser(@Body() request: any): string {
    console.log(request);
    return 'Create a user';
  }
}
