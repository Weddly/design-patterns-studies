import { ImageEditorBackupManager } from "./caretakers/image-editor-backup-manager";
import { ImageEditor } from "./originators/image-editor";

const imageEditor = new ImageEditor('/media/image.png', 'png');
console.log(imageEditor);

const backupManager = new ImageEditorBackupManager(imageEditor);
backupManager.backup();

imageEditor.convertFormatTo('gif');
console.log(imageEditor);
backupManager.backup();

imageEditor.convertFormatTo('jpeg');
console.log(imageEditor);

backupManager.undo();
backupManager.undo();
backupManager.undo();
console.log(imageEditor);

backupManager.showMementos();
