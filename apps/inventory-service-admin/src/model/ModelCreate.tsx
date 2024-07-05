import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const ModelCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="model_code" source="modelCode" />
        <NumberInput step={1} label="model_id" source="modelId" />
        <TextInput label="model_name" source="modelName" />
      </SimpleForm>
    </Create>
  );
};
