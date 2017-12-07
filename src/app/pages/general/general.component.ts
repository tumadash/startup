import {Component, OnInit, ViewChild} from '@angular/core';
import {Location} from '@angular/common';
import {Router} from '@angular/router';
import {ServiceComponent} from "../../components/service/service.component";
import {Voyage} from "../../entity/voyage";
import {Port} from "../../entity/port";
import {Ship} from "../../entity/ship";

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {
  @ViewChild('style') style;

  constructor(private location: Location,
              private router: Router,
              private serviceComponent: ServiceComponent) {
  }

  voyages: Voyage[];
  ports: Port[];
  ships: Ship[];
  ngOnInit() {
    this.serviceComponent.getVoyages()
      .subscribe(voyages => this.voyages = voyages);
    this.serviceComponent.getPorts()
      .subscribe(ports => this.ports = ports);
    this.serviceComponent.getShips()
      .subscribe(ships => this.ships = ships);
  }

  logout(): void {
    this.router.navigateByUrl('/login');
  }
  submit(): void{
    this.style.hide();
  }

}
