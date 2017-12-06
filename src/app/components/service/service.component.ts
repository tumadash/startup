import {Component, Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Voyage} from '../../entity/voyage';
import {Port} from '../../entity/port';
import {Ship} from '../../entity/ship';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ServiceComponent {


  constructor( private http: HttpClient) { }
  private url = 'http://localhost:8081/';
  private voyage = 'route';
  private port = 'port';
  private ship = 'ship';

  getVoyages(): Observable<Voyage[]> {
    return this.http.get<Voyage[]>(this.url + this.voyage);
  }
  getPorts(): Observable<Port[]> {
    return this.http.get<Port[]>(this.url + this.port);
  }
  getShips(): Observable<Ship[]> {
    return this.http.get<Ship[]>(this.url + this.ship);
  }
  addShip(ship): Observable<Ship> {
    return this.http.post<Ship>(this.url + this.ship, ship, httpOptions);
  }
  addPort(port): Observable<Port> {
    return this.http.post<Port>(this.url + this.port, port, httpOptions);
  }
  addVoyage(voyage): Observable<Voyage> {
    return this.http.post<Voyage>(this.url + this.voyage, voyage, httpOptions);
  }



}
