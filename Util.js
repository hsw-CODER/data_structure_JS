class Util {
  constructor() {

  }
  dec2any = (decnumber, Ary) => {
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
}