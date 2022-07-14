'use strick';

// Imports
import { q, qa, CLICK_CLEANER_CODE } from './www/ux/dom.js';

// Variables
let stream = null,
    audio = null,
    video = null,
    chuncks = null,
    mixedstream = null,
    start_stream = q('.start_stream'),
    end_stream = q('.end_stream'),
    recorder = null;

// Dom Variables
const main = q('main');

// let classOrId = 'canvas';
// console.info(`root{
// }
// canvas{

//     --${classOrId}-display: block;

// }
// canvas{

//     background: #27293E;
//     display: var(--canvas-display);
//     flex: var(--canvas-flex);
//     justify-content: var(--canvas-justifyContent);
//     align-items: var(--canvas-alignItems);
//     column-gap: var(--canvas-columnGap);
//     row-gap: var(--canvas-rowGap);
//     grid: var(--canvas-grid);
//     grid-gap: var(--canvas-gridGap);
//     animation: none;
//     border: var(--canvas-border);
//     box-shadow: var(--canvas-boxShadow);
//     border-radius: var(--canvas-borderRadius);
//     color: var(--canvas-color);
//     cursor: var(--canvas-cursor);
//     clip: var(--canvas-clip);
//     font: var(--canvas-font);
//     filter: var(--canvas-filter);
//     transform: var(--canvas-transform);
//     transition: var(--canvas-transition);
//     text-align: var(--canvas-textAlign);
//     perspective: var(--canvas-perspective);
//     overflow: var(--canvas-overflow);
//     opacity: var(--canvas-opacity);

//     margin: var(--canvas-margin);
//     padding: var(--canvas-paddin);

//     position: var(--canvas-position);
//     top: var(--canvas-top);
//     left: var(--canvas-left);

//     min-height: var(--canvas-minHeigh);
//     max-height: var(--canvas-maxHeight);
//     min-width: var(--canvas-minWidth);
//     max-width: var(--canvas-maxWídth);
//     height: var(--canvas-height);
//     width: var(--canvas-width);

//     z-index: var(--canvas-zIndex);
// }

// `);


if (main == null) console.log('Gonna do it in hard way');
console.log('Good html practice!');

window.addEventListener('load', () => {

    const canvas = q('canvas');
    const snail = q('.snail');
    const ctx = canvas.getContext('2d');

    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    class Bar {
        constructor({ x, y, height, width, color, index }) {
            this.x = x;
            this.y = y;
            this.height = height;
            this.width = width;
            this.color = color;
            this.index = index;
        }
        update(micInput) {
            this.height = micInput;
        }
        draw({ context, volume }) {
            context.fillStyle = this.color;
            context.fillRect(this.x, this.y, this.height, this.width);
        }
    }

    const bar1 = new Bar({
        x: 50,
        y: 200,
        height: 300,
        width: 100,
        color: 'red',
        index: 1,
    });

    const animate = () => {
        
        ctx.clearRect(0, 0, canvas.height, canvas.width);
        // console.log('animate');
        bar1.draw({
            context: ctx,
            volume: 1,
        });
        // ..
        requestAnimationFrame(animate);
    }
    animate();

})




// const mdn = () => {
//     // Prefer camera resolution nearest to 1280x720.
//     const constraints = { audio: true, video: { width: 1280, height: 720 } };

//     navigator.mediaDevices.getUserMedia(constraints)
//     .then(function(mediaStream) {
//         console.log('video');

//       const video = document.querySelector('video');
//       video.srcObject = mediaStream;
//       video.onloadedmetadata = function(e) {
//         video.play();
//         console.log('v8deon playing');
//       };
//     })
//     .catch(function(err) { console.log(err.name + ": " + err.message); }); // always check for errors at the end.
// }





// ///////////////////// Video Recorder ///////////////////// //
// async function videoPLUSaudio_recorder() {
//     try {
//         stream = await navigator.mediaDevices.getUserMedia({
//             video: true
//         })
//         audio = await navigator.mediaDevices.getUserMedia({
//             audio: {
//                 echoCancellation: true,
//                 noiseSuppression: true,
//                 sampleRate: 44100
//             }
//         })
//         setupVideo();
//     } catch (err) {
//         console.error(err);
//     }
// }
// const setupVideo = () => {
//     if (!stream) console.warn('No Media is found or got any Streaming Source');
//     video = q('video');
//     video.srcObject = stream;
//     Video.play();
// }


// // Start Recording or Streaming
// const startStreamFunction = async () => {
//     await videoPLUSaudio_recorder();
//     if (!stream && !audio) console.warn('No Stream Available');
//     try {
//         mixedstream = new MediaStream([
//             ...stream.getTracks(),
//             ...audio.getTracks()
//         ])
//         recorder = new MediaRecorder(mixedstream);
//         recorder.ondataavailable = handleDataAvailable;
//         recorder.onstop = handleStop;
//         recorder.onstart = 200;
//         console.log('Recording has started...');
//     } catch (e) {
//         console.warn(e);
//     }
// }
// CLICK_CLEANER_CODE({
//     ELEMENT : start_stream,
//     FUNCTION : startStreamFunction
// })
// // End Recording or Streaming
// const endStreamFunction = async () => {
//     console.log('Stream Ended!');
// }
// CLICK_CLEANER_CODE({
//     ELEMENT : end_stream,
//     FUNCTION : endStreamFunction
// })



// Behave && Eruda console can handle it && Eruda says "I am gooddd"
let html = document.querySelector('body');
html.style.display = 'none';
// Browser
let td = document.querySelectorAll('a > div');
td.forEach((elements) => {
    console.log(elements.innerHTML);
});
