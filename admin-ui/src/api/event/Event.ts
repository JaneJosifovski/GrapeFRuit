import { Update } from "../update/Update";

export type Event = {
  Added: Date;
  Description: string | null;
  id: string;
  Location: string | null;
  name: string;
  Orders?: Array<Update>;
  Updated: Date;
};
