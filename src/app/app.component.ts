import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    private fileName: string;
    private folderName: string;
    private checked: boolean;

    constructor(){
        this.fileName = 'File 1';
        this.folderName = 'Folder 1';
        this.checked = true;
    }

    ngOnInit(){

    }
}
