class SortedList {
  constructor() {
    this.items = [],
    // this?
    this.length = this.items.length
  }
  add(item) {
    this.items.push(item)
    this.items.sort ((a, b) => a-b);
    this.length += 1;
  }

  get(pos) {
    if (pos > this.length){
    throw new Error('OutOfBounds');
    }
    else {
    return this.items[pos];
    }
  }

  max() {
    if (this.length == 0){
      throw new Error('EmptySortedList');
      }
      else {
      return this.items[this.length-1];
      }

  }

  min() {
    if (this.length == 0){
      throw new Error('EmptySortedList');
      }
      else {
      return this.items[0];
      }
  }

  sum() {
    if ( this.length == 0){
      return 0
    }
    else {
    return this.items.reduce((acc, curr, index) => {return acc + curr}, 0)
    }
  }

  avg() {

    if (this.length == 0){
    throw new Error('EmptySortedList');
    }
    else{
    return this.sum() / this.length
    }
  }
}

//let SortedList = new SortedList

module.exports = SortedList;
