import { Item as TItem } from "../api/item/Item";

export const ITEM_TITLE_FIELD = "itemCode";

export const ItemTitle = (record: TItem): string => {
  return record.itemCode?.toString() || String(record.id);
};
