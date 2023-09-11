import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreComponent } from './score.component';

describe('ScoreComponent', () => {
  let component: ScoreComponent;
  let fixture: ComponentFixture<ScoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScoreComponent]
    });
    fixture = TestBed.createComponent(ScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should work with one number', () => {
    let actual = component.scoreCalculator([9]);
    expect(actual).toBe(9);
  });

  it('should work with more than one score', () => {
    let actual = component.scoreCalculator([9,10]);
    expect(actual).toBe(19);
  });

  it('should treat negative scores as 0', () => {
    let actual = component.scoreCalculator([8,10,-2,-8]);
    expect(actual).toBe(18);
  });

  it('should return zero with empty input', () => {
    let actual = component.scoreCalculator([]);
    expect(actual).toBe(0);
  });


});
