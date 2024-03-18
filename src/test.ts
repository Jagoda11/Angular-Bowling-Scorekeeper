// This file is required by karma.conf.js and loads recursively all the .spec and framework files

import 'zone.js/testing';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);

// Then we find all the tests.
const context = [
  require('./app/home/home.component.spec.ts'),
  require('./app/new-game/new-game.component.spec.ts'),
  require('./app/previous-scores/previous-scores.component.spec.ts'),
  require('./app/app.component.spec.ts'),
  require('./app/score-calculator.service.spec.ts'),
  // add more require statements for each of your test files...
];

// And load the modules.
context.forEach((module) => module);
