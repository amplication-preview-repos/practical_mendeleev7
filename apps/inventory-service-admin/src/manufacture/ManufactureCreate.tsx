import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const ManufactureCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="manufacture_code" source="manufactureCode" />
        <NumberInput step={1} label="manufacture_id" source="manufactureId" />
        <TextInput label="manufacture_name" source="manufactureName" />
      </SimpleForm>
    </Create>
  );
};
