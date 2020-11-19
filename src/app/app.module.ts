import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AddChildDirective } from './add-child.directive';
import { AppChildComponent } from './app-child/app-child.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, AddChildDirective, AppChildComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
