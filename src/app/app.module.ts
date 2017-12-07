import {BrowserModule} from '@angular/platform-browser';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';

import {AppComponent} from './app.component';
import {LoginComponent} from './pages/login/login.component';
import {FormsModule} from '@angular/forms';
import {GeneralComponent} from './pages/general/general.component';
import {AppRoutingModule} from './/app-routing.module';
import {VoyageConditionComponent} from './components/voyage-condition/voyage-condition.component';
import {ServiceComponent} from './components/service/service.component';
import {HttpClientModule} from "@angular/common/http";
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { RippleModule } from 'angular-bootstrap-md/ripple';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    GeneralComponent,
    VoyageConditionComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    RippleModule.forRoot()
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [ServiceComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
