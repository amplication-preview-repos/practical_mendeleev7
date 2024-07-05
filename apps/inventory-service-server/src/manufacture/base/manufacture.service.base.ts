/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Manufacture as PrismaManufacture } from "@prisma/client";

export class ManufactureServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.ManufactureCountArgs, "select">
  ): Promise<number> {
    return this.prisma.manufacture.count(args);
  }

  async manufactures(
    args: Prisma.ManufactureFindManyArgs
  ): Promise<PrismaManufacture[]> {
    return this.prisma.manufacture.findMany(args);
  }
  async manufacture(
    args: Prisma.ManufactureFindUniqueArgs
  ): Promise<PrismaManufacture | null> {
    return this.prisma.manufacture.findUnique(args);
  }
  async createManufacture(
    args: Prisma.ManufactureCreateArgs
  ): Promise<PrismaManufacture> {
    return this.prisma.manufacture.create(args);
  }
  async updateManufacture(
    args: Prisma.ManufactureUpdateArgs
  ): Promise<PrismaManufacture> {
    return this.prisma.manufacture.update(args);
  }
  async deleteManufacture(
    args: Prisma.ManufactureDeleteArgs
  ): Promise<PrismaManufacture> {
    return this.prisma.manufacture.delete(args);
  }
}
