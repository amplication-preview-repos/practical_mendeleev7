import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const ManufactureEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="manufacture_code" source="manufactureCode" />
        <NumberInput step={1} label="manufacture_id" source="manufactureId" />
        <TextInput label="manufacture_name" source="manufactureName" />
      </SimpleForm>
    </Edit>
  );
};
