# AngularCodeTest

This project will be a Song Lyrics finder app for a spotify playlist. The songs list is provided for you. You will need to implement displaying this list as well as the lyrics. Use the public lyrics API to obtain the lyrics info. We are aware that you wont get everything done, but try to get as much done as possible. Please do not spend more than 3 hours on this project. 

Objectives:

1. Display the list of songs in the songs.ts constant. (Include Cover Art, artist, and album information)
2. When you click on one of the songs, route to a new page '/lyrics', and display the lyrics of the selected song
   1. Use the api https://lyricsovh.docs.apiary.io/#reference/0/lyrics-of-a-song/search to get the lyrics from the song.
   2. Provide a way to get back to the list of songs.
3. Implement angular material - Include a Header, Sidenav, and use Cards for the List of songs. (A MaterialModule is provided)
4. If you have time, make it responsive
5. If you have time implement unit tests

To deploy the app, create a new branch off of master and name it with your name, push the branch to github for review.

## API Documentation

Here is the documentation for the song api: https://lyricsovh.docs.apiary.io/#reference/0/lyrics-of-a-song/search its pretty self explanatory, and you can use the online explorer to try it out.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
