import {Component, OnInit, Input} from '@angular/core';

@Component({
    selector: 'app-file-new',
    templateUrl: './file-new.component.html',
    styleUrls: ['./file-new.component.css']
})
export class FileNewComponent implements OnInit, Input {

    @Input() name: string;
    @Input() checked : boolean;

    constructor() {
    }

    ngOnInit() {
    }

}
