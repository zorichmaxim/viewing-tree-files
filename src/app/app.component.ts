import {Component, OnInit} from '@angular/core';
import {LocalStorageService} from 'app/service/local-storage.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    private checked: boolean;
    private enterPoint: number;

    private ApplicationFiles: Object;
    private ApplicationFolders: Object;

    constructor(private localStorageService: LocalStorageService) {
        this.checked = false;
        this.ApplicationFiles = this.localStorageService.files;
        this.ApplicationFolders = this.localStorageService.folders;
        this.enterPoint = this.ApplicationFolders[0];
    }

    ngOnInit() {
    }

    addFileTest(folders, files){
        this.localStorageService.addNewFile(folders, files)
    }
}
