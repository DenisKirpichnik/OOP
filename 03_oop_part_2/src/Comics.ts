import { Item } from './Item';
import { Pages } from './pages';

export class Comics extends Item {
    title: string;
    author: string;
    artist: string;
    pages: Pages;
    constructor(title: string, author: string, artist: string, pages: Pages) {
        super();
        this.title = title;
        this.author = author;
        this.artist = artist;
        this.pages = pages;
    }

    toString(): string {
        return `Comics: ${this.title} by ${this.author},the artist is some author, number of pages: ${this.pages.length}`;
    }
    getTitle(): string {
        return this.title;
    }
    getAuthor(): string {
        return this.author;
    }
    getArtist(): string {
        return this.artist;
    }
    setTitle(title: string): void {
        this.title = title;
    }
    setAuthor(author: string): void {
        this.author = author;
    }
    setArtist(artist: string): void {
        this.artist = artist;
    }
}
