import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-file-new',
    templateUrl: './file-new.component.html'
})
export class FileNewComponent implements Input {

    private state: string;

    @Input() name: string;

    ngOnInit() {
        this.state = 'file';
    }
}
