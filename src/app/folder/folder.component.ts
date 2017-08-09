import {Component, OnInit, Input} from '@angular/core';
import {FolderState} from 'app/interfaces/interfaces';

@Component({
    selector: 'app-folder',
    templateUrl: './folder.component.html',
    styleUrls: ['./folder.component.css']
})
export class FolderComponent implements OnInit, Input {

    @Input() incomingFolder: FolderState;

    constructor() {
    }

    ngOnInit() {

    }
}
