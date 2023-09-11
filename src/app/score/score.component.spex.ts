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
    fail('To implement')
  });

  it('should work with more than one score', () => {
    fail('To implement')
  });

  it('should treat negative scores as 0', () => {
    fail('To implement')
  });

  it('should return zero with empty input', () => {
    fail('To implement')
  });


});
