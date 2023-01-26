let progress = document.getElementById('progress')
let song = document.getElementById('song')
let ctrlIcon = document.getElementById('icon')
let rptIcon = document.getElementById('rptIcon')

let start = document.getElementById('start')
let end = document.getElementById('end')


console.log(song.currentTime)


//Loading Music and setting slider time
song.onloadedmetadata =function(){
    progress.max = song.duration
    progress.value = song.currentTime

    // start.textContent = progress.value
    // end.textContent = Math.floor(progress.max /1)
}

//Pause and play function

function pausePlay(){
    if(ctrlIcon.classList.contains('fa-pause')){
        song.pause();
        ctrlIcon.classList.remove('fa-pause')
        ctrlIcon.classList.add('fa-play')

    }else{
        song.play()
        ctrlIcon.classList.add('fa-pause')
        ctrlIcon.classList.remove('fa-play')
    }
}

//Updating slider

if(song.play()){
    setInterval(()=>{
        progress.value = song.currentTime

        start.textContent = progress.value
    // end.textContent = Math.floor(progress.max /1)
        

    },500)
}
//Play song on slider click
progress.onchange = ()=>{
    song.play()
    song.currentTime = progress.value
    ctrlIcon.classList.add('fa-pause')
    ctrlIcon.classList.remove('fa-play')
}

function repeat(){
    if(rptIcon.classList.contains('fa-repeat')){
        rptIcon.classList.remove('fa-repeat')
        rptIcon.classList.add('fa-arrows-spin')
        song.loop = true
    }else{
        rptIcon.classList.remove('fa-arrows-spin')
        rptIcon.classList.add('fa-repeat')
        song.loop = false
    }
}