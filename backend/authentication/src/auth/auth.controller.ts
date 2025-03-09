import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { logindto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  
  @Post('login')
  
  login(@Body() { email, password }: logindto) {
    return this.authService.login(email, password);
  }
}
