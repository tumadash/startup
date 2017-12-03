import {Component, OnInit} from '@angular/core';
import { Location } from '@angular/common';
import {Router} from '@angular/router';

@Component({
    selector: 'app-general',
    templateUrl: './general.component.html',
    styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {

    constructor(
        private location: Location,
        private router: Router
    ) {}

    ngOnInit() {
    }

    logout(): void {
        this.router.navigateByUrl('/login');
    }

}
