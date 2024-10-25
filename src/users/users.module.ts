import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './providers/users.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService], // 👈 Add the UsersService to the providers array
  exports: [UsersService], // 👈 Add the UsersService to the exports array
})
export class UsersModule {}
