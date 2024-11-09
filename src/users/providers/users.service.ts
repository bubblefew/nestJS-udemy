import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { GetUserParamDto } from './../dtos/get-user-param.dto';
import { AuthService } from './../../auth/providers/auth.service';
/**
 * Class to connect to users table and perform CRUD operations
 */
@Injectable()
export class UsersService {
  constructor(
    //   Inject Auth Service
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,
  ) {}

  public findAll(
    getUserParamDto: GetUserParamDto,
    limit: number,
    page: number,
  ) {
    const isAuth = this.authService.isAuth();
    console.log(isAuth);
    // Auth Service
    return [
      {
        firstName: 'John',
        email: 'bubble.few@gmail.com',
      },
      {
        firstName: 'Doe',
        email: 'sajilasak@chg.co.th',
      },
    ];
  }
  /**
   * Find user by id
   */
  public findOneById(id: String) {
    return {
      id: 123,
      firstName: 'John',
      email: 'sajilasak@chg.co.th',
    };
  }
}
