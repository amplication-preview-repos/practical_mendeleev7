import { Sku as TSku } from "../api/sku/Sku";

export const SKU_TITLE_FIELD = "partno";

export const SkuTitle = (record: TSku): string => {
  return record.partno?.toString() || String(record.id);
};
