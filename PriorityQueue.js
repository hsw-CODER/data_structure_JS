import {
  Queue
} from './Queue.js';
class QueueElement {
  constructor(element, priority) {
    this.element = element
    this.priority = priority
  }
}
class PriorityQueue extends Queue {
  constructor() {
    //封装属性
    this.items = []
  }
  //插入
  enqueue(element, priority) {
    //创建QueueElement对象
    let qe = new QueueElement(element, priority)
    //判断队列是否为空

    if (this.items.length == 0) {
      this.items.push(qe)
    } else {
      var flag = false
      for (let index = 0; index < this.items.length; index++) {
        if (qe.priority < this.items[i].priority) {
          this.items.splice(index, 0, qe)
          flag = true
          break
        }
      }
      if (!flag) {
        this.items.push(qe)
      }
    }
  }

}

//test
var pq = new PriorityQueue();
pq.enqueue('zyq', 11)
pq.enqueue('zyq', 12)
pq.enqueue('zyq', 13)
console.log(pq);