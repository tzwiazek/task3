import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherCityDetailsComponent } from './weather-city-details.component';

describe('WeatherCityDetailsComponent', () => {
  let component: WeatherCityDetailsComponent;
  let fixture: ComponentFixture<WeatherCityDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherCityDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherCityDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
