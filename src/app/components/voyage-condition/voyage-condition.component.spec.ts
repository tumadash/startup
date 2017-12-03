import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoyageConditionComponent } from './voyage-condition.component';

describe('VoyageConditionComponent', () => {
  let component: VoyageConditionComponent;
  let fixture: ComponentFixture<VoyageConditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoyageConditionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoyageConditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
