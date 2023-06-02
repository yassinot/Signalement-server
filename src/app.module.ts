import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { SignalementModule } from './signalement/signalement.module';

@Module({
  imports: [AuthModule, SignalementModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
