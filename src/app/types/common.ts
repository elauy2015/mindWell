export type UserRole = "user" | "assistant";
export interface Message {
    role: UserRole;
    content: string;
  }