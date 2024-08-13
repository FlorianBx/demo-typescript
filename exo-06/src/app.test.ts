import { describe, it, expect, vi, beforeEach } from "vitest";
import { getUsers } from "./userService.js";

describe("fetchUserData", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it("should fetch user data and contain specific properties", async () => {
    const mockResponse = [
      { id: 1, name: "Leanne Graham", email: "Sincere@april.biz" },
      { id: 2, name: "Ervin Howell", email: "Sincere@april.biz" },
      { id: 3, name: "Clementine Bauch", email: "Sincere@april.biz" },
    ];

    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
				ok: true,
        json: vi.fn().mockResolvedValue(mockResponse),
      }),
    );

    const result = await getUsers();

    expect(result[1]).toEqual(
      expect.objectContaining({
        id: 2,
        name: "Ervin Howell",
        email: "Sincere@april.biz",
      }),
    );
  });

  it("should return an empty array if the fetch fails", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockRejectedValue(new Error("Network Error")),
    );
    const result = await getUsers();

    expect(result).toEqual([]);
  });

  it("should return the length of the array returned by the fetch", async () => {
    const mockResponse = [
      { id: 1, name: "Leanne Graham", email: "Sincere@april.biz" },
      { id: 2, name: "Ervin Howell", email: "Sincere@april.biz" },
      { id: 3, name: "Clementine Bauch", email: "Sincere@april.biz" },
    ];

    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
				ok: true,
        json: vi.fn().mockResolvedValue(mockResponse),
      }),
    );
    const result = await getUsers();

    expect(result.length).toEqual(3);
  });
});
