import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

// carbon-components-angular default imports
import { UIShellModule, IconModule } from 'carbon-components-angular';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    UIShellModule,
  ],
  bootstrap: [],
})
export class AppModule { }
