import {Component, OnInit, Input} from '@angular/core';
import {LocalStorageService} from 'app/service/local-storage.service';

@Component({
    selector: 'app-node',
    templateUrl: './app-node.component.html',
    styleUrls: ['./app-node.component.css']
})
export class AppNodeComponent implements OnInit, Input {

    private editInputToogle: boolean;
    private iconStyle: string;
    private btnName: string;
    @Input() name: string;
    @Input() checked: boolean;

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
        this.btnName = 'edit'
    }

    ngOnInit() {
    }

    editName(index, state) {
        this.editInputToogle = !this.editInputToogle;
        this.btnName = this.editInputToogle ? 'save' : 'edit';
        this.localStorageService.editTargetItems(index, state, this.name);
    }
}
