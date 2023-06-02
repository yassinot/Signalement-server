import { Injectable } from '@nestjs/common';
import { User } from '../models/user.entity';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  private readonly users: User[] = [];

  constructor(private readonly jwtService: JwtService) {}

  signUp(email: string, password: string): User {
    const id = this.users.length + 1;
    const newUser = new User(id, email, password);
    this.users.push(newUser);
    return newUser;
  }

  signIn(email: string, password: string): string {
    const user = this.users.find((u) => u.email === email && u.password === password);
    if (!user) {
      throw new Error('Invalid email or password');
    }
    const payload = { email: user.email, sub: user.id };
    return this.jwtService.sign(payload);
  }

  getUserByEmail(email: string): User {
    return this.users.find((u) => u.email === email);
  }
}
