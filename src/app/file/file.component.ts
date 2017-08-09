import {Component, OnInit, Input} from '@angular/core';
import {FileState} from 'app/interfaces/interfaces';


@Component({
    selector: 'app-file',
    templateUrl: './file.component.html',
    styleUrls: ['./file.component.css']
})
export class FileComponent implements OnInit, Input {

    @Input() incomingFile: FileState;

    constructor() {
    }

    ngOnInit() {
    }
}
