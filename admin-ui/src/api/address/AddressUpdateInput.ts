import { CompanyUpdateManyWithoutAddressesInput } from "./CompanyUpdateManyWithoutAddressesInput";

export type AddressUpdateInput = {
  address_1?: string | null;
  address_2?: string | null;
  city?: string | null;
  customers?: CompanyUpdateManyWithoutAddressesInput;
  state?: string | null;
  zip?: number | null;
};
