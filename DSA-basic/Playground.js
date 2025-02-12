class hashTable {
  constructor(size = 10) {
    this.buckets = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let char of key) {
      hash += key.charCodeAt(char);
    }

    return hash % this.buckets.length;
  }

  set(key, value) {
    //initiate 'index' as the hash value.
    let index = this._hash(key);

    //if bucket is empty create a new one
    if (!this.buckets[index]) {
      this.buckets[index] = [];
    }

    //check if key/value pair exist, if yes update the value
    for (let pair of this.buckets[index]) {
      if (pair[0] === key) {
        pair[1] = value;
        return;
      }
    }

    //add the pair at index array.
    this.buckets[index].push([key, value]);
  }

  get(key) {
    //get the 'index' using the hash value
    let index = this._hash(key);

    //if index is empty value the return undefined
    if (!this.buckets[index]) return undefined;

    //check if key/value pair exist, if yes update the value
    for (let pair of this.buckets[index]) {
      if (pair[0] === key) return pair[1];
    }

    //key not found
    return undefined;
  }
}

const myTable = new hashTable();

myTable.set("hello", "world");
console.log(myTable.get("hello"));
