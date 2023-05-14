import { Address } from "../address/Address";
import { Update } from "../update/Update";

export type Company = {
  address?: Address | null;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  orders?: Array<Update>;
  phone: string | null;
  updatedAt: Date;
};
