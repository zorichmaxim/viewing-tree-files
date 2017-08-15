import {Component, OnInit, Input} from '@angular/core';
import {LocalStorageService} from 'app/service/storage';
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

    constructor(private localStroageService: LocalStorageService) {
        this.state = 'file';
    }

    ngOnInit() {
        this.applicationFiles = this.localStroageService.files;
        this.name = this.applicationFiles[this.fileIndex].name
    }
}
