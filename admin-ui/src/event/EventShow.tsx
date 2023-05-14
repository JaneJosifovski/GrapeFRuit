import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const EventShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="Added" label="Created At" />
        <TextField label="Description" source="Description" />
        <TextField label="ID" source="id" />
        <TextField label="Location" source="Location" />
        <TextField label="Name" source="name" />
        <DateField source="Updated" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
