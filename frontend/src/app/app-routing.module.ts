import {NgModule} from '@angular/core';
import {GeneralComponent} from './pages/general/general.component';
import {RouterModule} from '@angular/router';
import {LoginComponent} from './pages/login/login.component';
import {VoyageConditionComponent} from './components/voyage-condition/voyage-condition.component';

const routes = [
    {path: 'general', component: GeneralComponent},
    {path: 'general/voyage-condition', component: VoyageConditionComponent},
    {path: 'login', component: LoginComponent},
    {path: '', redirectTo: '/login', pathMatch: 'full'}];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ],
    declarations: []
})
export class AppRoutingModule {
}
