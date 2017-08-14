import {Injectable} from '@angular/core';
import {IncomingFiles, IncomingFolders} from 'app/interfaces/interfaces';
import {LocalStorage} from 'app/service/decorator';

@Injectable()
export class LocalStorageService {

    @LocalStorage() ApplicationFiles: IncomingFiles;
    @LocalStorage() ApplicationFolders: IncomingFolders;
    private changeProperty: string;

    constructor() {
    }

    get files() {
        return this.ApplicationFiles;
    }

    get folders() {
        return this.ApplicationFolders;
    }

    editorFunction(previous, value, targetElement: number, property: string) {
        previous[targetElement][property] = value;
        return previous;
    }

    editTargetItems(targetElement: number, state: string, value, propertyChange: string) {
        switch (propertyChange) {
            case 'name' :
                this.changeProperty = 'name';
                break;
            case 'deleted' :
                this.changeProperty = 'checked';
        }

        switch (state) {
            case 'folder':
                this.ApplicationFolders = this.editorFunction(this.ApplicationFolders, value, targetElement, this.changeProperty);
                break;
            case 'file':
                this.ApplicationFiles = this.editorFunction(this.ApplicationFiles, value, targetElement, this.changeProperty);
                break;
        }
    }

    addNewFile(displayFiles: Array<number>, files, folderIndex: number) {
        let applicationFolders = this.ApplicationFolders;
        let key = Math.floor(Math.random() * 1000);
        files[key] = {
            name: `File ${key}`,
            text: 'Something text'
        };

        applicationFolders[folderIndex].files.push(key);
        this.ApplicationFiles = files;
        this.ApplicationFolders = applicationFolders;
        displayFiles.push(key);
    }

    addNewFolder(displayFolder: Array<number>, folders: Object, folderIndex:number) {
        let applicationFolders = this.ApplicationFolders;
        let key = Math.floor(Math.random() * 1000);
        folders[key] = {
            name: `Folder ${key}`,
            folders: [],
            files: []
        };
        applicationFolders[key] = folders[key];
        applicationFolders[folderIndex].folders.push(key);
        this.ApplicationFolders = applicationFolders;
        displayFolder.push(key);
    }

    removeSelected() {
        let folders = this.ApplicationFolders;
        let files = this.ApplicationFiles;
        for (let folder in folders) {
            if (folders[folder].checked === true) {
                for (let index in folders) {
                    let deleteFolderIndex = folders[index].folders.indexOf(+folder);
                    if (deleteFolderIndex !== -1) {
                        folders[index].folders.splice(deleteFolderIndex, 1);
                    }
                }
                delete folders[folder];
            }
        }
        this.ApplicationFolders = folders;

        for (let file in files) {
            if (files[file].checked === true) {
                for (let index in folders) {
                    let deleteFileIndex = folders[index].files.indexOf(+file);
                    if (deleteFileIndex !== -1) {
                        folders[index].files.splice(deleteFileIndex, 1);
                        console.log(folders[index].files);
                    }
                }
                delete files[file];
            }
        }
        this.ApplicationFiles = files;
        this.ApplicationFolders = folders;
    }
}
