import { Book } from './src/book';
import { Comics } from './src/comics';
import { PrintingFactory } from './src/Factory';
import { Page } from './src/page';
import { Pages } from './src/pages';

const book = new Book(
    'LOTR',
    'K.K.Tolkien',
    new Pages([
        new Page(1, 'with Text', 'simple paper'),
        new Page(2, 'with Text', 'simple paper'),
        new Page(3, 'with Text', 'simple paper'),
        new Page(4, 'with Text', 'simple paper'),
    ])
);

book.foo();

const bookConfig = {
    title: 'How to live with a huge BRAIN',
    author: 'THE GOD ALMIGHTY',
    pages: [
        { pageNumber: 1, pageType: 'with Text', pageMaterial: 'simple paper' },
        { pageNumber: 2, pageType: 'with Text', pageMaterial: 'simple paper' },
        { pageNumber: 3, pageType: 'with Text', pageMaterial: 'simple paper' },
        { pageNumber: 4, pageType: 'with Text', pageMaterial: 'simple paper' },
    ],
};

const priningFactory = new PrintingFactory();
const book1 = priningFactory.printStuff('Book', bookConfig);

for (let page of book1) {
    console.log('page---', page.toString(book1));
}
