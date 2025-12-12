export type IUserPayload = {
  name: string;
  email: string;
  password: string;
  bio: string;
  profession: string;
  address: string;
  imageUrl?: string;
  role?: "USER" | "ADMIN";
};

