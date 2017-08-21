import {Component, Input, Output, EventEmitter} from '@angular/core';
//import {LocalStorageService} from 'app/service/storage';

@Component({
    selector: 'app-node',
    templateUrl: './app-node.component.html',
    styleUrls: ['./app-node.component.css']
})
export class AppNodeComponent implements Input {

    private editInputToogle: boolean = false;
    private iconStyle: string;
    private btnName: string = 'edit';
    private checked: boolean = false;

    @Input() itemIndex: number;
    @Input() name: string;
    @Input() state: string;
    @Output() changeTargetItem: EventEmitter<{}> = new EventEmitter();
    @Input()
    set icon(icon: string) {
        switch (icon) {
            case 'file':
                this.iconStyle = 'file-icon';
                break;
            case  'folder':
                this.iconStyle = 'folder-icon';
                break;
            default:
                this.iconStyle = 'default-icon';
        }
    }

    constructor() {
    }

    public editName(): void {
        this.editInputToogle = !this.editInputToogle;
        this.btnName = this.editInputToogle ? 'save' : 'edit';
        this.changeTargetItem.emit({index: this.itemIndex, state: this.state, name: this.name, property: 'name'});
    }

    public changes(): void {
        this.checked = !this.checked;
        this.changeTargetItem.emit({index: this.itemIndex, state: this.state, name: this.checked, property: 'deleted'})
    }
}
