import {Injectable} from '@angular/core';
import {IncomingFiles, IncomingFolders} from 'app/interfaces/interfaces';
import {LocalStorage} from 'app/service/decorator';

@Injectable()
export class LocalStorageService {

    @LocalStorage() ApplicationFiles: IncomingFiles;
    @LocalStorage() ApplicationFolders: IncomingFolders;

    constructor() {
    }

    get files() {
        return this.ApplicationFiles;
    }

    get folders() {
        return this.ApplicationFolders;
    }

    editTargetItems(targetElement, state, newName) {
        const editorFunction = (previous, name) => {
            previous[targetElement].name = name;
            return previous;
        };

        switch (state) {
            case 'folder':
                this.ApplicationFolders = editorFunction(this.ApplicationFolders, newName);
                break;
            case  'file':
                this.ApplicationFiles = editorFunction(this.ApplicationFiles, newName);
                break;
        }

    }
}
