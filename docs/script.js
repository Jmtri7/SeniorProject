posts = [

{
    "subject" : "My First Post",
    "date" : "10/20/2020",
    "message" : "This is my first post.",
    "img" : "",
    "video" : "",
},

{
    "subject" : "Bows & Arrows",
    "date" : "10/21/2020",
    "message" : "I love it when my friends help me test new features!",
    "img" : "testing.PNG",
    "video" : "",
},

{
    "subject" : "Project Status Update #4",
    "date" : "10/22/2020",
    "message" : "<b>Be sure to full-screen the video before pressing play.</b>",
    "img" : "",
    "video" : "update4.mp4",
},

{
    "subject" : "Mini-update #1",
    "date" : "10/28/2020",
    "message" : "Adding some new flowers and trees to the world.",
    "img" : "plants1.PNG",
    "video" : "",
},

{
    "subject" : "Mini-update #2",
    "date" : "11/5/2020",
    "message" :
      "Added portals that allow the player to travel between selectively loaded worlds."
      + "<br><br><b>Be sure to full-screen video before pressing play.</b>"
    ,
    "img" : "",
    "video" : "modularMaps1.mp4",
},

{
    "subject" : "Project Status Update #5",
    "date" : "11/6/2020",
    "message" :
      "In this update I demonstrate the new portal system and new areas that it takes the player to. I travel to a tavern, a scorpion infested desert island, and a haunted crypt."
      + "<br><br><b>Be sure to full-screen video before pressing play.</b>"
    ,
    "img" : "",
    "video" : "update5.mp4",
},

{
    "subject" : "Project Status Update #6",
    "date" : "11/20/2020",
    "message" :
      "This update expands the world, with new areas, creatures, music, and sounds."
      + " It features a short fight with an orc patrol on the way to a mystical forest home to spiders and fireflies."
      + " Legends say that the forest contains a portal to another world that only appears at midnight."
      + " The day/night cycle is sped up for demonstration purposes."
      + "<br><br><b>Be sure to full-screen video before pressing play.</b>"
    ,
    "img" : "",
    "video" : "update6.mp4",
},

{
    "subject" : "Mini-update #3",
    "date" : "11/26/2020",
    "message" :
      "A preview of the magical world beyond ours and the new music there."
      + "<br><br><b>Be sure to full-screen video before pressing play.</b>"
    ,
    "img" : "",
    "video" : "mushroomForest.mp4",
},

{
    "subject" : "Final Demo",
    "date" : "12/4/2020",
    "message" :
      "This video comemorates a semester of work on my senior project. ENJOY!"
      + "<br><br><b>Be sure to full-screen video before pressing play.</b>"
    ,
    "img" : "",
    "video" : "finalDemo.mp4",
},

]

newline = '<br><br>';

postDisplays = document.getElementsByClassName("postDisplay");
var post = document.createElement('DIV');
for (i = posts.length - 1; i >= 0; i--) {

  postString = '';

  postString += '<div class="cols post">';

  postString +=
  '<div class="text">'
  + posts[i].subject 
  + newline 
  + posts[i].date 
  + newline
  + posts[i].message
  + newline
  + '</div>'
  ;

  if(posts[i].img != "") {
    postString += 
    '<img class="media" src="media/'
    + posts[i].img 
    + '">'
  }

  if(posts[i].video != "") {
    postString += '<video class="media" controls>'
    postString += '<source src="media/' + posts[i].video + '" type="video/mp4">'
    postString += '</video>'
  }

  postString += newline;

  postString += '</div>';

  post.innerHTML = postString;

	for (j = 0; j < postDisplays.length; j++) {
  		postDisplays[j].innerHTML += post.innerHTML;
	}
}