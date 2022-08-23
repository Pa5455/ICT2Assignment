
# ICT Skills 2 Assignment.

Name: Patrick Curran

## Overview.

I did not get very far with this assignment. In addition to the movies lab app, I have added a new list of movies using the top_rated movies api. Originally I had popular movies but soon realied that the same moveies as the discover list were been shown, so did a change to top_rated. Navigation bar at the top updated to allow user to click into the top_rated movies, I would call these popular as well.

I have attempted some code to get the actors or person into the app follwing along the lines of the movie list but nothing is rendering. Just could not get the relevant movie cast to link up with selected movie, I left it with the api call but no other code saved. 

In all if I can get enough marks out of this assignment to get over the 40% over all mark combined with lab work then I will be happy. 

 
+ Popular movies added
+ list of production companies added (movies details)
+ countries fixed (movie details)
+ Some attempt at getting popular peopple set up but not working


## Setup requirements.

You will need to create an env file and use your api key for TMDB data base, set your api key REACT_APP_TMDB_KEY so that REACT_APP_TMDB_KEY="your api".
You will need to run an npm install 
To run the app then npm start and it will work on local host 3000 route.  

## App Design.

### Routing/Navigation.

+Route path="/persons/:id" element={<ActorsPage/>} />
+Route path="/movies/popularMovies" element={<PopularMovies/>} />


### Views/Pages.




>Lists movies from the popular movies api 

![][d1]



>Shows detailed information on a specific movie
![][d2]



## Caching.


+ Top_rated movies

![][caching]

## Independent learning (if relevant),

I was not aimimg high this summer as just had bare minimum availible time and had a hard time linking even getting the basics right.  Hopefully will get past the module other wise I will have to do it again next summer. 

[d1]: ./public/assets/top_rated.png
[d2]: ./public/assets/details_updated.png
[caching]: ./public/assets/caching.png