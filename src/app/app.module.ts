import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FileComponent} from './file/file.component';
import {FolderComponent} from './folder/folder.component';
import {LocalStorageService} from 'app/servies/local-storage.service';

@NgModule({
    declarations: [
        AppComponent,
        FileComponent,
        FolderComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [
        LocalStorageService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
