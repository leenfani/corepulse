export type AuthStatus =
  | { logInStatus: "idle" }
  | { logInStatus: "loading" }
  | { logInStatus: "authenticated" }
  | { logInStatus: "error"; error: string };
