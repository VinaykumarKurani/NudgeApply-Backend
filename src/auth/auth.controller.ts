import { Controller, Get, Post, UseGuards, Req } from '@nestjs/common';
import { JwtAuthGuard } from './jwt-auth.guard';
import { PrismaService } from '../prisma/prisma.service'

@Controller('auth')
export class AuthController {
  constructor(private prisma: PrismaService) { }

  @UseGuards(JwtAuthGuard)
  @Post('sync')
  async sync(@Req() req) {
    const { userId, email } = req.user;
    return this.prisma.user.upsert({
      where: { id: userId },
      update: {},
      create: { id: userId, email },
    });
  }

  @UseGuards(JwtAuthGuard)
  @Get('me')
  getProfile(@Req() req) {
    return req.user;
  }
}