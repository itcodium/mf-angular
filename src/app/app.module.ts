import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { ZaButton } from '@zurich/angular-components';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent, EmptyRouteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ZaButton
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
