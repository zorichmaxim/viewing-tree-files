import {Component, OnInit, Input} from '@angular/core';
import {IncomingFiles} from 'app/interfaces/interfaces';

@Component({
    selector: 'app-file-new',
    templateUrl: './file-new.component.html'
})
export class FileNewComponent implements OnInit, Input {

    private state: string;
    private name: string;
    private applicationFiles: IncomingFiles;

    @Input() fileIndex: number;
    @Input() localStore: any;

    constructor() {
    }

    ngOnInit() {
        this.state = 'file';
        this.applicationFiles = this.localStore.files;
        this.name = this.applicationFiles[this.fileIndex].name
    }
}
