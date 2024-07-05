import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const SkuEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="partno" source="partno" />
        <NumberInput step={1} label="sku_id" source="skuId" />
        <TextInput label="sku_item_id" source="skuItemId" />
        <TextInput label="sku_manu_id" source="skuManuId" />
      </SimpleForm>
    </Edit>
  );
};
