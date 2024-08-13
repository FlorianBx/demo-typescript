import { describe, it, expect } from 'vitest';
import { getUserGreeting } from './index';
describe('getUserGreeting', () => {
    it('should return the correct greeting message', () => {
        const result = getUserGreeting('Alice', 30);
        expect(result).toBe('Hello Alice, you are 30 years old.');
    });
});
