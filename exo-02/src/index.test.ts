import { describe, it, expect } from "vitest";
import { getActiveUsers } from "./index";
import { User } from "./types";

describe("getUserInfo", () => {
  it("should return the active users", () => {
    const users: User[] = [
      { id: 1, name: "Alice", email: "alice@active.com" },
      { id: 2, name: "Bob", email: "bob@example.com" },
      { id: 3, name: "Charlie", email: "charlie@active.com" },
    ];
    const result = getActiveUsers(users);

    expect(result).toEqual([
      { id: 1, name: "Alice", email: "alice@active.com" },
      { id: 3, name: "Charlie", email: "charlie@active.com" },
		]);
  });

  it("should not return the inactive users", () => {
    const users: User[] = [
      { id: 1, name: "Alice", email: "alice@gmail.com" },
      { id: 2, name: "Bob", email: "bob@example.com" },
      { id: 3, name: "Charlie", email: "charlie@noone.com" },
    ];
    const result = getActiveUsers(users);

    expect(result).toEqual([]);
  });
});
