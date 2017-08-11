import {Component, OnInit, Input} from '@angular/core';
import {LocalStorageService} from 'app/service/local-storage.service';
import {IncomingFiles, IncomingFolders} from 'app/interfaces/interfaces';

@Component({
    selector: 'app-folder-new',
    templateUrl: './folder-new.component.html',
    styleUrls: ['./folder-new.component.css']
})
export class FolderNewComponent implements OnInit, Input {

    @Input() name: string;
    @Input() checked: boolean;
    @Input() folderIndex: number;
    @Input() incomingFiles: Array<number>;
    @Input() incomingFolders: Array<number>;

    private ApplicationFiles: IncomingFiles;
    private ApplicationFolders: IncomingFolders;

    constructor(private localStorageService:LocalStorageService) {
        this.ApplicationFolders = localStorageService.folders;
        this.ApplicationFiles = localStorageService.files;
    }

    ngOnInit() {
    }
}
