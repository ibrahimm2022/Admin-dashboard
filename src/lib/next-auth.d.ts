import "next-auth";

declare module "next-auth" {
  interface User {
    username?: string;
    email?: string;
    role?: string;
    avatar?: string;
    phone?: string;
    address?: string;
  }
  interface Session {
    user: {
      email?: string;
      username?: string;
      avatar?: string;
      role?: string;
    };
  }
}
// declare module "next-auth/session" {}
