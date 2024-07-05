import { ManufactureWhereInput } from "./ManufactureWhereInput";
import { ManufactureOrderByInput } from "./ManufactureOrderByInput";

export type ManufactureFindManyArgs = {
  where?: ManufactureWhereInput;
  orderBy?: Array<ManufactureOrderByInput>;
  skip?: number;
  take?: number;
};
