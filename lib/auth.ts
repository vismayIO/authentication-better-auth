import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { nextCookies } from "better-auth/next-js";
import {
  admin,
  apiKey,
  bearer,
  jwt,
  multiSession,
  organization,
  phoneNumber,
  username,
} from "better-auth/plugins";
import { prisma } from "./prisma";

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  appName: "authentication-better-auth",
  plugins: [
    phoneNumber(),
    jwt(),
    multiSession(),
    bearer(),
    organization(),
    admin(),
    apiKey(),
    username(),
    nextCookies(),
  ],
});
