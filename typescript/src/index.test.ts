import { describe, expect, test } from '@jest/globals';
import { sayHelloWorld } from './index';
describe('index.ts', () => {
    test('should say hello world', () => {
        expect(sayHelloWorld()).toBe('Hello World');
    });

});