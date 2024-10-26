import { Module, forwardRef } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './providers/users.service';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [UsersController],
  providers: [UsersService], // 👈 Add the UsersService to the providers array
  imports: [forwardRef(() => AuthModule)],
  exports: [UsersService], // 👈 Add the UsersService to the exports array
})
export class UsersModule {}
