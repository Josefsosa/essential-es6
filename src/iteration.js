/**
 * Created by josefsosa on 4/1/16.
 */

//Linkd list v1
//function LinkedList() {
//}
//LinkedList.prototype = {
//  add: function (value) {
//    var prev = this._tail;
//    this._tail = {
//      value: value
//    };
//    if (prev) {
//      prev.next = this._tail;
//    } else {
//      this._head = this._tail;
//    }
//    return this;
//  },
//  forEach: function (callback) {
//    for (var current = this._head; current; current = current.next) {
//      callback(current.value);
//    }
//  }
//};

//let nl = new LinkedList
//nl.add(1).add(3).add(43)
//Object { _tail: Object, _head: Object }
//
//nl.forEach(v => console.log(v))
//1
//3
//43

//Linkd list v2
function LinkedList() {
}
LinkedList.prototype = {
  add(value) {
    const prev = this._tail;
    this._tail = {
      value
    };
    if (prev) {
      prev.next = this._tail;
    } else {
      this._head = this._tail;
    }
    return this;
  },
  [Symbol.iterator]() {
    let current = this._head;
    return {
      next() {
        if (!current) {
          return {
            done: true
          };
        }
        const {value} = current;
        current = current.next;
        return {
          value
        };
      }
    };
  }
};

//let nl = new LinkedList
//nl.add(1).add(3).add(43)
//Object { _tail: Object, _head: Object }
//for (let i of nl) console.log(i)   //!this is nicer now.
//1
//3
//43

//Easier Looping
//var collection = new Collection();
////…
//for (var item of collection) {
//  console.log(item);
//}

//function LinkedList() {
//}
//LinkedList.prototype = {
//  add(value) {
//    const prev = this._tail;
//    this._tail = {
//      value
//    };
//    if (prev) {
//      prev.next = this._tail;
//    } else {
//      this._head = this._tail;
//    }
//    return this;
//  },
//*[Symbol.iterator]() {
//  for (let current = this._head; current; current = current.next) {
//    yield current.value;
//  }
//}
//};