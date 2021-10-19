import { Book } from './book';
import { Comics } from './comics';
import { Magazine } from './magazine';
import { Page } from './page';
import { Pages } from './pages';

export class PrintingFactory {
    constructor() {}
    printStuff(itemType: string, config: any) {
        switch (itemType) {
            case 'Book':
                return new Book(
                    config.title,
                    config.author,
                    new Pages(
                        config.pages.map((page: any) => new Page(page.pageNumber, page.pageType, page.pageMaterial))
                    )
                );
            case 'Comics':
                return new Comics(
                    config.title,
                    config.author,
                    config.artist,
                    new Pages(
                        config.pages.map((page: any) => new Page(page.pageNumber, page.pageType, page.pageMaterial))
                    )
                );
            case 'Magazine':
                return new Magazine(
                    config.title,
                    new Pages(
                        config.pages.map((page: any) => new Page(page.pageNumber, page.pageType, page.pageMaterial))
                    )
                );
            default:
                return 'nada';
        }
    }
}
