import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const ItemCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="item_code" source="itemCode" />
        <NumberInput step={1} label="item_id" source="itemId" />
        <TextInput label="itemModel" source="itemModel" />
        <TextInput label="item_model_id" source="itemModelId" />
        <TextInput label="itemPart" source="itemPart" />
        <TextInput label="item_part_id" source="itemPartId" />
      </SimpleForm>
    </Create>
  );
};
