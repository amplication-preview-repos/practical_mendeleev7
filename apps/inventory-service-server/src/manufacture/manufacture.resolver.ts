import * as graphql from "@nestjs/graphql";
import { ManufactureResolverBase } from "./base/manufacture.resolver.base";
import { Manufacture } from "./base/Manufacture";
import { ManufactureService } from "./manufacture.service";

@graphql.Resolver(() => Manufacture)
export class ManufactureResolver extends ManufactureResolverBase {
  constructor(protected readonly service: ManufactureService) {
    super(service);
  }
}
