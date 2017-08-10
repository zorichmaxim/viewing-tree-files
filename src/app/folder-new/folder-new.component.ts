import {Component, OnInit, Input} from '@angular/core';
import {LocalStorageService} from 'app/service/local-storage.service';

@Component({
    selector: 'app-folder-new',
    templateUrl: './folder-new.component.html',
    styleUrls: ['./folder-new.component.css']
})
export class FolderNewComponent implements OnInit, Input {

    @Input() name: string;
    @Input() checked: boolean;
    @Input() incomingFiles: Array<number>;
    @Input() incomingFolders: Array<number>;

    private ApplicationFiles: Object;
    private ApplicationFolders: Object;

    constructor(private localStorageService:LocalStorageService) {
        this.ApplicationFolders = localStorageService.folders;
        this.ApplicationFiles = localStorageService.files;
    }

    ngOnInit() {
    }

}
