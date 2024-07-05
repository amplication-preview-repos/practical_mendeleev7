import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ManufactureService } from "./manufacture.service";
import { ManufactureControllerBase } from "./base/manufacture.controller.base";

@swagger.ApiTags("manufactures")
@common.Controller("manufactures")
export class ManufactureController extends ManufactureControllerBase {
  constructor(protected readonly service: ManufactureService) {
    super(service);
  }
}
