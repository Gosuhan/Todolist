import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { AppService } from './app.service';


@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    ListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
