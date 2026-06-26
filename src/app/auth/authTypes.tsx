export interface User {
  id: number;
  name: string;
  role: "patient" | "nurse";
  department: string;
  dateOfBirth: string;
}

export type AuthStatus =
  | { logInStatus: "idle" }
  | { logInStatus: "loading" }
  | { logInStatus: "authenticated" }
  | { logInStatus: "error"; error: string };
