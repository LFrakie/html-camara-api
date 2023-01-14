// navigator.mediaDevices.
//   getUserMedia({ audio: false, video: true })
//   .then((stream) => {
//     console.log(stream)

//     let video = document.getElementById('video')

//     video.srcObject = stream

//     })
//   .catch((err) => console.log(err));

// Font: https://www.youtube.com/watch?v=k8h4Y-61FMk&ab_channel=ProCodeTv

function camActive(){
navigator.mediaDevices.
  getUserMedia({ audio: false, video: true })
  .then((stream) => {
    console.log(stream)

    let video = document.getElementById('video')

    video.srcObject = stream

    })
  .catch((err) => console.log(err));
}
