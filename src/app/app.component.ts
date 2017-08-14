import {Component, OnInit} from '@angular/core';
import {LocalStorageService} from 'app/service/storage';
import {IncomingFiles, IncomingFolders} from 'app/interfaces/interfaces';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    private enterPoint: number;
    private ApplicationFiles: Object;
    private ApplicationFolders: Object;

    constructor(private localStorageService: LocalStorageService) {
        this.ApplicationFiles = this.localStorageService.files;
        this.ApplicationFolders = this.localStorageService.folders;
        this.enterPoint = this.ApplicationFolders[0];
    }

    ngOnInit() {
    }

    initializingFunc() {
        this.ApplicationFiles = this.localStorageService.files;
        this.ApplicationFolders = this.localStorageService.folders;
        this.enterPoint = this.ApplicationFolders[0];
    }

    addFile(displayFiles: Array<number>, files: IncomingFiles, folderIndex: number = 0) {
        this.localStorageService.addNewFile(displayFiles, files, folderIndex);
    }

    addFolder(displayFolder: Array<number>, folders: IncomingFolders, folderIndex: number = 0) {
        this.localStorageService.addNewFolder(displayFolder, folders, folderIndex);
    }

    removeSelected() {
        this.localStorageService.removeSelected();
        this.initializingFunc();
    }
}
