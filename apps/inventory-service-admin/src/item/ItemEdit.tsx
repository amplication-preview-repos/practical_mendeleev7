import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const ItemEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="item_code" source="itemCode" />
        <NumberInput step={1} label="item_id" source="itemId" />
        <TextInput label="itemModel" source="itemModel" />
        <TextInput label="item_model_id" source="itemModelId" />
        <TextInput label="itemPart" source="itemPart" />
        <TextInput label="item_part_id" source="itemPartId" />
      </SimpleForm>
    </Edit>
  );
};
