import bcrypt from "bcrypt";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { authConfig } from "./auth.config";
import { User } from "./lib/model/userModel";
import { connectToDB } from "./lib/utlis";

const login = async (credintials) => {
  try {
    await connectToDB();
    const user = (await User.findOne({ email: credintials.email })) as UserType;
    const isPasswordOk = bcrypt.compare(credintials.password, user?.password);
    if (!user || !isPasswordOk) throw new Error("Wrong Email or Password");

    return user;
  } catch (error) {
    throw error;
  }
};

export const { signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    CredentialsProvider({
      credentials: {
        email: { label: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req): Promise<any> {
        try {
          const user = await login(credentials);
          return user;
        } catch (error) {
          throw error;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.username = user.username;
        token.avatar = user.avatar;
        token.role = user.role;
      }

      return token;
    },

    async session({ session, token }) {
      if (token) {
        session.user = token;
      }
      return session;
    },
  },
});
