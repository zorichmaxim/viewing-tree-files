import {Injectable} from '@angular/core';

@Injectable()
export class LocalStorageService {
    private ApplicationFiles: Object;
    private ApplicationFolders: Object;

    constructor() {
        this.ApplicationFiles = {
            0: {
                name: 'File 1',
                text: 'Something text'
            },
            1: {
                name: 'File 2',
                text: 'Something text'
            },
            2: {
                name: 'File 3',
                text: 'Something text'
            },
            3: {
                name: 'File 4',
                text: 'Something text'
            },
            4: {
                name: 'File 5',
                text: 'Something text'

            },
            5: {
                name: 'File 6',
                text: 'Something text'

            },
            6: {
                name: 'File 7',
                text: 'Something text'

            },
            7: {
                name: 'File 8',
                text: 'Something text'

            }
        };
        this.ApplicationFolders = {
            0: {
                name: 'root',
                folders: [1, 2],
                files: [1]
            },
            1: {
                name: 'Folder 1',
                folders: [],
                files: [2, 3]
            },
            2: {
                name: 'Folder 2',
                folders: [3, 4],
                files: [4]
            },
            3: {
                name: 'Folder 3',
                folders: [],
                files: [5, 6]
            },
            4: {
                name: 'Folder 4',
                folders: [],
                files: [7]
            },
        };
    }

    get folders() {
        return this.ApplicationFolders;
    }

    get files() {
        return this.ApplicationFiles;
    }

}
