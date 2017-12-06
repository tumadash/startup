import {Component, OnInit} from '@angular/core';
import { Location } from '@angular/common';
import {Router} from '@angular/router';
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
    selector: 'app-general',
    templateUrl: './general.component.html',
    styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {
    closeResult: string;

    constructor(
        private modalService: NgbModal,
        private router: Router
    ) {}

    ngOnInit() {
    }
    open(content) {
        this.modalService.open(content).result.then((result) => {
            console.log(`Closed with: ${result}`);
        }, (reason) => {
            console.log(`Dismissed ${this.getDismissReason(reason)}`);
        });
    }
    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return  `with: ${reason}`;
        }
    }

    logout(): void {
        this.router.navigateByUrl('/login');
    }

}
