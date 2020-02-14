 class Queue {
   constructor() {
     this.items = [];
   }
   //方法
   //将元素加入队列
   enqueue(elem) {
     return this.items.push(elem)
   };
   //删除队列前端元素
   dequeue() {
     return this.items.shift()
   };
   //获取队列最前端元素
   front() {
     return this.items[0];
   }
   //判断队列是否为空
   isEmpty() {
     return this.items.length == 0;
   }
   //获取队列长度
   size() {
     return this.items.length
   }
   //toString方法
   toString() {
     let resultString = '';
     for (let str of this.items) {
       resultString += str;
     }
     return resultString;
   }
 }
 class QueueElement {
   constructor(element, priority) {
     this.element = element
     this.priority = priority
   }
 }
 //优先级队列
 class PriorityQueue extends Queue {
   constructor() {
     super();
     //  this.items = []
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
         if (qe.priority < this.items[index].priority) {
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
   toString() {
     let resultString = '';
     for (let str of this.items) {
       resultString += str.element + '-' + str.priority + ' ';
     }
     return resultString;
   }
 }

 //test
 var pq = new PriorityQueue();
 pq.enqueue('a', 11)
 pq.enqueue('b', 12)
 pq.enqueue('c', 13)

 console.log(pq.front());
 //test
 function PassGame(nameList, num) {
   var q = new Queue()

   for (let i = 0; i < nameList.length; i++) {
     q.enqueue(nameList[i])
   }

   while (q.size() > 1) {
     for (let i = 0; i < num - 1; i++) {
       q.enqueue(q.dequeue())
     }
     q.dequeue()
   }
   console.log(q.size());

   return nameList.indexOf(q.front())
 }
 // var names = ['aa', 'vv', 'a', 'b', 'c'];
 // console.log(PassGame(names, 3));