import { Component, OnInit } from '@angular/core';
import { Frame, Game } from '../models';
import { ScoreCalculatorService } from '../score-calculator.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {
  firstRoll: number;
  secondRoll: number;
  thirdRoll: number;
  showThirdRoll : boolean = false;
  game: Game; // custom type Game
  isGameOver = false;
  hasError = false;
  currentRound: number;
  result = { score: 0 }; // object with a property called score which is a number
  allScores = [];

  constructor(private calc: ScoreCalculatorService) {
    this.createNewGame();
  }

  ngOnInit(): void {}

  validate() {
    //checking that the first and second roll are numbers
    if (
      !Number.isInteger(this.firstRoll) ||
      !Number.isInteger(this.secondRoll)
    ) {
      return false;
    }
    //checking range of first and second roll
    if (
      this.firstRoll < 0 ||
      this.firstRoll > 10 ||
      this.secondRoll < 0 ||
      this.secondRoll > 10 ||
      this.firstRoll + this.secondRoll > 10
    ) {
      return false;
    }
    //checking third Roll

    if (this.showThirdRoll) {
      if (!Number.isInteger(this.thirdRoll)) {
        return false;
      }
      if (this.thirdRoll < 0 || this.thirdRoll > 10) {
        return false;
      }
    }
    return true;
  }

  onClick() {
    //validating that the input is not more than 10
    this.hasError = false;
    if (!this.validate()) {
      this.hasError = true;
      return;
      //return will stop the execution of the function
    }

    const frame: Frame = {
      first: this.firstRoll,
      second: this.secondRoll,
      third: this.thirdRoll,
    };
    console.log(this.firstRoll, this.secondRoll);
    this.game.frames.push(frame);
    //gets used in bowling temporary address
    this.result = this.calc.calculateScore(this.game);
    this.allScores.push({
      round: this.currentRound,
      score: this.result.score,
    });
    this.firstRoll = undefined;
    this.secondRoll = undefined;
    this.thirdRoll = undefined;
    this.currentRound++;
    if (this.currentRound === 11) {
      this.isGameOver = true;
    }
  }

  evaluateThirdRoll() {
    if (this.currentRound !== 10) {
      return;
    }
    if (this.firstRoll === 10 || this.firstRoll + this.secondRoll === 10) {
      this.showThirdRoll = true;
    } else {
      this.showThirdRoll = false;
    }
  }

  createNewGame() {
    this.firstRoll = undefined;
    this.secondRoll = undefined;
    this.thirdRoll = undefined;
    this.showThirdRoll = false;
    this.game = new Game();
    this.isGameOver = false;
    this.hasError = false;
    this.currentRound = 1;
    this.result = { score: 0 };
    this.allScores = [];
  }
}
