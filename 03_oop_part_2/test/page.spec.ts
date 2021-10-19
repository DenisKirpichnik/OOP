import { Page } from '../src/page';

describe('Page', () => {
    it('toString should return correct value', () => {
        const page = new Page(3, 'with Text', 'glossy paper');

        expect(page.toString()).toEqual("here is page with Text #3 and it's material is glossy paper");
    });
});
