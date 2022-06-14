import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { Form01Component } from './form-01/form-01.component';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, FormsModule],
  declarations: [AppComponent, HelloComponent, Form01Component],
  bootstrap: [AppComponent],
})
export class AppModule {}
