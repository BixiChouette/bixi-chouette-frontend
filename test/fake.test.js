const { fakeMethod } = require('../src/utils/fake');

describe('Fake Tests', () => {
    describe('fakeMethod()', () => {
        it('should return true', () => {
            expect(fakeMethod()).toBe(true);
        });
    });
});