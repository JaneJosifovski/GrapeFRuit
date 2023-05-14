import { Company } from "../company/Company";
import { Event } from "../event/Event";

export type Update = {
  Company?: Array<Company>;
  createdAt: Date;
  Description: string | null;
  id: string;
  product?: Array<Event>;
  quantity: number | null;
  totalPrice: number | null;
  updatedAt: Date;
};
