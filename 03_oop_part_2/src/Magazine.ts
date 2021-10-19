import { Item } from './Item';
import { Pages } from './pages';

export class Magazine extends Item {
    title: string;
    pages: Pages;
    constructor(title: string, pages: Pages) {
        super();
        this.title = title;
        this.pages = pages;
    }

    toString(): string {
        return `Magazine: ${this.title}  with number of pages: ${this.pages.length}`;
    }
    getTitle(): string {
        return this.title;
    }

    setTitle(title: string): void {
        this.title = title;
    }
}
