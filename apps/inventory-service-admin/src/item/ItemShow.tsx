import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const ItemShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="item_code" source="itemCode" />
        <TextField label="item_id" source="itemId" />
        <TextField label="itemModel" source="itemModel" />
        <TextField label="item_model_id" source="itemModelId" />
        <TextField label="itemPart" source="itemPart" />
        <TextField label="item_part_id" source="itemPartId" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
