import {Component, OnInit, Input} from '@angular/core';

@Component({
    selector: 'app-node',
    templateUrl: './app-node.component.html',
    styleUrls: ['./app-node.component.css']
})
export class AppNodeComponent implements OnInit, Input {

    @Input() name: string;
    @Input() icon: string;
    @Input() checked: boolean;

    constructor() {
    }

    ngOnInit() {
    }


}
