import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";
import { UpdateCreateNestedManyWithoutCompaniesInput } from "./UpdateCreateNestedManyWithoutCompaniesInput";

export type CompanyCreateInput = {
  address?: AddressWhereUniqueInput | null;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  orders?: UpdateCreateNestedManyWithoutCompaniesInput;
  phone?: string | null;
};
