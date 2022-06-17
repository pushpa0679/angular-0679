import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { Form1Component } from './form-1/form-1.component';
import { Form2Component } from './form-2/form-2.component';
import { Form3Component } from './form-3/form-3.component';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    Form1Component,
    Form2Component,
    Form3Component,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
