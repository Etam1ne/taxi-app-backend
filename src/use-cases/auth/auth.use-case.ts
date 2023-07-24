import {
    Injectable,
    HttpStatus,
    HttpException,
    NotFoundException,
  } from '@nestjs/common';
  import { compare } from 'bcrypt';
  import { UserUseCases } from '../user/user.use-case';
  import { JwtService } from '@nestjs/jwt';
  import { CreateUserDto, SignInDto } from 'src/core/dtos';


@Injectable()
export class AuthUseCases {
  constructor(
    private readonly userUseCases: UserUseCases,
    private readonly jwtService: JwtService,
    ) {}

  async signUp(signUpDto: CreateUserDto) {
    const checkEmail = await this.userUseCases.getByEmail(signUpDto.email);
    if (checkEmail) {
      throw new HttpException(
        'User with this email already exists',
        HttpStatus.BAD_REQUEST,
      );
    }

    await this.userUseCases.create(signUpDto);

    return await this.signIn(signUpDto);
  }

  public async signIn(signInDto: SignInDto) {
    const user = await this.userUseCases.getByEmail(signInDto.email);

    const payload = {
      user: {
        sub: user._id,
        email: user.email,
      },
    };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  public async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.userUseCases.getByEmail(email);

    if (!user) throw new NotFoundException('There is no user with such email');

    const isPassword = await compare(pass, user.password);

    if (isPassword) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
}