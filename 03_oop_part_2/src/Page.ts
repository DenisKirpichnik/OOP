import { Item } from './Item';

type pageType = 'with Text' | 'with Article' | 'with Images';
type pageMaterial = 'simple paper' | 'glossy paper';

export class Page {
    pageNumber: number;
    pageType: pageType;
    pageMaterial: pageMaterial;

    constructor(pageNumber: number, pageType: pageType, pageMaterial: pageMaterial) {
        this.pageNumber = pageNumber;
        this.pageType = pageType;
        this.pageMaterial = pageMaterial;
    }
    toString(item?: any) {
        if (item) {
            if (item.constructor.name === 'Book') {
                return `Book: ${item.title} by ${item.author} with number of pages: ${item.pages.length}, here is page with text #${this.pageNumber} and it\'s material is ${this.pageMaterial}`;
            } else if (item.constructor.name === 'Comics') {
                return `Comics: ${item.title} by ${item.author}, the artist is some author,  with number of pages: ${item.pages.length}, here is page with text #${this.pageNumber} and it\'s material is ${this.pageMaterial}`;
            } else if (item.constructor.name === 'Magazine') {
                return `Magazine: ${item.title} with number of pages: ${item.pages.length}, here is page with text #${this.pageNumber} and it\'s material is ${this.pageMaterial}`;
            }
        }
        return `here is page ${this.pageType} #${this.pageNumber} and it's material is ${this.pageMaterial}`;
    }
}
