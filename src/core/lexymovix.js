class TextChar {
  constructor(char, span) {
    this.char = char;
    this.span = span;
    this.x = 0;
    this.y = 0;
    this.angle = 0;
    this.scaleFactor = 1;
  }
  
  position(x, y) {
  this.x = x;
  this.y = y;
  this._applyTransform();
}
 
 rotate(deg) {
  this.angle = deg;
  this._applyTransform();
}

 scale(f) {
  this.scaleFactor = f;
  this._applyTransform();
}

 _applyTransform() {
  this.span.style.transform =
    `translate(${this.x}px, ${this.y}px) rotate(${this.angle}deg) scale(${this.scaleFactor})`;
 }
}

function applyCharStyle(span) {
  span.style.display = 'inline-block';
  span.style.willChange = 'transform';
  //span.style.transformOrigin = 'center'; // opcional, mas útil pra rotações
}

export const text = (element, callback) => {
      const text = element.innerText;
      element.innerHTML = '';
      const chars = [];

      [...text].forEach((char, index) => {
        const span = document.createElement('span');
        span.textContent = char;
        applyCharStyle(span)
        const charObj = new TextChar(char, span);
        element.appendChild(span);
        chars.push({ obj: charObj, index });
      });

      function loop(tempo) {
        chars.forEach(({ obj,index}) => {
          callback(obj, index, chars, tempo);
        });
        requestAnimationFrame(loop);
      }

      requestAnimationFrame(loop);
}