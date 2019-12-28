class Queen {
  constructor() {
    this.items = [];
  }
  //方法
  //将元素加入队列
  enqueue = elem => this.items.push(elem);
  //删除队列前端元素
  dequeue = () => this.items.shift();
  //获取队列最前端元素
  front = () => this.items[0];
  //判断队列是否为空
  isEmpty = () => this.items.length == 0;
  //获取队列长度
  size = () => this.items.length;
  //toString方法
  toString = () => {
    let resultString = '';
    for (let str of this.items) {
      resultString += str;
    }
    return resultString;
  };
}