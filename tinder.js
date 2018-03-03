var intervalTimer = 500; //timer in milliseconds for how often script is run. Decrease to swipe faster.
a = setInterval(
  function(){
    var like = document.getElementsByClassName("recsGamepad__button--like"); //like button
    var dislike = document.getElementsByClassName("recsGamepad__button--dislike"); //dislike button
    var name = document.getElementsByClassName("Flxs($flx1) Flw(w) Ell"); //name of tinder profiles
    var outOfMatches = document.getElementsByClassName("modalManager StretchedBox CenterAlign Bgc(#000.68)"); //element only visible if you're out of matches

    if(name[1].innerHTML === "Foo") { //foo is placeholder name, change this to whatever name you wish to filter. (Remember to put capital first letter)
        console.log("Liked " + name[1].innerHTML)
        like[0].click();
    }
    else {
        console.log("Disliked " + name[1].innerHTML);
        dislike[0].click();
        console.log(intervalTimer);
    }

    /***
    **  Implement age filter
    **  Implement outOfMatches functionality (native js, check if div exists)
    **/

},intervalTimer)
