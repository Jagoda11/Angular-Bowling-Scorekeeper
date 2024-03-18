import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousScoresComponent } from './previous-scores.component';

describe('PreviousScoresComponent', () => {
  let component: PreviousScoresComponent;
  let fixture: ComponentFixture<PreviousScoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PreviousScoresComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviousScoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create 🛠️', () => {
    expect(component).toBeTruthy();
  });
});
