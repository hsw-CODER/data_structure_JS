/**
 * 工具类
 */
$ = node => {
  return document.querySelectorAll(node).length == 1 ? document.querySelectorAll(node)[0] : document.querySelectorAll(node)
}
class Util {
  constructor() {

  }
  dec2any(decnumber, Ary) {
    let s = new Stack();
    let r;
    while (decnumber > 0) {
      r = decnumber % Ary;
      decnumber = Math.floor(decnumber / Ary);
      s.push(r);
    }
    var binNum = "";
    while (!s.isEmpty()) {
      binNum += s.pop();
    }
    return binNum;
  };

  /**
   * 
   * @param {*} date Date object
   * @param {*} func 0(Accurate to the day) or 1(Accurate to seconds), default value is 0
   */
  getDate(date, func = 0) {
    let obj = {};
    if (date instanceof Date) {
      let time = '';
      obj = {
        vagueDate: {
          year: date.getFullYear(),
          mouth: date.getMonth(),
          day: date.getDay(),
        },
        preciseDate: {
          h: date.getHours(),
          m: date.getMinutes(),
          s: date.getUTCSeconds()
        }
      }
      switch (func) {
        case 0:
          time = Object.values(obj.vagueDate).join('-')
          break;
        case 1:
          time = Object.values(obj.vagueDate).join('-') + ' ' + Object.values(obj.preciseDate).join(':');
          break;
        default:
          time = 'func is Not 1 or 0'
          break;
      }
      return time
    } else {
      console.log('arguments is not Date Object');
    }
  }
  /**
   * 
   * @param {*} node Get Node or Nodes
   */

}