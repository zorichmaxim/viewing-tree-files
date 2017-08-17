import {Component, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'app-button',
    styleUrls: ['./button.component.css'],
    encapsulation: ViewEncapsulation.None,
    template: `
        <ng-content></ng-content>
        `
})
export class ButtonComponent{}
