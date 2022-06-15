import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { Form1Component } from './form-1/form-1.component';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, FormsModule],
  declarations: [AppComponent, HelloComponent, Form1Component],
  bootstrap: [AppComponent],
})
export class AppModule {}
