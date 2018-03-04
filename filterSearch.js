var intervalTimer = 250; //timer in milliseconds for how often script is run. Decrease to swipe faster.
a = setInterval(
  function(){
    var like = document.getElementsByClassName("recsGamepad__button--like"); //like button
    var dislike = document.getElementsByClassName("recsGamepad__button--dislike"); //dislike button
    var name = document.getElementsByClassName("Flxs($flx1) Flw(w) Ell"); //name of tinder profiles
    var age = document.getElementsByClassName("Whs(nw)"); //age of tinder profile in focus
    //var outOfMatches = document.getElementsByClassName("modalManager StretchedBox CenterAlign Bgc(#000.68)"); //element only visible if you're out of matches


    //change both "filterByName" and "filterByAge" if you wish to filter by both name and age.
    var filterByName = false; //change to true if you wish to filter by name.
    var filterByAge = false; //change to true if you wish to filter by age.

    var desiredName = "Foo"; //Foo is placeholder name, change this to whatever name you wish to filter. (Remember to capitalize first letter)
    var desiredAge = "69"; //69 is placeholder age, change this to whatever age you wish to filter.
   
    if(filterByName === true && filterByAge === true) {
        if(name[1].innerHTML === desiredName && age[4].innerHTML.replace(/[^\d.]/g,'') === desiredAge) { 
            console.log("Found a fitting match: " + name[1].innerHTML + " at " + age[4].innerHTML.replace(/[^\d.]/g,'') + " years old. Currently filtering by both name and age");
        }
        else {
            console.log("Disliked " + name[1].innerHTML + " at " + age[4].innerHTML.replace(/[^\d.]/g,'') + " years old.");
            dislike[0].click();
        }
    }
    else if(filterByName === true) {
        if(name[1].innerHTML === desiredName) { 
            console.log("Found a fitting match: " + name[1].innerHTML + " at " + age[4].innerHTML.replace(/[^\d.]/g,'') + " years old. Currently filtering by name");
        }
        else {
            console.log("Disliked " + name[1].innerHTML + " at " + age[4].innerHTML.replace(/[^\d.]/g,'') + " years old.");
            dislike[0].click();
        }    
    }
    else if(filterByAge === true) {
        if(age[4].innerHTML.replace(/[^\d.]/g,'') === desiredAge) { 
            console.log("Found a fitting match: " + name[1].innerHTML + " at " + age[4].innerHTML.replace(/[^\d.]/g,'') + " years old. Currently filtering by age");
        }
        else {
            console.log("Disliked " + name[1].innerHTML + " at " + age[4].innerHTML.replace(/[^\d.]/g,'') + " years old.");
            dislike[0].click();
        }
    }
    else {
        console.log("Liked " + name[1].innerHTML + " at " + age[4].innerHTML.replace(/[^\d.]/g,'') + " years old.");
        like[0].click();
    }
    
},intervalTimer)
