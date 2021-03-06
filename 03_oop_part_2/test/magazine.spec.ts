import { Pages } from '../src/pages';
import { Page } from '../src/page';
import { Magazine } from '../src/magazine';

describe('Magazine', () => {
    it('toString should return correct value', () => {
        let counter = 1;
        const magazine = new Magazine(
            'G.Q',
            new Pages([new Page(1, 'with Article', 'glossy paper'), new Page(2, 'with Article', 'glossy paper')])
        );

        for (const page of magazine) {
            expect(page.toString(magazine)).toEqual(
                `Magazine: G.Q with number of pages: 2, here is page with article #${counter} and it\'s material is glossy paper`
            );
            counter++;
        }
    });
});
