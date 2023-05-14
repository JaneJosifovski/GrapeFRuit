export type UserUpdateInput = {
  ddd?: string | null;
  firstName?: string;
  lastName?: string | null;
  password?: string;
  phoneNumber?: number | null;
  roles?: Array<string>;
  username?: string;
};
