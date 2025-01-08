import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearcgFlightComponent } from './searcg-flight.component';

describe('SearcgFlightComponent', () => {
  let component: SearcgFlightComponent;
  let fixture: ComponentFixture<SearcgFlightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearcgFlightComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearcgFlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
