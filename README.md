# Automatically swipe through tinder with filters
* Filter by name
* Filter by age

## How to run
1. Open filterSearch.js
2. Copy code
3. Head over to [Tinder | Swipe. Match. Chat.](https://tinder.com/)
4. Log in and right click anywhere on the white background and select *Inspect Element* in the pop-up window.
5. Click the console tab and paste in code.
6. Decide what kind of filtering you want. Change true/false-statement of filterByName/filterByName to what you wish to filter by.
7. Change the placeholder values for desiredName and desiredAge. Variables will only be taken into account if filters are activated (See last step)
8. Hit enter and watch the magic unfold!

As of latest version, the script will halt when it finds a matching result based on the filters. To continue searching, hit like or dislike on the matching profile, and the script will continue.

### Example filter (filtering by both name and age)
   var filterByName = true; //found on line 12
   var filterByAge = true;  //found on line 13
   
   var desiredName = "Barack";  //found on line 15 
   var desiredAge = "56"; //found on line 16
