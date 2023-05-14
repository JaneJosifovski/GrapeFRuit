import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { UpdateTitle } from "../update/UpdateTitle";

export const EventEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="Created At" source="Added" disabled />
        <TextInput label="Description" multiline source="Description" />
        <TextInput label="Location" source="Location" />
        <TextInput label="Name" source="name" />
        <ReferenceArrayInput
          source="Orders"
          reference="Update"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={UpdateTitle} />
        </ReferenceArrayInput>
        <DateTimeInput label="Updated At" source="Updated" disabled />
      </SimpleForm>
    </Edit>
  );
};
