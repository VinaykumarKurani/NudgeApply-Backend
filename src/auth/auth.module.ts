import { Module } from '@nestjs/common';
import { JwtStrategy } from './jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtAuthGuard } from './jwt-auth.guard';
import { AuthController } from './auth.controller';

@Module({
    imports: [PassportModule],
    providers: [JwtStrategy, JwtAuthGuard],
    exports: [PassportModule, JwtAuthGuard],
    controllers: [AuthController],
})
export class AuthModule {}
