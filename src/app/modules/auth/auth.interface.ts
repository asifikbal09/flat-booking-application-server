export type ILoginPayload = {
  email: string;
  password: string;
};

export type IChangePasswordPayload = {
  currentPassword: string;
  newPassword: string;
}