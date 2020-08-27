import { TestBed } from '@angular/core/testing';

import { ScoreCalculatorService } from './score-calculator.service';
import { Game } from './models';

describe('ScoreCalculatorService', () => {
  let service: ScoreCalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScoreCalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should calculate correct score', () => {
    // arrange // create a game that will be tested
    const game: Game = {
      frames: [
        {
          first: 1,
          second: 2,
        },
      ],
    };
    // act // calculate the score for the game we just created
    const result = service.calculateScore(game);

    // assert // make sure that the result of score calculator service is correct
    expect(result.score).toBe(3);
  });

  it('should calculate correct score for a strike', () => {
    // arrange // create a game that will be tested
    const game: Game = {
      frames: [
        {
          first: 10,
          second: 0,
        },
        {
          first: 5,
          second: 4,
        },
      ],
    };

    // act // calculate the score for the game we just created
    const result = service.calculateScore(game);

    // assert // make sure that the result of score calculator service is correct
    expect(result.score).toBe(28);
  });

  it('should calculate correct score for a strike and no next frame', () => {
    // arrange // create a game that will be tested
    const game: Game = {
      frames: [
        {
          first: 4,
          second: 5,
        },
        {
          first: 10,
          second: 0,
        },
      ],
    };

    // act // calculate the score for the game we just created
    const result = service.calculateScore(game);

    // assert // make sure that the result of score calculator service is correct
    expect(result.score).toBe(19);
  });

  it('should calculate correct score for a spare', () => {
    // arrange // create a game that will be tested
    const game: Game = {
      frames: [
        {
          first: 5,
          second: 5,
        },
        {
          first: 5,
          second: 4,
        },
      ],
    };

    // act // calculate the score for the game we just created
    const result = service.calculateScore(game);

    // assert // make sure that the result of score calculator service is correct
    expect(result.score).toBe(24);
  });

  it('should calculate correct score for a spare and no next frame', () => {
    // arrange // create a game that will be tested
    const game: Game = {
      frames: [
        {
          first: 4,
          second: 5,
        },
        {
          first: 5,
          second: 5,
        },
      ],
    };

    // act // calculate the score for the game we just created
    const result = service.calculateScore(game);

    // assert // make sure that the result of score calculator service is correct
    expect(result.score).toBe(19);
  });

  it('should calculate correct score for a spare and a strike', () => {
    // arrange // create a game that will be tested
    const game: Game = {
      frames: [
        {
          first: 5,
          second: 5,
        },
        {
          first: 10,
          second: 0,
        },
        {
          first: 7,
          second: 1,
        },
      ],
    };

    // act // calculate the score for the game we just created
    const result = service.calculateScore(game);

    // assert // make sure that the result of score calculator service is correct
    expect(result.score).toBe(46);
  });

  it('should calculate correct score for 10 frames with a third roll', () => {
    // arrange // create a game that will be tested
    const game: Game = {
      frames: [
        { first: 1, second: 1 },
        { first: 1, second: 1 },
        { first: 1, second: 1 },
        { first: 1, second: 1 },
        { first: 1, second: 1 },
        { first: 1, second: 1 },
        { first: 1, second: 1 },
        { first: 1, second: 1 },
        { first: 1, second: 1 },
        { first: 10, second: 0, third: 4 },
      ],
    };

    // act // calculate the score for the game we just created
    const result = service.calculateScore(game);

    // assert // make sure that the result of score calculator service is correct
    expect(result.score).toBe(32);
  });

  it('should calculate correct score for 10 frames without a third roll', () => {
    // arrange // create a game that will be tested
    const game: Game = {
      frames: [
        { first: 1, second: 1 },
        { first: 1, second: 1 },
        { first: 1, second: 1 },
        { first: 1, second: 1 },
        { first: 1, second: 1 },
        { first: 1, second: 1 },
        { first: 1, second: 1 },
        { first: 1, second: 1 },
        { first: 1, second: 1 },
        { first: 2, second: 2 },
      ],
    };

    // act // calculate the score for the game we just created
    const result = service.calculateScore(game);

    // assert // make sure that the result of score calculator service is correct
    expect(result.score).toBe(22);
  });
});
