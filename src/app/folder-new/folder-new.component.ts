import {Component, OnInit, Input} from '@angular/core';
import {LocalStorageService} from 'app/service/storage';
import {IncomingFiles, IncomingFolders} from 'app/interfaces/interfaces';

@Component({
    selector: 'app-folder-new',
    templateUrl: './folder-new.component.html',
    styleUrls: ['./folder-new.component.css']
})
export class FolderNewComponent implements OnInit, Input {

    private ApplicationFiles: IncomingFiles;
    private ApplicationFolders: IncomingFolders;
    private state: string;

    @Input() name: string;
    @Input() folderIndex: number;
    @Input() incomingFiles: Array<number>;
    @Input() incomingFolders: Array<number>;

    constructor(private localStorageService: LocalStorageService) {
        this.ApplicationFolders = localStorageService.folders;
        this.ApplicationFiles = localStorageService.files;
        this.state = 'folder';
    }

    ngOnInit() {
    }

    addFile(displayFiles: Array<number>, files: IncomingFiles) {
        this.localStorageService.addNewFile(displayFiles, files, this.folderIndex);
    }

    addFolder(displayFolder: Array<number>, folders: IncomingFolders) {
        this.localStorageService.addNewFolder(displayFolder, folders, this.folderIndex);
    }
}
