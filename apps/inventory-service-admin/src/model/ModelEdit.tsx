import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const ModelEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="model_code" source="modelCode" />
        <NumberInput step={1} label="model_id" source="modelId" />
        <TextInput label="model_name" source="modelName" />
      </SimpleForm>
    </Edit>
  );
};
