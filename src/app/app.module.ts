import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppNodeComponent} from './app-node/app-node.component';
import {ButtonComponent} from './button/button.component';
import {FileNewComponent} from './file-new/file-new.component';
import {FolderNewComponent} from './folder-new/folder-new.component';

@NgModule({
    declarations: [
        AppComponent,
        AppNodeComponent,
        ButtonComponent,
        FileNewComponent,
        FolderNewComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
