import {Component, OnInit, ViewChildren, QueryList} from '@angular/core';
import {LocalStorageService} from 'app/service/storage';
import {IIncomingFiles, IIncomingFolders} from 'app/interfaces/interfaces';
import {FolderNewComponent} from 'app/folder-new/folder-new.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    private enterPoint: IIncomingFolders;
    private applicationFiles: Object;
    private applicationFolders: Object;

    constructor(private localStorageService: LocalStorageService) {
    }

    ngOnInit() {
        this.initializingFunc();
    }

    @ViewChildren(FolderNewComponent) private folderComponent: QueryList<FolderNewComponent>;

    private initializingFunc(): void {
        this.applicationFiles = this.localStorageService.files;
        this.applicationFolders = this.localStorageService.folders;
        this.enterPoint = this.applicationFolders[0];
    }

    private addFile(displayFiles: Array<number>, files: IIncomingFiles): void {
        this.localStorageService.addNewFile(displayFiles, files, 0);
    }

    private addFolder(displayFolder: Array<number>, folders: IIncomingFolders): void {
        this.localStorageService.addNewFolder(displayFolder, folders, 0);
    }

    private childFileName(items): string {
        return this.applicationFiles[items].name;
    }

    private removeSelected(): void {
        this.localStorageService.removeSelected();
        this.initializingFunc();
        console.log(this.folderComponent);
        this.folderComponent.forEach((childComponent) => {
            if (childComponent.state === 'file') {
                return
            }
            else childComponent.initializingFunc();
        });
    }
}
