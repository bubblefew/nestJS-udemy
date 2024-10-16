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
  Headers,
  ParseIntPipe,
  DefaultValuePipe,
  Ip,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { GetUserParamDto } from './dtos/get-user-param.dto';
import { PatchUserDto } from './dtos/patch-user.dto';

@Controller('users')
export class UsersController {
  @Get(':id?')
  public getUsers(
    @Param() getUserParamDto: GetUserParamDto,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
  ) {
    console.log(getUserParamDto);
    return 'Get all users';
  }

  @Post()
  public createUsers(@Body() createUserDto: CreateUserDto) {
    console.log(createUserDto);
    return 'Create user';
  }

  @Patch()
  public patchUsers(@Body() patchUsersDto: PatchUserDto) {
    return patchUsersDto;
  }
}
