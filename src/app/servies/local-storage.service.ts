import {Injectable} from '@angular/core';

@Injectable()
export class LocalStorageService {
    private rootFileState: string;

    constructor() {
        this.rootFileState = 'rootFileState';
    }

    get dataState() {
        return JSON.parse(localStorage[this.rootFileState]);
    }

    set dataState(data) {
        localStorage[this.rootFileState] = JSON.stringify(data);
    }

    removeData() {
        localStorage.removeItem(`${this.rootFileState}`);
    }

    haslocalStorage() {
        let storageState = this.dataState !== undefined;
        return storageState;
    }
}
