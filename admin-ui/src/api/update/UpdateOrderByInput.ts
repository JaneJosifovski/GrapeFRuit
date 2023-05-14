import { SortOrder } from "../../util/SortOrder";

export type UpdateOrderByInput = {
  createdAt?: SortOrder;
  Description?: SortOrder;
  id?: SortOrder;
  quantity?: SortOrder;
  totalPrice?: SortOrder;
  updatedAt?: SortOrder;
};
