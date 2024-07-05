import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const SkuCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="partno" source="partno" />
        <NumberInput step={1} label="sku_id" source="skuId" />
        <TextInput label="sku_item_id" source="skuItemId" />
        <TextInput label="sku_manu_id" source="skuManuId" />
      </SimpleForm>
    </Create>
  );
};
