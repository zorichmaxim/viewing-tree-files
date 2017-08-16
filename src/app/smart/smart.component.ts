import {Component, OnInit, Input, ViewChild} from '@angular/core';
import {LocalStorageService} from 'app/service/storage';
import {FolderNewComponent} from 'app/folder-new/folder-new.component';

@Component({
    selector: 'app-smart',
    templateUrl: './smart.component.html',
    styleUrls: ['./smart.component.css']
})
export class SmartComponent implements OnInit, Input{

    @Input() folderIndex: number;
    @Input() fileIndex: number;
    @Input() state: string;

    constructor(public localStorageService: LocalStorageService) {
    }

    ngOnInit() {
    }

    @ViewChild(FolderNewComponent)
    private folderComponent: FolderNewComponent;

    initializingFunc() {
        this.folderComponent.initializingFunc();
    }
}
