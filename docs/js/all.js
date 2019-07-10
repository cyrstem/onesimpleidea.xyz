/*Author: -cyrstem@gmail.com, Author URI: -onesimpleidea.xyz*/


//     console.log("loading galery");
// $(function(){
//     var $gallery = $('.gallery a').simpleLightbox();

//     $gallery.on('show.simplelightbox', function(){
//       console.log('Requested for showing');
//     })
//     .on('shown.simplelightbox', function(){
//       console.log('Shown');
//     })
//     .on('close.simplelightbox', function(){
//       console.log('Requested for closing');
//     })
//     .on('closed.simplelightbox', function(){
//       console.log('Closed');
//     })
//     .on('change.simplelightbox', function(){
//       console.log('Requested for change');
//     })
//     .on('next.simplelightbox', function(){
//       console.log('Requested for next');
//     })
//     .on('prev.simplelightbox', function(){
//       console.log('Requested for prev');
//     })
//     .on('nextImageLoaded.simplelightbox', function(){
//       console.log('Next image loaded');
//     })
//     .on('prevImageLoaded.simplelightbox', function(){
//       console.log('Prev image loaded');
//     })
//     .on('changed.simplelightbox', function(){
//       console.log('Image changed');
//     })
//     .on('nextDone.simplelightbox', function(){
//       console.log('Image changed to next');
//     })
//     .on('prevDone.simplelightbox', function(){
//       console.log('Image changed to prev');
//     })
//     .on('error.simplelightbox', function(e){
//       console.log('No image found, go to the next/prev');
//       console.log(e);
//     });
//   });

// ——————————————————————————————————————————————————
// TextScramble
// ——————————————————————————————————————————————————

window.onload = function(){

console.log("loading scripts");

class TextScramble {
  constructor(el) {
    this.el = el
    this.chars = '!<>-_\\/[]{}—=+*^?#________~|'
    this.update = this.update.bind(this)
  }
  setText(newText) {
    const oldText = this.el.innerText
    const length = Math.max(oldText.length, newText.length)
    const promise = new Promise((resolve) => this.resolve = resolve)
    this.queue = []
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || ''
      const to = newText[i] || ''
      const start = Math.floor(Math.random() * 40)
      const end = start + Math.floor(Math.random() * 40)
      this.queue.push({ from, to, start, end })
    }
    cancelAnimationFrame(this.frameRequest)
    this.frame = 0
    this.update()
    return promise
  }
  update() {
    let output = ''
    let complete = 0
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i]
      if (this.frame >= end) {
        complete++
        output += to
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar()
          this.queue[i].char = char
        }
        output += `<span class="dud">${char}</span>`
      } else {
        output += from
      }
    }
    this.el.innerHTML = output
    if (complete === this.queue.length) {
      this.resolve()
    } else {
      this.frameRequest = requestAnimationFrame(this.update)
      this.frame++
    }
  }
  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)]
  }
}

// ——————————————————————————————————————————————————
// Example
// ——————————————————————————————————————————————————

const phrases = [
  'hello, ....',
  '...',
  'Im currently updating this.....',
  '  moving to some new JS framework......',
  ' Yes another one ...... ',
  ' but any way...',
  'you can find most of the code ',
  'for some proyects  ',
  'on git     '
]

const el = document.querySelector('.text')

const fx = new TextScramble(el)

let counter = 0
const next = () => {
  fx.setText(phrases[counter]).then(() => {
    setTimeout(next, 900)
  })
  counter = (counter + 1) % phrases.length
}

next();

}//end OFF everything on window load




