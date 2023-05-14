import { Company } from "../company/Company";

export type Address = {
  address_1: string | null;
  address_2: string | null;
  city: string | null;
  createdAt: Date;
  customers?: Array<Company>;
  id: string;
  state: string | null;
  updatedAt: Date;
  zip: number | null;
};
