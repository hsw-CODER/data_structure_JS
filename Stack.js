export class Stack {
  constructor() {
    this.items = [];
  }
  //入栈
  push = elem => this.items.push(elem);
  //出栈
  pop = () => this.items.pop();
  //peek
  peek = () => this.items[items.length - 1];
  //isEmpty
  isEmpty = () => this.items.length == 0;
  //size
  size = () => this.items.length;
  // toString
  toString = () => {
    let resultString = '';
    for (let str of this.items) {
      resultString += str;
    }
    return resultString;
  };
}