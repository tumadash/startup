import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {LoginComponent} from './pages/login/login.component';
import {FormsModule} from '@angular/forms';
import {GeneralComponent} from './pages/general/general.component';
import {AppRoutingModule} from './/app-routing.module';
import { VoyageConditionComponent } from './components/voyage-condition/voyage-condition.component';
import { AddVoyageComponent } from './components/add-voyage/add-voyage.component';
import { AddMotorShipComponent } from './components/add-motor-ship/add-motor-ship.component';
import { AddPortComponent } from './components/add-port/add-port.component';
import { ServiceComponent } from './components/service/service.component';
import {HttpClientModule} from "@angular/common/http";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";



@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        GeneralComponent,
        VoyageConditionComponent,
        AddVoyageComponent,
        AddMotorShipComponent,
        AddPortComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
      HttpClientModule,
        NgbModule.forRoot()
    ],
    providers: [ServiceComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}
