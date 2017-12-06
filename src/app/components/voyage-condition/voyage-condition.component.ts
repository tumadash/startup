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
  ship: Ship = {
    amountOfFuel: 1,
    id: 3,
    info: 'sdfg',
    name: 'name',
  };

  ngOnInit() {
    this.serviceComponent.getVoyages()
      .subscribe(voyages => this.voyages = voyages);
    this.serviceComponent.getPorts()
      .subscribe(voyages => console.log(voyages));
    this.serviceComponent.getShips()
      .subscribe(voyages => console.log(voyages));
    this.serviceComponent.addShip(this.ship);
  }

  goGeneral(): void {
    this.router.navigateByUrl('/general');
  }

}
