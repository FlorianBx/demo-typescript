import { User } from "./types";

export function getActiveUsers(users: User[]): User[] {
  return users.filter((user) => user.email.includes("@active.com"));
}

const users: User[] = [
  { id: 1, name: "Alice", email: "alice@active.com" },
  { id: 2, name: "Bob", email: "bob@example.com" },
  { id: 3, name: "Charlie", email: "charlie@active.com" }
];

console.log(getActiveUsers(users));
