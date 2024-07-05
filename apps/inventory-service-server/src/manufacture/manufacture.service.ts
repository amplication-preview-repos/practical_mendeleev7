import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ManufactureServiceBase } from "./base/manufacture.service.base";

@Injectable()
export class ManufactureService extends ManufactureServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
