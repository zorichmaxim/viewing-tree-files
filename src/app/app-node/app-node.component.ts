import {Component, OnInit, Input} from '@angular/core';

@Component({
    selector: 'app-node',
    templateUrl: './app-node.component.html',
    styleUrls: ['./app-node.component.css']
})
export class AppNodeComponent implements OnInit, Input {

    private iconStyle: string;
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


    constructor() {
    }

    ngOnInit() {

    }
}
