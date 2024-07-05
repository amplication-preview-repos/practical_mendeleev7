import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const PartCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="part_code" source="partCode" />
        <NumberInput step={1} label="part_id" source="partId" />
        <TextInput label="part_name" source="partName" />
      </SimpleForm>
    </Create>
  );
};
