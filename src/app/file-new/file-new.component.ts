import {Component, Input, Output, EventEmitter} from '@angular/core';


@Component({
    selector: 'app-file-new',
    templateUrl: './file-new.component.html'
})
export class FileNewComponent implements Input {

    public state: string = 'file';

    @Input() name: string;
    @Input() fileIndex: number;
    @Output() changeNameFile: EventEmitter<{}> = new EventEmitter();

    public reduce(event) {
        event.index = this.fileIndex;
        this.changeNameFile.emit(event)
    }
}
