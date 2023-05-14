import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const EventList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Events"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="Added" label="Created At" />
        <TextField label="Description" source="Description" />
        <TextField label="ID" source="id" />
        <TextField label="Location" source="Location" />
        <TextField label="Name" source="name" />
        <DateField source="Updated" label="Updated At" />
      </Datagrid>
    </List>
  );
};
