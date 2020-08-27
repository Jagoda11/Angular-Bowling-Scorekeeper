import { Injectable } from '@angular/core';
import { Game } from './models';

@Injectable({
  providedIn: 'root',
})
export class ScoreCalculatorService {
  constructor() {}

  // temporary address for the game object that we are calculating the score for
  calculateScore(bowling: Game) {
    let result = 0;

    for (let i = 0; i < bowling.frames.length; i++) {
      const frame = bowling.frames[i]; // current frame
      result += frame.first + frame.second;

      // strike
      //checking that the i+1 is less than the number of frames
      if (frame.first === 10 && i + 1 < bowling.frames.length) {
        const nextFrame = bowling.frames[i + 1];
        result += nextFrame.first + nextFrame.second;
      }
      // spare
      else if (frame.first + frame.second === 10 && i + 1 < bowling.frames.length) {
        result += bowling.frames[i + 1].first;
      }
    }

    //10 frames and 10th frame has a third roll
    if(bowling.frames.length === 10 && Number.isInteger(bowling.frames[9].third)){
      result+= bowling.frames[9].third;
    }

    return { score: result };
  }
}
