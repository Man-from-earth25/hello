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
// // Behave && Eruda console can handle it && Eruda says "I am gooddd"
// let html = document.querySelector('body');
// html.style.display = 'none';
// // Browser
// let td = document.querySelectorAll('a > div');
// td.forEach((elements) => {
//     console.log(elements.innerHTML);
// });







