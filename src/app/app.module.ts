import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
/*
import {FileComponent} from './file/file.component';
import {FolderComponent} from './folder/folder.component';
import {LocalStorageService} from 'app/servies/local-storage.service';
import { ProjectionTemplateComponent } from './projection-template/projection-template.component';
 */
import { AppNodeComponent } from './app-node/app-node.component';

@NgModule({
    declarations: [
        AppComponent,
      //  FileComponent,
      //  FolderComponent,
      //  ProjectionTemplateComponent,
        AppNodeComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [
      //  LocalStorageService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
