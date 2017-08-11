import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from 'app/app.component';
import {AppNodeComponent} from 'app/app-node/app-node.component';
import {ButtonComponent} from 'app/button/button.component';
import {FileNewComponent} from 'app/file-new/file-new.component';
import {FolderNewComponent} from 'app/folder-new/folder-new.component';

import {LocalStorageService} from 'app/service/local-storage.service';

@NgModule({
    declarations: [
        AppComponent,
        AppNodeComponent,
        ButtonComponent,
        FileNewComponent,
        FolderNewComponent
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    providers: [
        LocalStorageService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
