import { Memento } from '../mementos/memento';
import { ImageEditor } from '../originators/image-editor';

export class ImageEditorBackupManager {
    private mementos: Memento[] = [];

    constructor(private readonly imageEditor: ImageEditor) { }

    backup(): void {
        console.log(`Backup: saving ImageEditor state`)
        this.mementos.push(this.imageEditor.save());
    }

    undo(): void {
        const memento = this.mementos.pop();

        if (!memento) {
            console.log(`Backup: no mementos`);
            return;
        }

        this.imageEditor.restore(memento);
        console.log(`Backup: ${memento.getName()} restored`);
    }

    showMementos(): void {
        for (const memento of this.mementos) {
            console.log(memento);
        }
    }
}