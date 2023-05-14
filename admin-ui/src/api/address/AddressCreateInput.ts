import { CompanyCreateNestedManyWithoutAddressesInput } from "./CompanyCreateNestedManyWithoutAddressesInput";

export type AddressCreateInput = {
  address_1?: string | null;
  address_2?: string | null;
  city?: string | null;
  customers?: CompanyCreateNestedManyWithoutAddressesInput;
  state?: string | null;
  zip?: number | null;
};
