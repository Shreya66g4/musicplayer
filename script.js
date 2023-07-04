console.log("welcome to music");
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs = [
    {SongName: "Talking to the moon", filePath: "1.mp3", coverPath:"cover/1.jpeg"},
    {SongName: "Levitating", filePath: "2.mp3", coverPath:"cover/2.jpeg"},
    {SongName: "At my worst", filePath: "3.mp3", coverPath:"cover/3.jpeg"},
    {SongName: "Cheap Thrills", filePath: "4.mp3", coverPath:"cover/4.jpeg"},
    {SongName: "People", filePath: "5.mp3", coverPath:"cover/5.jpeg"},
    {SongName: "Yeh Raate Yeh Mausam", filePath: "6.mp3", coverPath:"cover/6.jpeg"},
    {SongName: "Gulabi Aankhen", filePath: "7.mp3", coverPath:"cover/7.jpeg"},
    {SongName: "Rooba Rooba", filePath: "8.mp3", coverPath:"cover/8.jpeg"},
    {SongName: "Dj tillu", filePath: "9.mp3", coverPath:"cover/9.jpeg"},
]

songItems.forEach((element, i) => {
    // element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("SongName")[0].innerText = songs[i].SongName;
})

masterPlay.addEventListener('click', () =>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.src = `${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].SongName;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
        Array.from(document.getElementsByClassName('fa-circle-play')).forEach((element)=>{
            element.addEventListener('click', (e)=>{
                makeAllPlays();
                songIndex = parseInt(e.target.id);
                e.target.classList.remove('fa-circle-play');
                e.target.classList.add('fa-circle-pause');
                audioElement.src = `${songIndex+1}.mp3`;
                masterSongName.innerText = songs[songIndex].SongName;
                audioElement.currentTime = 0;
                audioElement.play();
                gif.style.opacity = 1;
                masterPlay.classList.remove('fa-circle-play');
                masterPlay.classList.add('fa-circle-pause');
            })
        })
    }
    else{
        audioElement.src = `${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].SongName;
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})

audioElement.addEventListener('timeupdate', () => {

    Progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    myProgressBar.value = Progress;
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = () =>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}



document.getElementById('next').addEventListener('click', () => {
    if(songIndex>8){
        songIndex = 0
    }
    else{
        songIndex +=1;
    }
    audioElement.src = `${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].SongName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})

document.getElementById('previous').addEventListener('click', () => {
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -=1;
    }
    audioElement.src = `${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].SongName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})

function search_music() {
    let input = document.getElementById('searchbar').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('SongName');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].parentNode.style.display="none";
        }
        else {
            x[i].parentNode.style.display="block";                 
        }
    }
}