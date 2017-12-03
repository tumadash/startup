import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMotorShipComponent } from './add-motor-ship.component';

describe('AddMotorShipComponent', () => {
  let component: AddMotorShipComponent;
  let fixture: ComponentFixture<AddMotorShipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMotorShipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMotorShipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
