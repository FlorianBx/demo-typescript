import { describe, it, expect, vi } from "vitest";
import { fetchUserData } from "./index";

describe("fetchUserData", () => {
  it("should fetch user data and contain specific properties", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        json: vi.fn().mockResolvedValue({
          id: 1,
          name: "Leanne Graham",
          username: "Bret",
          email: "Sincere@april.biz",
          address: {
            street: "Kulas Light",
            suite: "Apt. 556",
            city: "Gwenborough",
            zipcode: "92998-3874",
            geo: {
              lat: "-37.3159",
              lng: "81.1496",
            },
          },
          phone: "1-770-736-8031 x56442",
          website: "hildegard.org",
          company: {
            name: "Romaguera-Crona",
            catchPhrase: "Multi-layered client-server neural-net",
            bs: "harness real-time e-markets",
          },
        }),
      }),
    );

    const result = await fetchUserData();

    expect(result).toEqual(
      expect.objectContaining({
        id: 1,
        name: "Leanne Graham",
        email: "Sincere@april.biz",
      }),
    );

    vi.restoreAllMocks();
  });
});
