let playBtn = document.getElementById('play-btn');
let progress = document.getElementById('progress');
let songList = document.getElementById('song-list');
let nextbtn = document.getElementById('next-btn');
// let imageContainer = document.getElementById('image-container');
// let songImage = document.getElementById('img');

let songs = [
    {
        name: 'Faded',
       
        id: 1
    },
    {
         name: 'Faasle',
        
         id: 2
    },
    {
         name: "Alag-asmaan",
        
         id: 3
    },
    {
         name: 'wo din bhi kya din',
       
         id:4
    }
]

let audio = new Audio("./assets/song1.mp3")

//show the song list in the UI

for(let song of songs){
    let li = document.createElement('li')
    li.innerText = song.name;
    li.setAttribute('id', song.id)
    li.classList.add('song-item')
    songList.append(li);
}

//play btn ka icon badlo and gaana chalao
playBtn.addEventListener('click',()=>{
    audio.paused ? audio.play(): audio.pause()
    if(playBtn.children[0].classList.contains('fa-play')){
        playBtn.children[0].classList.remove('fa-play')
        playBtn.children[0].classList.add('fa-pause')
    }else{
    playBtn.children[0].classList.remove('fa-pause')
    playBtn.children[0].classList.add('fa-play') 
    }
})

// songImage.src = selectedSong.img;

//current time ke hisab se range chale

audio.addEventListener('timeupdate' , function(){
    let currentProgress = audio.currentTime * 100 / audio.duration;
    progress.value = currentProgress;
})


// drag krne se gaana chale
progress.addEventListener('change' , function(){
    let updatedTime = audio.duration * progress.value / 100;
    audio.currentTime = updatedTime;
})

// btn dabao gaana chalaoo
songList.addEventListener('click' , function(event){
    let songId = event.target.getAttribute('id');
    audio.src = `./assets/song${songId}.mp3`;
    audio.currentTime = 0;
    audio.play();
    playBtn.children[0].classList.add('fa-pause');
    playBtn.children[0].classList.remove('fa-play');
})

// nextbtn.addEventListener('click', function())



















