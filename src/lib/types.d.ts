type UserType = {
  _id: string;
  username: string;
  email: string;
  password: string;
  isActive: boolean;
  role: string;
  avatar: string;
  phone?: string;
  address?: string;
  createdAt: Date;
};
type ProductType = {
  _id: string;
  title: string;
  desc: string;
  category: string;
  color?: string;
  size?: string;
  media: [string];
  price: number;
  stock: number;
  createdAt: Date;
};
