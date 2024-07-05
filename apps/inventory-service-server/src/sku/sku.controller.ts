import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SkuService } from "./sku.service";
import { SkuControllerBase } from "./base/sku.controller.base";

@swagger.ApiTags("skus")
@common.Controller("skus")
export class SkuController extends SkuControllerBase {
  constructor(protected readonly service: SkuService) {
    super(service);
  }
}
