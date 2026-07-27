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
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    validationSchema: Joi.object({
      DATABASE_URL: Joi.string().required(),
      DIRECT_URL: Joi.string().required(),
    }),
  }), UsersModule, ResumesModule, AuthModule, QuotaModule, GenerationModule, JobsModule, PaymentsModule, AdminModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
