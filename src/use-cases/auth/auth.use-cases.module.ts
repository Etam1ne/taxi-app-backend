import { Module } from "@nestjs/common";
import { UserUseCasesModule } from "../user/user-use-cases.module";
import { AuthUseCases } from "./auth.use-case";
import { JwtModule } from "@nestjs/jwt";
import { JwtStrategy, LocalStrategy } from "./strategies";

@Module({
    imports: [
        JwtModule.register({
            secret: process.env.JWT_SECRET,
            signOptions: { expiresIn: '24h' },
        }),
        UserUseCasesModule,
    ],
    providers: [AuthUseCases, LocalStrategy, JwtStrategy],
    exports: [AuthUseCases],
})
export class AuthUseCasesModule {}