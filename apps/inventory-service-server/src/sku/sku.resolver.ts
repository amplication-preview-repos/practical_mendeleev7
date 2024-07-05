import * as graphql from "@nestjs/graphql";
import { SkuResolverBase } from "./base/sku.resolver.base";
import { Sku } from "./base/Sku";
import { SkuService } from "./sku.service";

@graphql.Resolver(() => Sku)
export class SkuResolver extends SkuResolverBase {
  constructor(protected readonly service: SkuService) {
    super(service);
  }
}
