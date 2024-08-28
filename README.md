# 🎳 Bowling App 🎳

![GitHub Issues](https://img.shields.io/github/issues/Jagoda11/Angular-Bowling-Scorekeeper?style=flat-square&color=blue)
![Last Commit](https://img.shields.io/github/last-commit/Jagoda11/Angular-Bowling-Scorekeeper/master?style=flat-square&color=green)
![Build Status](https://github.com/Jagoda11/Angular-Bowling-Scorekeeper/actions/workflows/npm-update.yml/badge.svg?branch=master)


## 📝 Description 📝
A game consists of ten frames. Frame 1-9 are composed of two rolls. 
Frame 10 can be composed of up to three rolls depending on if the first rolls in the frame is a strike or a spare. 

The game has 2 inputs for each roll and it shows the current round and the score (and the previous score for all rounds).

If there are input errors : you will get an error message when you click submit.
The game ends after 10 rounds. 🏁

## 🚀 Running the application 🚀

Run `npm start` and navigate to `http://localhost:4200/`.

## 🏗️ Build 🏗️

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory. 
Use the `npm run build-prod` command for a production build.

## 🧪 Running unit tests 🧪

Run `npm run test` to execute the unit tests.
Run `npm run test-single-run` to execute the unit tests once. 

## 🔄 Dependency Update and Vulnerability Scan Workflow 🔄

This project includes an automated workflow that keeps dependencies up-to-date and checks for vulnerabilities:

- **Scheduled Updates**: Runs daily at 2 AM UTC to automatically update npm dependencies for the project.
- **Manual Trigger**: You can manually trigger the workflow via GitHub's Actions tab.
- **Dependency Management**: 
  - Uses `npm-check-updates` to update all dependencies to their latest versions.
  - Installs dependencies with `--legacy-peer-deps` to handle peer dependency conflicts.
- **Vulnerability Scanning**: Integrates with Debricked to scan dependencies for vulnerabilities using the Debricked CLI.
- **Automated Commits and Pushes**: Commits changes if dependencies are updated and pushes them to the `master` branch.

This workflow helps maintain secure, up-to-date dependencies with minimal manual intervention, enhancing both security and stability in the development process.