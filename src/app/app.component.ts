import {Component, OnInit} from '@angular/core';
import {LocalStorageService} from 'app/servies/local-storage.service';
import {State} from 'app/interfaces/interfaces';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    private dataStorage: State;
    private rootTitle: string;

    ngOnInit() {
        this.dataStorage = this.localStorage.haslocalStorage() ? this.localStorage.dataState : false;
    }

    constructor(private localStorage: LocalStorageService) {
        this.rootTitle = 'root';
    }
}
