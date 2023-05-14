import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";
import { UpdateUpdateManyWithoutCompaniesInput } from "./UpdateUpdateManyWithoutCompaniesInput";

export type CompanyUpdateInput = {
  address?: AddressWhereUniqueInput | null;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  orders?: UpdateUpdateManyWithoutCompaniesInput;
  phone?: string | null;
};
