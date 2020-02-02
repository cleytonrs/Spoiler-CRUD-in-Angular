import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorMsgComponent } from './shared/error-msg/error-msg.component';
import { SpoilerListComponent } from './pages/spoiler-list/spoiler-list.component';
import { SpoilerFormComponent } from './shared/spoiler-form/spoiler-form.component';
import { CreateSpoilerComponent } from './pages/create-spoiler/create-spoiler.component';
import { EditSpoilerComponent } from './pages/edit-spoiler/edit-spoiler.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorMsgComponent,
    SpoilerListComponent,
    SpoilerFormComponent,
    CreateSpoilerComponent,
    EditSpoilerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
