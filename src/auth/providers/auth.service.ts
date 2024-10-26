import { Injectable, forwardRef, Inject } from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';

@Injectable()
export class AuthService {
  constructor(
    //   Inject User Service

    @Inject(forwardRef(() => UsersService))
    private readonly userService: UsersService,
  ) {}
  public login(email: string, password: string, id: string) {
    const user = this.userService.findOneById('1234');
    console.log(user);
    return 'Token+RRRREER';
    // token
  }

  public isAuth() {
    return true;
  }
}
