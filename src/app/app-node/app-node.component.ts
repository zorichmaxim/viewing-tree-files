import {Component, OnInit, Input} from '@angular/core';
import {LocalStorageService} from 'app/service/storage';

@Component({
    selector: 'app-node',
    templateUrl: './app-node.component.html',
    styleUrls: ['./app-node.component.css']
})
export class AppNodeComponent implements OnInit, Input {

    private editInputToogle: boolean;
    private iconStyle: string;
    private btnName: string;
    private checked: boolean;

    @Input() itemIndex: number;
    @Input() name: string;
    @Input() state: string;
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

    constructor(private localStorageService: LocalStorageService) {
        this.editInputToogle = false;
        this.btnName = 'edit';
        this.checked = false;

    }

    ngOnInit() {
    }

    public editName(state: string): void {
        this.editInputToogle = !this.editInputToogle;
        this.btnName = this.editInputToogle ? 'save' : 'edit';
        this.localStorageService.editTargetItems(this.itemIndex, state, this.name, 'name');
    }

    public changes(): void {
        this.checked = !this.checked;
        this.localStorageService.editTargetItems(this.itemIndex, this.state, this.checked, 'deleted')
    }
}
