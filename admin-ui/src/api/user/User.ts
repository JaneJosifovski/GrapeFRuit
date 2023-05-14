export type User = {
  createdAt: Date;
  ddd: string | null;
  firstName: string;
  id: string;
  lastName: string | null;
  phoneNumber: number | null;
  roles: Array<string>;
  username: string;
};
