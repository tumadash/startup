import {Component, OnInit, ViewChild} from '@angular/core';
import {Location} from '@angular/common';
import {Router} from '@angular/router';
import {ServiceComponent} from "../../components/service/service.component";
import {Voyage} from "../../entity/voyage";
import {Port} from "../../entity/port";
import {Ship} from "../../entity/ship";
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {
  @ViewChild('style') style;
  @ViewChild('shipW') shipW;
  @ViewChild('portW') portW;

  constructor(private location: Location,
              private router: Router,
              private serviceComponent: ServiceComponent) {
  }
  optionsSelect: Array<any>;

  voyages: Voyage[];
  ports: Port[];
  ships: Ship[];

  ship: Ship;
  nameOfShip: string;

  nameOfPort: string;
  port: Port;
  latitude: number;
  longitude: number;

  selectPortIn: number;
  selectPortOut: number;
  selectShip: number;
  amountOfFuel: number;
  nameVoyage: string;

  ngOnInit() {
    this.serviceComponent.getVoyages()
      .subscribe(voyages => this.voyages = voyages);
    this.serviceComponent.getPorts()
      .subscribe(ports => this.ports = ports);
    this.serviceComponent.getShips()
      .subscribe(ships => {
        this.ships = ships;
      });
  }

  logout(): void {
    this.router.navigateByUrl('/login');
  }

  submit(): void {
    let voyage = new Voyage;
    voyage.amountOfFuel = this.amountOfFuel;
    voyage.fromId = this.selectPortIn;
    voyage.toId =  this.selectPortOut;
    voyage.shipId = this.selectShip;
    voyage.name = this.nameVoyage;

    this.style.hide();
    this.serviceComponent.addVoyage(voyage)
      .subscribe(e => {
        this.amountOfFuel = null;
        this.selectPortIn = null;
        this.selectPortOut = null;
        this.selectShip = null;
        this.nameVoyage = null;

        this.serviceComponent.getVoyages()
          .subscribe(voyages => this.voyages = voyages)
      });
  }

  addShip(): void {
    this.shipW.hide();
    this.ship = new Ship();
    this.ship.name = this.nameOfShip;
    this.serviceComponent.addShip(this.ship)
      .subscribe(e => {
        this.ship = new Ship();
        this.nameOfShip = '';
        this.serviceComponent.getShips()
          .subscribe(ships => this.ships = ships);
      });
  }

  addPort(): void {
    this.portW.hide();
    this.port = new Port();
    this.port.longitude = this.longitude;
    this.port.latitude = this.latitude;
    this.port.name = this.nameOfPort;
    this.serviceComponent.addPort(this.port)
      .subscribe(e => {
        this.port = new Port();
        this.latitude = null;
        this.longitude = null;
        this.serviceComponent.getPorts()
        .subscribe(ports => this.ports = ports)});
  }

}
