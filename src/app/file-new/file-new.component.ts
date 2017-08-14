import {Component, OnInit, Input} from '@angular/core';

@Component({
    selector: 'app-file-new',
    templateUrl: './file-new.component.html'
})
export class FileNewComponent implements OnInit, Input {

    private state: string;

    @Input() name: string;
    @Input() fileIndex: number;

    constructor() {
        this.state = 'file';
    }

    ngOnInit() {
    }
}
