import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { FormComponent } from './form/form.component';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, NgSelectModule],
  declarations: [AppComponent, HelloComponent, FormComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
