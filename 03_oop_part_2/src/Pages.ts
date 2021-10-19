import { Page } from './page';

export class Pages {
    pages: Page[] = [];
    length: number = 0;
    constructor(pages: Page[]) {
        this.pages = pages;
        this.length = pages.length;
    }
    addPages(page: Page) {
        this.pages.push(page);
        length++;
    }
}
