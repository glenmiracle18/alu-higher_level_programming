#!/usr/bin/node
class Rectangle {
  constructor (w, h) {
    if (w <= 0 || h <= 0 || typeof w !== 'number' || typeof h !== 'number') {
      return Object.create(Rectangle.prototype);
    } else {
      this.width = w;
      this.height = h;
    }
  }

  print () {
    const text = 'X';
    for (let i = 0; i < this.height; i++) {
      console.log(text.repeat(this.width));
    }
  }
}
module.exports = Rectangle;
