import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { GetUserParamDto } from './../dtos/get-user-param.dto';
import { AuthService } from './../../auth/providers/auth.service';
import { In, Repository } from 'typeorm';
import { User } from '../user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from '../dtos/create-user.dto';
/**
 * Class to connect to users table and perform CRUD operations
 */
@Injectable()
export class UsersService {
  constructor(
    //   Inject Auth Service
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,
    // Inject User Repository
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  public async create(createUserDto: CreateUserDto) {
    const existingUser = await this.usersRepository.findOne({
      where: { email: createUserDto.email },
    });

    if (existingUser) {
      return {
        message: 'User already exists',
      };
    }

    let newUser = this.usersRepository.create(createUserDto);
    newUser = await this.usersRepository.save(newUser);
    return newUser;
  }

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
