import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show the score', () => {
    // arrange
    const fixture = TestBed.createComponent(HomeComponent);
    fixture.componentInstance.firstRoll = 4;
    fixture.componentInstance.secondRoll = 3;

    // act
    fixture.componentInstance.onClick();
    fixture.detectChanges(); //to allow angular to update html

    // assert
    const html = fixture.nativeElement;
    const scoreTxt = html.querySelector('#score').textContent;
    expect(scoreTxt).toEqual('Score: 7');
    const currentRound = html.querySelector('#current-round').textContent;
    expect(currentRound).toEqual('Current round: 2');
  });

  it('should show the error - no second roll', () => {
    // arrange
    const fixture = TestBed.createComponent(HomeComponent);
    fixture.componentInstance.firstRoll = 4;

    // act
    fixture.componentInstance.onClick();
    fixture.detectChanges();

    // assert
    const html = fixture.nativeElement;
    const errorMessage = html.querySelector('#error-message');
    expect(errorMessage).toBeTruthy();
  });

  it('should show the error - invalid values', () => {
    // arrange
    const fixture = TestBed.createComponent(HomeComponent);
    fixture.componentInstance.firstRoll = 7;
    fixture.componentInstance.secondRoll = 8;

    // act
    fixture.componentInstance.onClick();
    fixture.detectChanges();

    // assert
    const html = fixture.nativeElement;
    const errorMessage = html.querySelector('#error-message');
    expect(errorMessage).toBeTruthy();
    const currentRound = html.querySelector('#current-round').textContent;
    expect(currentRound).toEqual('Current round: 1');
  });

  it('should show third Roll on the 10th round', () => {
    // arrange
    const fixture = TestBed.createComponent(HomeComponent);
    fixture.componentInstance.currentRound = 10;
    fixture.componentInstance.firstRoll = 10;
    fixture.componentInstance.secondRoll = 0;

    // act
    fixture.componentInstance.evaluateThirdRoll();
    fixture.detectChanges();

    // assert
    const html = fixture.nativeElement;
    const thirdRoll = html.querySelector('#thirdRoll');
    expect(thirdRoll).toBeTruthy();
    const currentRound = html.querySelector('#current-round').textContent;
    expect(currentRound).toEqual('Current round: 10');
  });

  it('should hide the boxes after the 10th round', () => {
    // arrange
    const fixture = TestBed.createComponent(HomeComponent);
    fixture.componentInstance.currentRound = 10;
    fixture.componentInstance.firstRoll = 4;
    fixture.componentInstance.secondRoll = 3;

    // act
    fixture.componentInstance.onClick();
    fixture.detectChanges();

    // assert
    const html = fixture.nativeElement;
    const firstRoll = html.querySelector('#firstRoll');
    expect(firstRoll).toBeFalsy();

    const currentRound = html.querySelector('#current-round');
    expect(currentRound).toBeFalsy();
  });
});
