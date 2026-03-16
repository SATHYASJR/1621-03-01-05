const params = new URLSearchParams(window.location.search);
const song = params.get("song");

const songs = {

first:{
title:"The First Date",
track:"Tracks/The First Date.mp3",
image:"Images/The First Date.jpeg",
lyrics:"Lyrics/The First Date Lyrics.txt"
},

little:{
title:"The Little Girl",
track:"Tracks/The Little Girl.mp3",
image:"Images/The Little Girl.jpeg",
lyrics:"Lyrics/The Little Girl Lyrics.txt"
},

summer:{
title:"The Summer U Turned Pretty",
track:"Tracks/The Summer U turned Pretty.mp3",
image:"Images/The Summer U Turned Pretty.jpeg",
lyrics:"Lyrics/The Summer U Turned Pretty Lyrics.txt"
},

walk:{
title:"You Walk In",
track:"Tracks/You Walk in.mp3",
image:"Images/You Walk in.jpeg",
lyrics:"Lyrics/You Walk in Lyrics.txt"
}

}

const current = songs[song];

document.getElementById("songTitle").innerText = current.title;
document.title = current.title;
document.getElementById("songImage").src = current.image;

document.getElementById("audioPlayer").src = current.track;

fetch(current.lyrics)
.then(res => res.text())
.then(data => {
document.getElementById("lyricsBox").innerText = data;
});