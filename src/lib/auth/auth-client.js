import { createAuthClient } from "better-auth/react";
export const authClient = createAuthClient({
  baseURL: process.env.BETTER_AUTH_URL,
});

export const signInGoogle = async () => {
  await authClient.signIn.social({
    provider: "google",
  });
};

export const { signIn, signUp, useSession } = createAuthClient();
