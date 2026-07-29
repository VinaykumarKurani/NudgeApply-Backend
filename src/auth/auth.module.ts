import { Module } from '@nestjs/common';
import { JwtStrategy } from './jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtAuthGuard } from './jwt-auth.guard';
import { AuthController } from './auth.controller';
import { RolesGuard } from './roles.guard';

@Module({
    imports: [PassportModule],
    providers: [JwtStrategy, JwtAuthGuard, RolesGuard],
    exports: [PassportModule, JwtAuthGuard, RolesGuard],
    controllers: [AuthController],
})
export class AuthModule {}
