import {Component, OnInit, Input} from '@angular/core';

@Component({
    selector: 'app-folder-new',
    templateUrl: './folder-new.component.html',
    styleUrls: ['./folder-new.component.css']
})
export class FolderNewComponent implements OnInit, Input {

    @Input() name: string;
    @Input() checked: boolean;

    constructor() {
    }

    ngOnInit() {
    }

}
