import { Controller } from '@nestjs/common';
import { AuthService } from './providers/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  public login(email: string, password: string) {
    //   check if user exists
    // login user
    //token
  }
}
