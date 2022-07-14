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
const mainChild = qa('main > *,.hackIn_songs_visualizer > *');


if (main == null) console.log('Gonna do it in hard way');
console.log('Good html practice!');
const multiverse_dom = (special,css,js) => { 
    const mainChildren = main.children;
    const mainChildrenClass = main.children.className;
    let mainChildrenLength = main.children.length;
    if(mainChildrenLength < 1) console.log('less than 1');
    console.log(mainChildrenLength);
    
    mainChild.forEach((mainChilds) => {
        // console.log(mainChilds.className);
        
        // Css Variable snippet
        let cssRoot = `
            ${mainChilds.className}{
                --${mainChilds.className}-backGround = #FFFFFF;
                --${mainChilds.className}-display = block;
                --${mainChilds.className}-flex = 100% / 100%;
                --${mainChilds.className}-alignItems = left;
                --${mainChilds.className}-justifyContent = left;
                --${mainChilds.className}-columnGap = 0px;
                --${mainChilds.className}-rowGap = 0px;
                --${mainChilds.className}-grid = 1fr / 1fr;
                --${mainChilds.className}-gridGap = 0px;
                --${mainChilds.className}-animation = animation 1s linear infinite ;
                --${mainChilds.className}-border = none;
                --${mainChilds.className}-boxShadow = none;
                --${mainChilds.className}-borderRadius = none;
                --${mainChilds.className}-color = #000000;
                --${mainChilds.className}-cursor = pointer;
                --${mainChilds.className}-clip = none;
                --${mainChilds.className}-font = 1rem bold 900;
                --${mainChilds.className}-filter = brightness(150%);
                --${mainChilds.className}-transform = none;
                --${mainChilds.className}-transition = all 1s linear infinite;
                --${mainChilds.className}-textAlign = left;
                --${mainChilds.className}-perspective = none;
                --${mainChilds.className}-overflow = hidden;
                --${mainChilds.className}-opacity = 1;
                
                --${mainChilds.className}-margin = 0 0 0 0;
                --${mainChilds.className}-padding = 0 0 0 0;
                
                --${mainChilds.className}-position = static;
                --${mainChilds.className}-top = 0;
                --${mainChilds.className}-left = 0;
                
                --${mainChilds.className}-minHeight = 25px;
                --${mainChilds.className}-maxHeight = 100vh;
                --${mainChilds.className}-minWidth = 360px;
                --${mainChilds.className}-maxWídth = 100%;
                --${mainChilds.className}-height = 50px;
                --${mainChilds.className}-width = 50px;
                
                --${mainChilds.className}-zIndex = 1;
                
            }
        `;
        // Css Style snippet
        let cssStyle = `
            ${mainChilds.className}{
                background: var(--${mainChilds.className}-backGround);
                display: var(--${mainChilds.className}-display);
                flex: var(--${mainChilds.className}-flex);
                justify-content: var(--${mainChilds.className}-justifyContent);
                align-items: var(--${mainChilds.className}-alignItems);
                column-gap: var(--${mainChilds.className}-columnGap);
                row-gap: var(--${mainChilds.className}-rowGap);
                grid: var(--${mainChilds.className}-grid);
                grid-gap: var(--${mainChilds.className}-gridGap);
                animation: none;
                border: var(--${mainChilds.className}-border);
                box-shadow: var(--${mainChilds.className}-boxShadow);
                border-radius: var(--${mainChilds.className}-borderRadius);
                color: var(--${mainChilds.className}-color);
                cursor: var(--${mainChilds.className}-cursor);
                clip: var(--${mainChilds.className}-clip);
                font: var(--${mainChilds.className}-font);
                filter: var(--${mainChilds.className}-filter);
                transform: var(--${mainChilds.className}-transform);
                transition: var(--${mainChilds.className}-transition);
                text-align: var(--${mainChilds.className}-textAlign);
                perspective: var(--${mainChilds.className}-perspective);
                overflow: var(--${mainChilds.className}-overflow);
                opacity: var(--${mainChilds.className}-opacity);
                
                margin: var(--${mainChilds.className}-margin);
                padding: var(--${mainChilds.className}-paddin);
                
                position: var(--${mainChilds.className}-position);
                top: var(--${mainChilds.className}-top);
                left: var(--${mainChilds.className}-left);
                
                min-height: var(--${mainChilds.className}-minHeigh);
                max-height: var(--${mainChilds.className}-maxHeight);
                min-width: var(--${mainChilds.className}-minWidth);
                max-width: var(--${mainChilds.className}-maxWídth);
                height: var(--${mainChilds.className}-height);
                width: var(--${mainChilds.className}-width);
                
                z-index: var(--${mainChilds.className}-zIndex);
            }
            
        `;
        console.info(cssRoot);
        // let regex = /*:W/g;
        // let regex = / ..............:\Wvar/g;
        // let result = text.replace(regex,``);
        // console.info(result);
        
    })
}
multiverse_dom();







































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










// Behave && Eruda console can handle it && Eruda says "I am gooddd"
// let html = document.querySelector('body');
// html.style.display = 'none';
// // Browser
// let td = document.querySelectorAll('a > div');
// td.forEach((elements) => {
//     console.log(elements.innerHTML);
// });

// Regex
// let text = 'do to good experience blockchain to related t amily';
// let regex = /to/g;
// let result = text.replace(regex,`(I donnot know) but probebly this words needs ${regex}`);
// console.log(result);
