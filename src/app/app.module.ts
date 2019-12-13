import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {MatToolbarModule, MatToolbarRow, MatCardModule, MatFormFieldModule, MatInputModule, MatLabel, MatHint,MatSelectModule, MatOptionModule, MatDividerModule,MatButtonModule} from '@angular/material';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, MatToolbarModule, MatToolbarModule, MatCardModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatOptionModule,MatDividerModule,MatButtonModule],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {
 }
