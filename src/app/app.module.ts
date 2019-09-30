import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorMsgComponent } from './shared/error-msg/error-msg.component';
import { SpoilerListComponent } from './pages/spoiler-list/spoiler-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorMsgComponent,
    SpoilerListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
