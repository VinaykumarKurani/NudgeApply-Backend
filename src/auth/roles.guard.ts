import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector, private prisma: PrismaService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const required = this.reflector.get<string[]>('roles', context.getHandler());
    if (!required) return true; // no @Roles() decorator = no restriction

    const { user } = context.switchToHttp().getRequest();
    const dbUser = await this.prisma.user.findUnique({ where: { id: user.userId } });
    if (!dbUser) return false;

    return required.includes(dbUser.role) || required.includes(dbUser.tier);
  }
}