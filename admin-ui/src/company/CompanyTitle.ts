import { Company as TCompany } from "../api/company/Company";

export const COMPANY_TITLE_FIELD = "firstName";

export const CompanyTitle = (record: TCompany): string => {
  return record.firstName || record.id;
};
