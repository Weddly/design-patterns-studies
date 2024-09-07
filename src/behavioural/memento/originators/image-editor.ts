import { ConcreteMemento } from "../mementos/concrete-memento";
import { Memento } from "../mementos/memento";

export class ImageEditor {
    constructor(private filePath: string, private fileFormat: string) { }

    convertFormatTo(format: string): void {
        this.fileFormat = format;
        this.filePath = this.filePath.split('.').slice(0, -1).join('');
        this.filePath += '.' + format;
    }

    save(): Readonly<Memento> {
        const date = new Date();

        return new ConcreteMemento(date.toISOString(), date, this.filePath, this.fileFormat);
    }

    restore(memento: Memento): void {
        const concreteMemento = memento as ConcreteMemento;
        this.filePath = concreteMemento.getFilePath();
        this.fileFormat = concreteMemento.getFileFormat();

    }
}


// const img = new ImageEditor('test/file.jpg', 'jpg');
// img.convertFormatTo('gif');

// console.log(img);