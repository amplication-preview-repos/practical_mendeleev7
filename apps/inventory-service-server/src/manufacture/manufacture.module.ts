import { Module } from "@nestjs/common";
import { ManufactureModuleBase } from "./base/manufacture.module.base";
import { ManufactureService } from "./manufacture.service";
import { ManufactureController } from "./manufacture.controller";
import { ManufactureResolver } from "./manufacture.resolver";

@Module({
  imports: [ManufactureModuleBase],
  controllers: [ManufactureController],
  providers: [ManufactureService, ManufactureResolver],
  exports: [ManufactureService],
})
export class ManufactureModule {}
