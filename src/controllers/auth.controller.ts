import { Controller, Post, Body, UseGuards } from "@nestjs/common";
import { CreateUserDto, SignInDto } from "src/core/dtos";
import { AuthUseCases } from "src/use-cases/auth/auth.use-case";
import { LocalAuthGuard } from "src/core/guards/local-auth.guard";
import { ApiTags } from "@nestjs/swagger";

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
    constructor(private readonly authUseCases: AuthUseCases) {}

    @UseGuards(LocalAuthGuard)
    @Post('signin')
    public signIn(@Body() signInDto: SignInDto) {
        return this.authUseCases.signIn(signInDto);
    }

    @Post('signup')
    public signUp(@Body() createUserDto: CreateUserDto) {
        return this.authUseCases.signUp(createUserDto);
    }
}