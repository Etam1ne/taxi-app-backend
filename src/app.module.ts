import { Module } from '@nestjs/common';
import { DataServicesModule } from './services/data-services/data-services.module';
import { UserUseCasesModule } from './use-cases/user/user-use-cases.module';
import { AuthController, UserController } from './controllers';
import { AuthUseCasesModule } from './use-cases/auth/auth.use-cases.module';

@Module({
  imports: [DataServicesModule, UserUseCasesModule, AuthUseCasesModule],
  controllers: [UserController, AuthController],
  providers: [],
})
export class AppModule {}
