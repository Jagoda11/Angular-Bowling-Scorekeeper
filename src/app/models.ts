export class Game {
  frames: Frame[] = [];
}

export class Frame {
  first: number;
  second: number;
  third?: number; //optional parameter
}
