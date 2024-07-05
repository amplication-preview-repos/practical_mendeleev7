import { Manufacture as TManufacture } from "../api/manufacture/Manufacture";

export const MANUFACTURE_TITLE_FIELD = "manufactureName";

export const ManufactureTitle = (record: TManufacture): string => {
  return record.manufactureName?.toString() || String(record.id);
};
