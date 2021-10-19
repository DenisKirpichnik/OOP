import { Item } from './Item';
import { Pages } from './pages';

export class Book extends Item {
    title: string;
    author: string;
    pages: Pages;
    constructor(title: string, author: string, pages: Pages) {
        super();
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    toString(): string {
        return `Book: ${this.title} by ${this.author} with number of pages: ${this.pages.length}`;
    }
    getTitle(): string {
        return this.title;
    }
    getAuthor(): string {
        return this.author;
    }
    setTitle(title: string): void {
        this.title = title;
    }
    setAuthor(author: string): void {
        this.author = author;
    }
}
