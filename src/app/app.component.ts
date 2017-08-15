import {Component, OnInit, ViewChild} from '@angular/core';
import {LocalStorageService} from 'app/service/storage';
import {IncomingFiles, IncomingFolders} from 'app/interfaces/interfaces';
import {FolderNewComponent} from 'app/folder-new/folder-new.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    private enterPoint: number;
    private applicationFiles: Object;
    private applicationFolders: Object;
    private test: string;

    constructor(private localStorageService: LocalStorageService) {
        this.test = 'one';
    }

    ngOnInit() {
        this.initializingFunc()
    }

    @ViewChild(FolderNewComponent)
    private folderComponent: FolderNewComponent;

    private initializingFunc(): void {
        this.applicationFiles = this.localStorageService.files;
        this.applicationFolders = this.localStorageService.folders;
        this.enterPoint = this.applicationFolders[0];
    }

    private addFile(displayFiles: Array<number>, files: IncomingFiles, folderIndex: number = 0): void {
        this.localStorageService.addNewFile(displayFiles, files, folderIndex);
    }

    private addFolder(displayFolder: Array<number>, folders: IncomingFolders, folderIndex: number = 0): void {
        this.localStorageService.addNewFolder(displayFolder, folders, folderIndex);
    }

    private removeSelected(): void {
        this.localStorageService.removeSelected();
        this.initializingFunc();
        this.folderComponent.initializingFunc();
    }
}
