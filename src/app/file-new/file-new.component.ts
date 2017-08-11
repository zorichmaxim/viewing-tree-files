import {Component, OnInit, Input} from '@angular/core';

@Component({
    selector: 'app-file-new',
    templateUrl: './file-new.component.html'
})
export class FileNewComponent implements OnInit, Input {

    @Input() name: string;
    @Input() fileIndex: number;
    @Input() checked : boolean;

    constructor() {
    }

    ngOnInit() {
    }
}
