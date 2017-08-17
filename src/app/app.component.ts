import {Component, OnInit, ViewChildren} from '@angular/core';
import {LocalStorageService} from 'app/service/storage';
import {IncomingFiles, IncomingFolders} from 'app/interfaces/interfaces';
import {FolderNewComponent} from 'app/folder-new/folder-new.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    private enterPoint: IncomingFolders;
    private applicationFiles: Object;
    private applicationFolders: Object;

    constructor(private localStorageService: LocalStorageService) {
    }

    ngOnInit() {
        this.initializingFunc();
    }

    @ViewChildren(FolderNewComponent)
    private folderComponent: FolderNewComponent;

    private initializingFunc(): void {
        this.applicationFiles = this.localStorageService.files;
        this.applicationFolders = this.localStorageService.folders;
        this.enterPoint = this.applicationFolders[0];
    }

    private addFile(displayFiles: Array<number>, files: IncomingFiles): void {
        this.localStorageService.addNewFile(displayFiles, files, 0);
    }

    private addFolder(displayFolder: Array<number>, folders: IncomingFolders): void {
        this.localStorageService.addNewFolder(displayFolder, folders, 0);
    }

    private childFileName(items): string {
        return this.applicationFiles[items].name;
    }

    private removeSelected(): void {
        this.localStorageService.removeSelected();
        this.initializingFunc();
        this.folderComponent['_results'].forEach((childComponent) => {
            if (childComponent.state === 'file') {
                return
            }
            else childComponent.initializingFunc();
        });
    }
}
