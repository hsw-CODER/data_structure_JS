/*
append(element)：向列表尾部添加一个新的项
insert(position, element)：向列表的特定位置插入一个新的项。
remove(element)：从列表中移除一项。
indexOf(element)：返回元素在列表中的索引。如果列表中没有该元素则返回-1。
removeAt(position)：从列表的特定位置移除一项。
isEmpty()：如果链表中不包含任何元素，返回true，如果链表长度大于0则返回false。
size()：返回链表包含的元素个数。与数组的length属性类似。
toString()：由于列表项使用了Node类，就需要重写继承自JavaScript对象默认的toString方法，让其只输出元素的值。
*/
let that;
//保存每个结点的node
class lNode {
  constructor(ele) {
    this.data = ele
    this.next = null
  }
}
class LinkedList {
  constructor() {
    that = this;
    this.length = 0; // 链表的长度
    this.head = null; //头结点为空
  }
  // 链表尾部追加元素方法
  append(element) {
    // 1.根据新元素创建节点
    let newNode = new lNode(element);
    // 2.判断原来链表是否为空
    if (this.head == null) {
      this.head = newNode;
    } else {
      // 链表不为空
      // 2.1.定义变量, 保存当前找到的节点
      let current = this.head
      while (current.next) {
        current = current.next
      }
      // 2.2.找到最后一项, 将其next赋值为node
      current.next = newNode
    }
    this.length++;
  }
  //向列表的特定位置插入一个新的项
  insert(position, element) {
    //判断position是否越界
    if (position > this.length || position < 0) return false; //因为位置信息是错误的, 所以数据肯定是添加失败的
    // 2.找到正确的位置, 并且插入数据
    let newNode = new lNode(element)
    let current = this.head
    let previous = null
    let index = 0
    //3.判断是否在第一位插入
    if (position == 0) {
      newNode.next = current //添加到第一个位置, 表示新添加的节点是头, 就需要将原来的头节点, 作为新节点的next
      this.head = newNode //这个时候的head应该指向新节点.
    } else { //不在第一位插入时
      //如果是添加到其他位置, 就需要先找到这个节点位置了.
      //我们通过while循环, 一点点向下找.并且在这个过程中保存上一个节点和下一个节点.
      //找到正确的位置后, 将新节点的next指向下一个节点, 将上一个节点的next指向新的节点. 顺序不能反 不然会覆盖
      while (index++ < position) {
        previous = current
        current = current.next
      }
      newNode.next = current
      previous.next = newNode
    }

    // 4.length+1
    this.length++

    return true
  }
  //返回元素在列表中的索引。 如果列表中没有该元素则返回 - 1。
  indexOf(element) {
    // 1.定义变量, 保存信息
    let current = this.head
    let index = 0
    // 2.找到元素所在的位置
    while (current) {
      if (current.data === element) {
        return index
      }
      index++
      current = current.next
    }
    //3. 来到这个位置, 说明没有找到, 则返回 - 1
    return -1;
  }
  // /从列表的特定位置移除一项。
  removeAt(position) {
    //根据位置移除对应的数据
    // 1.检测越界问题: 越界移除失败, 返回null
    if (position > this.length || position < 0) return false;
    // 2.定义变量, 保存信息
    var current = this.head
    var previous = null
    var index = 0

    if (position === 0) {
      this.head = current.next
    } else {
      while (index++ < position) {
        previous = current
        current = current.next
      }
      previous.next = current.next
    }
    // length-1
    this.length--
    // 返回移除的数据
    return '已移除' + current.data
  }
  // 从列表中移除一项。
  remove(element = null) {
    element = element ? element : null
    let index = this.indexOf(element)
    //如果有element参数 删除element元素 没有的话删除最后一项
    if (element) {
      return this.removeAt(index)
    } else {
      return this.removeAt(this.length - 1)
    }
  }
  //如果链表中不包含任何元素， 返回true， 如果链表长度大于0则返回false。
  isEmpty() {
    return this.length == 0
  }
  //返回链表包含的元素个数。 与数组的length属性类似。
  size() {
    return this.length
  }
  //得到第一个元素
  getFirst() {
    if (!isEmpty) {
      return this.head.data
    }
    return -1

  }
  // 链表的toString方法
  toString() {
    // 1.定义两个变量
    let current = this.head
    let listString = ""

    // 2.循环获取链表中所有的元素
    while (current) {
      listString += "," + current.data
      current = current.next
    }

    // 3.返回最终结果
    return listString.slice(1) //去掉最前的‘ ，’
  }
}
//测试
// let list = new LinkedList()

// list.append(15)
// list.append(11)
// list.append(14)
// list.append(56)
// list.insert(1, 88)
// console.log(list.getFirst());

// console.log(list.toString())
// console.log(list.indexOf(14))
// console.log(list.remove(56))
// console.log(list.toString())
// console.log(list.isEmpty());