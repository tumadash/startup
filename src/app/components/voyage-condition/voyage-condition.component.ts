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


  ngOnInit() {
    this.serviceComponent.getVoyages()
      .subscribe(voyages => this.voyages = voyages);
  }

  goGeneral(): void {
    this.router.navigateByUrl('/general');
  }

}
