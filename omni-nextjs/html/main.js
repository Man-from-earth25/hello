const body = document.querySelector('body');
const canvas1 = document.querySelector('#canvas1');
let ctx1 = canvas1.getContext('2d');
const canvas2 = document.querySelector('#canvas2');
let ctx2 = canvas2.getContext('2d');
let ongoingTouches = [];
let hue = 120;
// let hue = 0;



// Pc---flowers     //////////////////////////////////////////////////////////////////////////////////////////////
if (canvas1 !== null) {
    canvas1.width = window.innerWidth;
    canvas1.height = window.innerHeight;
    
    class Root1 {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.speedX = Math.random() * 4 - 2;
            this.speedY = Math.random() * 4 - 2;
            this.maxSize = Math.random() * 3 + 6;
            this.size = Math.random() * 1 + 2;
            this.vs = Math.random() * 0.7 + 0.23;
    
            this.angleX = Math.random() * 6.2;
            this.vaX = Math.random() * 0.6 - 0.3;
            this.angleY = Math.random() * 6.2;
            this.vaY = Math.random() * 0.6 - 0.3;
    
            this.lightness = 60;
            this.color = 0;
    
    
        }
        update() {
    
            this.x += this.speedX + Math.sin(this.angleX);
            this.y += this.speedY + Math.sin(this.angleY);
            this.size += this.vs;
            this.angleX += this.vaX;
            this.angleY += this.vaY;
            this.color +=2;
    
            if (this.lightness < 100) this.lightness +=0.1;
            if (this.lightness < 240) this.color += 40;
    
            if (this.size < this.maxSize) {
    
                ctx1.beginPath();
                ctx1.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx1.fillStyle = 'hsl(120, 100%, ' + this.lightness + '%)';
    
                ctx1.fill();
                ctx1.stroke();
                requestAnimationFrame(this.update.bind(this));
    
            }
    
    
        }
    }
    body.addEventListener('touchmove', function(e) {
    
        for (let i = 0; i < 25; i++) {
            const root1 = new Root1(e.touches[0].clientX, e.touches[0].clientY);
            root1.update();
            // console.log(e.touches[0].clientY);
    
        }
    
    
        e.preventDefault();
    
    });
};




// Mb-----wateri_paint_brush     //////////////////////////////////////////////////////////////////////////////////////////////
if (canvas2 !== null){
    // console.log('canvas2');
    
    canvas2.width = window.innerWidth;
    canvas2.height = window.innerHeight;
    
    
    canvas2.addEventListener('click', function(e) {
        let thX = e.clientX;
        let thY = e.clientY;
        
        // console.log('op');
        drawcolor(thX,thY);    
        // console.log(e.clientY);
        e.preventDefault();
        
        
    });

    
    canvas2.addEventListener('touchmove', function(e) {
        
        let thX = e.touches[0].clientX;
        let thY = e.touches[0].clientY;
        
        
        if(e.touches.length > 1) {
            thX = e.touches[1].clientX;
            thY = e.touches[1].clientY;
            drawcolor(thX,thY);    
            console.log('two');
            
        }        
        drawcolor(thX,thY);    
        
        // console.log('0000000000011111111110011010101010110');
        
        e.preventDefault();
        
    });

    
    function drawcolor(x,y) {

    let thx = x;
    let thy = y;
    hue += 2;
    
    
    ctx2.fillStyle = 'hsl(' + hue +', 100%, 50%)';
    ctx2.beginPath();
    ctx2.arc(thx,thy,10,0,Math.PI * 3);
    ctx2.fill();
    
    
    // e.preventDefault();
    
}
    drawcolor();    

}



// All-----Justfor tyling in mobile without keyboard  //////////////////////////////////////////////////////////////////////////////////////////////
function startup() {
  let el = document.getElementById("canvas");
  el.addEventListener("touchstart", handleStart, false);
  el.addEventListener("touchend", handleEnd, false);
  el.addEventListener("touchcancel", handleCancel, false);
  el.addEventListener("touchmove", handleMove, false);
}
document.addEventListener("DOMContentLoaded", startup);

function handleStart(evt) {
  evt.preventDefault();
  let el = document.getElementById("canvas");
  let ctx = el.getContext("2d");
  let touches = evt.changedTouches;

  for (let i = 0; i < touches.length; i++) {
    ongoingTouches.push(copyTouch(touches[i]));
    let color = 'hsl(' + hue + ', 100%, 50%)';
    
    ctx.beginPath();
    ctx.arc(touches[i].pageX, touches[i].pageY, 2, 0, 2 * Math.PI, false);  // a circle at the start
    ctx.fillStyle = color;
    ctx.fill();
  }
}
function handleMove(evt) {
  evt.preventDefault();
  let el = document.getElementById("canvas");
  let ctx = el.getContext("2d");
  let touches = evt.changedTouches;

  for (let i = 0; i < touches.length; i++) {
    let idx = ongoingTouchIndexById(touches[i].identifier);

    if (idx >= 0) {
      ctx.beginPath();
      ctx.moveTo(ongoingTouches[idx].pageX, ongoingTouches[idx].pageY);
      ctx.lineTo(touches[i].pageX, touches[i].pageY);
      ctx.lineWidth = 8;
    //   ////////////////////////////////////        //////////////////////////////////// //////////////////////////////////// //////////////////////////////////// 
    
      hue += 1.7;
      ctx.strokeStyle = 'hsl(' + hue + ', 100%, 50%)';
      ctx.stroke();
        
      ongoingTouches.splice(idx, 1, copyTouch(touches[i]));  // swap in the new touch record
    } else {
    }
  }
}
function handleEnd(evt) {
  evt.preventDefault();
  log("touchend");
  let el = document.getElementById("canvas");
  let ctx = el.getContext("2d");
  let touches = evt.changedTouches;

  for (let i = 0; i < touches.length; i++) {
    let color = 'hsl(' + hue + ', 100%, 50%)';
    let idx = ongoingTouchIndexById(touches[i].identifier);

    if (idx >= 0) {
      ctx.lineWidth = 4;
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.moveTo(ongoingTouches[idx].pageX, ongoingTouches[idx].pageY);
      ctx.lineTo(touches[i].pageX, touches[i].pageY);
      ctx.fillRect(touches[i].pageX, touches[i].pageY, 3, 0, 2 * Math.PI, false);  // and a square at the end
      ongoingTouches.splice(idx, 1);  // remove it; we're done
    } else {
    }
  }
}
function handleCancel(evt) {
  evt.preventDefault();
  let touches = evt.changedTouches;

  for (let i = 0; i < touches.length; i++) {
    let idx = ongoingTouchIndexById(touches[i].identifier);
    ongoingTouches.splice(idx, 1);  // remove it; we're done
  }
}

function colorForTouch(touch) {
  let r = touch.identifier % 16;
  let g = Math.floor(touch.identifier / 3) % 16;
  let b = Math.floor(touch.identifier / 7) % 16;
  r = r.toString(16); // make it a hex digit
  g = g.toString(16); // make it a hex digit
  b = b.toString(16); // make it a hex digit
 
  let color = "#" + r + g + b;
   console.log(color);
  
  return color;
}
function copyTouch({ identifier, pageX, pageY }) {
  return { identifier, pageX, pageY };
}
function ongoingTouchIndexById(idToFind) {
  for (let i = 0; i < ongoingTouches.length; i++) {
    let id = ongoingTouches[i].identifier;

    if (id == idToFind) {
      return i;
    }
  }
  return -1;    // not found
}
function log(msg) {
  let p = document.getElementById('log');
  p.innerHTML = msg + "\n" + p.innerHTML;
}
function onTouch(evt) {
  evt.preventDefault();
  if (evt.touches.length > 1 || (evt.type == "touchend" && evt.touches.length > 0))
    return;

  let newEvt = document.createEvent("MouseEvents");
  let type = null;
  let touch = null;

  switch (evt.type) {
    case "touchstart":
      type = "mousedown";
      touch = evt.changedTouches[0];
      break;
    case "touchmove":
      type = "mousemove";
      touch = evt.changedTouches[0];
      break;
    case "touchend":
      type = "mouseup";
      touch = evt.changedTouches[0];
      break;
  }

  newEvt.initMouseEvent(type, true, true, evt.originalTarget.ownerDocument.defaultView, 0,
    touch.screenX, touch.screenY, touch.clientX, touch.clientY,
    evt.ctrlKey, evt.altKey, evt.shiftKey, evt.metaKey, 0, null);
  evt.originalTarget.dispatchEvent(newEvt);
}

// Done //////////////////////////////////////////////////////////////////////////////////////////////////









