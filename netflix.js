let leftarr=document.querySelector('#left');
let rightarr=document.querySelector('#right');
let popular1=document.querySelector('.popular1');
let img=document.querySelector('#poster_image1');
let currentend=document.getElementsByClassName('.2s');
leftarr.addEventListener('click', () =>{
    popular1.scrollLeft += 270;
})
rightarr.addEventListener('click', () =>{
    popular1.scrollLeft -= 270;
})
let left=document.querySelector('#leftarr');
let right=document.querySelector('#rightarr');
let Artist=document.querySelector('.artist');
left.addEventListener('click',()=>{
    Artist.scrollLeft +=330;
})
right.addEventListener('click',()=>{
    Artist.scrollLeft -=330;
})
let wave=document.querySelector('.wave');
let start=document.querySelector('.started');
let music = new Audio('');
let songs=document.querySelectorAll('.music');
songs.forEach((song)=>{
    song.addEventListener('click', ()=>{
        console.log(song.id);
        if(music.paused||music.currentTime <=0){
            music.src=`audio/${song.id}.mp3`;
            wave.classList.toggle('active1');
            start.classList.remove('bi-play-fill');
            start.classList.add('bi-pause-fill');
            music.play();
        }
        else{
            music.src=`audio/${song.id}.mp3`;
            wave.classList.toggle('active1');
            start.classList.remove('bi-play-fill');
            start.classList.add('bi-pause-fill');
            music.play();
        }
        let t=song.children[0].src;
        img.src=t;
        let k=song.nextElementSibling.innerHTML;
        img.nextElementSibling.innerHTML=k;
})      
})
// for(song of songs){
//     song.addEventListener('click',(elem)=>{
//         let t=elem.target.id;
//         // music.src=`audio/${t}.mp3`;
//         console.log(t);
//         })
//         if( music.paused ||music.currentTime <=0 ){
//             wave.classList.toggle('active1');
//             start.classList.toggle('bi-play-fill');
//             start.classList.toggle('bi-pause-fill');
//             music.play()
//         }
//         else {
//             wave.classList.toggle('active1');
//             start.classList.toggle('bi-play-fill');
//             start.classList.toggle('bi-pause-fill');
//             music.pause();
//         }
// }
start.addEventListener('click',()=>{
    if( music.paused ||music.currentTime <=0 ){
        wave.classList.toggle('active1');
        start.classList.toggle('bi-play-fill');
        start.classList.toggle('bi-pause-fill');
        music.play();
    }
    else {
        wave.classList.toggle('active1');
        start.classList.toggle('bi-play-fill');
        start.classList.toggle('bi-pause-fill');
        music.pause();
    }
})

let select=document.querySelectorAll('.playlistplays');
// for(ong of select){
//     ong.addEventListener('click',async function(el){
//         console.dir(ong);
//         let t=await ong.id;
//         // music.src=`audio/${t}.mp3`;
//         // console.dir(ong);
//         console.log(t);
//     })
// }   

select.forEach((ong)=>{
    ong.addEventListener('click',()=>{
        console.log(ong.id);
        if(music.paused||music.currentTime <=0){
            music.src=`audio/${ong.id}.mp3`;
            wave.classList.toggle('active1');
            start.classList.remove('bi-play-fill');
            start.classList.add('bi-pause-fill');
            music.play();
        }
        else{
            music.src=`audio/${ong.id}.mp3`;
            start.classList.toggle('.active1');
            start.classList.remove('bi-play-fill');
            start.classList.add('bi-pause-fill');
            music.play();
        }
        music.addEventListener('timeupdate',()=>{
            let l=music.duration;
            currentend.innerText=l;
        })
        
        let t=ong.children[1].src;
        img.src=t;
        let k=ong.children[2].innerHTML;
        img.nextElementSibling.innerHTML=k;
    })
})




