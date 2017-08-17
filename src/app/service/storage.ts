import {Injectable} from '@angular/core';
import {IIncomingFiles, IIncomingFolders} from 'app/interfaces/interfaces';
import {LocalStorage} from 'app/decorator/decorator';

@Injectable()
export class LocalStorageService {

    @LocalStorage() applicationFiles: IIncomingFiles;
    @LocalStorage() applicationFolders: IIncomingFolders;
    private changeProperty: string;

    public get files() {
        return this.applicationFiles;
    }

    public get folders() {
        return this.applicationFolders;
    }

    public editorFunction(previous, value, targetElement: number, property: string) {
        previous[targetElement][property] = value;
        return previous;
    }

    public editTargetItems(targetElement: number, state: string, value, propertyChange: string): void {
        this.changeProperty = propertyChange === 'name' ? 'name' : 'checked';
        switch (state) {
            case 'folder':
                this.applicationFolders = this.editorFunction(this.applicationFolders, value, targetElement, this.changeProperty);
                break;
            case 'file':
                this.applicationFiles = this.editorFunction(this.applicationFiles, value, targetElement, this.changeProperty);
                break;
        }
    }

    public addNewFile(displayFiles: Array<number>, files, folderIndex: number): void {
        let applicationFolders = this.applicationFolders;
        let key = Math.floor(Math.random() * 1000);
        files[key] = {
            name: `File ${key}`,
            text: 'Something text'
        };

        applicationFolders[folderIndex].files.push(key);
        this.applicationFiles = files;
        this.applicationFolders = applicationFolders;
        displayFiles.push(key);
    }

    public addNewFolder(displayFolder: Array<number>, folders: Object, folderIndex: number): void {
        let applicationFolders = this.applicationFolders;
        let key = Math.floor(Math.random() * 1000);
        folders[key] = {
            name: `Folder ${key}`,
            folders: [],
            files: []
        };
        applicationFolders[key] = folders[key];
        applicationFolders[folderIndex].folders.push(key);
        this.applicationFolders = applicationFolders;
        displayFolder.push(key);
    }

    public removeSelected() {
        let folders = this.applicationFolders,
            files = this.applicationFiles,
            deleteChildrensFolder = (childFolders) => {
                for (let fold of childFolders) {
                    delete folders[fold];
                }
            },
            deleteChildrensFiles = (childFiles) => {
                for (let file of childFiles) {
                    delete files[file]
                }
            };

        for (let folder in folders) {
            if (folders[folder].checked === true) {
                let childFolders = folders[folder].folders;
                let childFiles = folders[folder].files;
                deleteChildrensFolder(childFolders);
                deleteChildrensFiles(childFiles);
                for (let index in folders) {
                    let deleteFolderIndex = folders[index].folders.indexOf(+folder);
                    if (deleteFolderIndex !== -1) {
                        folders[index].folders.splice(deleteFolderIndex, 1);
                    }
                }
                delete folders[folder];
            }
        }
        this.applicationFolders = folders;

        for (let file in files) {
            if (files[file].checked === true) {
                for (let index in folders) {
                    let deleteFileIndex = folders[index].files.indexOf(+file);
                    if (deleteFileIndex !== -1) {
                        folders[index].files.splice(deleteFileIndex, 1);
                    }
                }
                delete files[file];
            }
        }
        this.applicationFiles = files;
        this.applicationFolders = folders;
    }
}
