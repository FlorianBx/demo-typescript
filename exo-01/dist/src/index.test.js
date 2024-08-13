import { describe, it, expect } from 'vitest';
import { getUserInfo } from './index';
describe('getUserInfo', () => {
    it('should return the correct information message', () => {
        const user = {
            id: 1,
            name: 'Alice',
            email: 'w5fXs@example.com',
        };
        const result = getUserInfo(user);
        expect(result).toBe('User Alice has the email w5fXs@example.com.');
    });
    it('should not return the correct information message because of email is not valid', () => {
        const user = {
            id: 1,
            name: 'Alice',
            email: 'w5fXs.com',
        };
        const result = getUserInfo(user);
        expect(result).not.toBe('User Alice has the email w5fXs@example.com.');
    });
});
