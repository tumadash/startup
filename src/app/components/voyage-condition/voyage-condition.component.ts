import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Voyage} from '../../entity/voyage/voyage';

@Component({
    selector: 'app-voyage-condition',
    templateUrl: './voyage-condition.component.html',
    styleUrls: ['./voyage-condition.component.css']
})
export class VoyageConditionComponent implements OnInit {
    constructor(private router: Router) {
    }
    voyages: Voyage[] = [
        {name: '1 рейс'},
        {name: '2 рейс'},
        {name: '3 рейс'}
    ];

    ngOnInit() {
    }

    goGeneral(): void {
        this.router.navigateByUrl('/general');
    }

}
