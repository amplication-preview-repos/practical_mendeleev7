import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const PartEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="part_code" source="partCode" />
        <NumberInput step={1} label="part_id" source="partId" />
        <TextInput label="part_name" source="partName" />
      </SimpleForm>
    </Edit>
  );
};
