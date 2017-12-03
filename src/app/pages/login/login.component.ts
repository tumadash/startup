import {Component} from '@angular/core';
import {User} from '../../user/user';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.html',
    styleUrls: ['./login.css']
})
export class LoginComponent {
    constructor(private router: Router) {}
    user: User = {
        login: '',
        password: ''
    };
    admin: User = {
        login: '1',
        password: '1'
    };
    login(): void {
        if (JSON.stringify(this.user) === JSON.stringify(this.admin)) {
            this.router.navigateByUrl('/general');
        }
    }
}
