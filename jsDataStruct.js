function Stack() {
  this.items = [];
  //入栈
  Stack.prototype.push = elem => this.items.push(elem);
  //出栈
  Stack.prototype.pop = () => this.items.pop();
  //peek
  Stack.prototype.peek = () => this.items[items.length - 1];
  //isEmpty
  Stack.prototype.isEmpty = () => this.items.length == 0;
  //size
  Stack.prototype.size = () => this.items.length;
  // toString
  Stack.prototype.toString = () => {
    let resultString = '';
    for (let str of this.items) {
      resultString += str;
    }
    return resultString;
  };
}


function Queue() {
  //属性
  this.items = [];
  //方法
  //将元素加入队列
  Queue.prototype.enqueue = elem => this.items.push(elem);
  //删除队列前端元素
  Queue.prototype.dequeue = () => this.items.shift();
  //获取队列最前端元素
  Queue.prototype.front = () => this.items[0];
  //判断队列是否为空
  Queue.prototype.isEmpty = () => this.items.length == 0;
  //获取队列长度
  Queue.prototype.size = () => this.items.length;
  //toString方法
  Queue.prototype.toString = () => {
    let resultString = '';
    for (let str of this.items) {
      resultString += str;
    }
    return resultString;
  };
}