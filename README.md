# MOVIE HISTORY
## Objectives
This project was intended for students to familiarize themselves with Firebase, ERD's and CRUD functionality. 
## Description
The user signs in and the home page displays a list of movies in card. The create functionality allows to the user to add new movies when they click the *ADD MOVIES* button. This is updated in the movies collection on firebase and displays accordingly on the home page.
### Screenshot
![Home page](https://raw.githubusercontent.com/okaformark/movie-history/master/src/images/home-page.PNG)
![Add Movie Form](https://raw.githubusercontent.com/okaformark/movie-history/master/src/images/add-movie-form.PNG)
![User adds movie](https://raw.githubusercontent.com/okaformark/movie-history/master/src/images/addsMovie.PNG)
![Movie Added](https://raw.githubusercontent.com/okaformark/movie-history/master/src/images/movieAdded.PNG)
The user can rate the movie which adds to the UserMovie collection on firebase and gives it a rating.
### Screenshot
![Rate Movie Button](https://raw.githubusercontent.com/okaformark/movie-history/master/src/images/ratemovie.PNG)

If the User wishes to delete a movie, the *DELETE MOVIE* button deletes the movie from the movie collection on firebase and from the home page
 ### Screenshots
 ![delete movie button](https://raw.githubusercontent.com/okaformark/movie-history/master/src/images/deletemovie.PNG)
 ![Movie deleted](https://raw.githubusercontent.com/okaformark/movie-history/master/src/images/moviedeleted.PNG)

A user can add a movie to their watchlist by clicking the *ADD TO WATCHLIST* button which updates the userMovie collection on firebase. If users want to view their watchlist, clicking the *MY MOVIES* button will display all the movies in their watchList.
### Screenshot
![Add to watchlist](https://raw.githubusercontent.com/okaformark/movie-history/master/src/images/addtowatchlst.PNG)
![movie adds to watchlist](https://raw.githubusercontent.com/okaformark/movie-history/master/src/images/movieaddedtowatchlst.PNG)

If a user wishes to remove a movie from their watchlist, they can click on the *REMOVE FROM WATCHLIST* button with updates on firebase and removes the movie from display accordingly
![removes from watchlist](https://raw.githubusercontent.com/okaformark/movie-history/master/src/images/removefromwatchlist.PNG)


## Technologies Used
- HTML, SCSS, and JavaScript
- axios.get, axios.post, axios.delete and axios.put
- Firebase

## Installation Instructions
- Clone this repository ``` $ git@github.com:okaformark/Movie-History.git```
- At the root of the project run ```$ npm install```

## How to Run
- In the terminal, type ```$ npm start``` to run the webpage. 
- To make a production build of this project, type ```$ npm run build```. This will create a folder called ```build``` with all of the minified codes you need.
- Link to firebase [Here](https://movie-history-2e70e.firebaseapp.com)

## Author 
Mark Okafor
