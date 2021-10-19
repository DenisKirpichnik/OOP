const iterableMixin = (superclass: any) =>
    class extends superclass {
        foo() {
            console.log('foo from iterableMixin');
        }
        [Symbol.iterator]() {
            var index = -1;
            var data = this.pages.pages;

            return {
                next: () => ({ value: data[++index], done: !(index in data) }),
            };
        }
    };

export abstract class Item extends iterableMixin(Object) {
    constructor() {
        super();
    }
    abstract toString(): string;
}
