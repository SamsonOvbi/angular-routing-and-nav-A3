import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilityDetailsComponent } from './utility-details.component';

describe('UtilityDetailsComponent', () => {
  let component: UtilityDetailsComponent;
  let fixture: ComponentFixture<UtilityDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UtilityDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UtilityDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
