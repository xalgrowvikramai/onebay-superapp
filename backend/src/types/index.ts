export type User = {
  id: string;
  username: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
};

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  createdAt: Date;
  updatedAt: Date;
};

export type Admin = {
  id: string;
  username: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
};

export type AuthResponse = {
  token: string;
  user: User;
};

export type ProductResponse = {
  products: Product[];
  total: number;
};

export type ErrorResponse = {
  message: string;
};