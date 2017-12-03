import {NgModule} from '@angular/core';
import {GeneralComponent} from './pages/general/general.component';
import {RouterModule} from '@angular/router';
import {LoginComponent} from './pages/login/login.component';
import {VoyageConditionComponent} from './components/voyage-condition/voyage-condition.component';
import {AddVoyageComponent} from './components/add-voyage/add-voyage.component';
import {AddMotorShipComponent} from './components/add-motor-ship/add-motor-ship.component';
import {AddPortComponent} from './components/add-port/add-port.component';

const routes = [
    {path: 'general', component: GeneralComponent},
    {path: 'general/voyage-condition', component: VoyageConditionComponent},
    {path: 'general/add-voyage', component: AddVoyageComponent},
    {path: 'general/add-motor-ship', component: AddMotorShipComponent},
    {path: 'general/add-port', component: AddPortComponent},
    {path: 'login', component: LoginComponent},
    {path: '', redirectTo: '/login', pathMatch: 'full'}];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ],
    declarations: []
})
export class AppRoutingModule {
}
