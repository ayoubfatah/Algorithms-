class Array {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  push(item) {
    this.data[this.length] = item;
    this.length++;

    return this.length;
  }
  get(number) {
    delete 2;
    return this.data[number];
  }
  pop() {
    const latestItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return latestItem;
  }
  shift() {
    const firstItem = this.data[0];

    for (let i = 0; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }

    delete this.data[this.length - 1];
    this.length--;
    return firstItem;
  }
  deleteByIndex(index) {
    if (index < 0 || index >= this.length) {
      throw new Error("Index out of bounds");
    }

    const deletedItem = this.data[index];

    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }

    delete this.data[this.length - 1];
    this.length--;

    return deletedItem;
  }
  findIndexOf(callback) {
    for (let i = 0; i < this.length; i++) {
      if (callback(this.data[i], i)) {
        return i;
      }
    }
    return undefined;
  }
}

const myArray = new Array();
myArray.push("orange");
myArray.push("apple");
myArray.push("banana");
myArray.push("strawberry");
myArray.push("mango");
myArray.push("kiwi");
myArray.deleteByIndex(5);
console.log(myArray.findIndexOf((fruit) => fruit === "apple"));
console.log(myArray);
