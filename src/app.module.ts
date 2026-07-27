import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ResumesModule } from './resumes/resumes.module';
import { AuthModule } from './auth/auth.module';
import { QuotaModule } from './quota/quota.module';
import { GenerationModule } from './generation/generation.module';
import { JobsModule } from './jobs/jobs.module';
import { PaymentsModule } from './payments/payments.module';
import { AdminModule } from './admin/admin.module';

@Module({
  imports: [UsersModule, ResumesModule, AuthModule, QuotaModule, GenerationModule, JobsModule, PaymentsModule, AdminModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
