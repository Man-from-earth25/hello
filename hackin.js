'use-strick';


// Imports
import { q,qa,CLICK_CLEANER_CODE } from './www/ux/dom.js';


// Variables
let body = q('body');


// Click Sound 
const audio = new Audio();
audio.src = './the_kid_laroe.mp3';



// Function Inisilization
CLICK_CLEANER_CODE({
    
    ELEMENT: body,
    FUNCTION : (e)=>{
        
        audio.play();
        console.log(`X(${e.offsetX}) Y(${e.offsetY})`);
        
    }
    
})






















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






window.addEventListener('load',()=>{
    
    const canvas = q('canvas');
    const snail = q('.snail');
    const ctx = canvas.getContext('2d');
    
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    class Bar {
        constructor({ x,y,height,width,color,index }) {
            this.x = x;
            this.y = y;
            this.height = height;
            this.width = width;
            this.color = color;
            this.index = index;
            
        }
        update(micInput){
            this.height = micInput;
        }
        draw({ context, volume }){
            
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
        
        ctx.clearRect(0,0,canvas.height,canvas.width);
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
