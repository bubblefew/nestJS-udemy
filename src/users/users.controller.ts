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
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get(':id/:optional?')
  public getUsers(@Param() params: any, @Query() query: any) {
    console.log(params);
    console.log(query);
    return 'Get all users';
  }

  @Post()
  public createUser(@Body() request: any): string {
    console.log(request);
    return 'Create a user';
  }
}
