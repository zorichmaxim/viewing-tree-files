import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'app-button',
    template: '<ng-content></ng-content>',
    styleUrls: ['./button.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class ButtonComponent implements OnInit {
    constructor() {
    }

    ngOnInit() {
    }
}
