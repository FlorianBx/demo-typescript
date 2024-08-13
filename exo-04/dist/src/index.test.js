var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { describe, it, expect, vi } from "vitest";
import { fetchUserData } from "./index";
describe("fetchUserData", () => {
    it("should fetch user data and contain specific properties", () => __awaiter(void 0, void 0, void 0, function* () {
        vi.stubGlobal("fetch", vi.fn().mockResolvedValue({
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
        }));
        const result = yield fetchUserData();
        expect(result).toEqual(expect.objectContaining({
            id: 1,
            name: "Leanne Graham",
            email: "Sincere@april.biz",
        }));
        vi.restoreAllMocks();
    }));
});
