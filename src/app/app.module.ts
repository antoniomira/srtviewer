import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MetaComponent } from './components/meta/meta.component';
import { StylesComponent } from './components/styles/styles.component';
import { SubComponent } from './components/sub/sub.component';
import { FileuploadComponent } from './components/fileupload/fileupload.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    MetaComponent,
    StylesComponent,
    SubComponent,
    FileuploadComponent,
    HeaderComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
