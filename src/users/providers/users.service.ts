import { Injectable } from '@nestjs/common';
import { GetUserParamDto } from './../dtos/get-user-param.dto';

@Injectable()
export class UsersService {
  public findAll(
    getUserParamDto: GetUserParamDto,
    limit: number,
    page: number,
  ) {
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

  public findOneById(id: String) {
    return {
      id: 123,
      firstName: 'John',
      email: 'sajilasak@chg.co.th',
    };
  }
}
