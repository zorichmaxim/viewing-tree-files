import {Component, OnInit} from '@angular/core';
import {LocalStorageService} from 'app/service/storage';

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

    addFile(displayFiles, files, folderIndex: number = 0) {
        this.localStorageService.addNewFile(displayFiles, files, folderIndex);
    }

    addFolder(displayFolder, folders, folderIndex: number = 0) {
        this.localStorageService.addNewFolder(displayFolder, folders, folderIndex);
    }

    removeSelected(){
        this.localStorageService.removeSelected();
    }
}
