/*Computer Engineering Student Teaching l self to code my first projects*/

/*Modal show, hides the modal while modal hide shows the modal*/
//$(document).ready(function() 
//{ 
//$("#myModal").modal("hide"); 
//}); 


/*Jquery function to animate heading*/
$(document).ready(function(){
$("h6").animate({
color: "white"
});
});

/*function to control image1*/
function salmanda() {
document.getElementById("image").src="electron.gif";
}

/*function to control image2*/
function salmanda2() {
document.getElementById ("image").src="Royal.png";
}

/*function to control modal*/
$(document).ready(function() 
{ 
$("#myModal").modal("show"); 
}); 

/*code to control audio files*/
var _audio = document.getElementById("idAudio");

  var _songList = [
  {
  url: "https://drive.google.com/file/d/1SuT4Q51lhaN3eyL1XAZjwrqt8Ep80r8a/view?usp=drivesdk
    "
  },
   {
  url: "Sessions/dancehallMix2.mp3"
  },
  {
  url: "Sessions/DancehallMix4.mp3"
  },
  {
   url: "Sessions/PopcaanMix.mp3"
  },
  {
  url: "Sessions/NamizaDjSpydah.mp3"
  },
  {
  url: "Sessions/dancehallMix.mp3"
  },
  ];

/*function to control audio play*/
  _currentSong = 0;
  _audio.src = _songList[_currentSong].url;

  function playSong()
  {
   _audio.play();
  }

  function pauseSong()
  {
   _audio.pause();
  }

  function stopSong()
  {
   _audio.pause();
   _audio.currentTime = 0;
  }

  function nextSong()
  {
   if (_currentSong == _songList.length - 1)
   {
    alert("End of the Programme playlist, please play from first");
    _currentSong = 0;
   }
   else
   {
    _currentSong++;
   }
   _audio.src = _songList[_currentSong].url;
   _audio.play();
  }

  function prevSong()
  {
   if (_currentSong == 0)
   {
    alert("Starting of the Programme playlist, you can play from last.");
    _currentSong = _songList.length - 1;
   }
   else
   {
    _currentSong--;
   }
   _audio.src = _songList[_currentSong].url;
   _audio.play();
  }

  _audio.addEventListener("timeupdate", function()
  {

   var totDuration = Math.floor(_audio.duration);
   durationR.max = totDuration;

   var currentTime = Math.floor(_audio.currentTime);
   durationR.value = currentTime;

   lblDuration.innerText = currentTime + "/" + totDuration;
  });

  function seekSong()
  {
   var duration = durationR.value;
   _audio.currentTime = duration;
  }

  function changeVolume()
  {
   _audio.volume = idVolume.value;

  }
  
  /*form validation*/
  function validateform(){
  var Name =document.MyForm.Name.value;
  var Pname =document.MyForm.Pname.value;
  var Song =document.MyForm.Song.value;
  
  if ( Name==null || Name=="" ){
  alert( "Name Can't be empty" );
  return false;
  }
  else if( Pname==null || Pname==""){
  alert( "Project Name can't be empty" );
  return false;
  }
  else if( Song==null || Song=="" ){
  alert( "You haven't selected any Song" );
  return false;
  }
  }
  
  
