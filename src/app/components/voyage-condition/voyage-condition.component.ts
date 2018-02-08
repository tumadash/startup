import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {Voyage} from "../../entity/voyage";
import {ServiceComponent} from "../service/service.component";
import {Ship} from "../../entity/ship";


@Component({
  selector: 'app-voyage-condition',
  templateUrl: './voyage-condition.component.html',
  styleUrls: ['./voyage-condition.component.css'],
  providers: [ServiceComponent]
})
export class VoyageConditionComponent implements OnInit {
  constructor(private router: Router, private serviceComponent: ServiceComponent) {
  }

  voyages: Voyage[];
  selectVoyage: Voyage;
  logs: string;


  ngOnInit() {
    this.logs = '';
    this.serviceComponent.getVoyages()
      .subscribe(voyages => {
        this.voyages = voyages;
      });
  }

  onChange(event) {
    this.voyages.forEach(elem => {
      if (elem.name === event.target.value) {
        this.logs = elem.info;
      }
    });
  }

  goGeneral(): void {
    this.router.navigateByUrl('/general');
  }

}
