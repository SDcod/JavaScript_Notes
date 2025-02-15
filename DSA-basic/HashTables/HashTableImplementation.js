// A HashTable (also called a HashMap or Dictionary) is a data structure that stores key-value pairs. It is efficient for searching, inserting, and deleting data.

// 🔹 How Does a HashTable Work?
// Hash Function: Converts a key (e.g., "name") into an index.
// Storage: The key-value pair is stored at the computed index.
// Fast Lookup: Direct access to values in O(1) average time.
// 🔹 JavaScript's Built-in HashTables:
// Objects ({}): Basic way to store key-value pairs.
// Map: A more advanced HashTable. (stored in order, map inherited properties cannot be overriden)

//structure buckets[]>bucket[]>[pairs],[pairs]...
class HashTable {
  constructor(size = 10) {
    this.size = size;
    this.buckets = new Array(size); // Array to store data
  }

  // 🔹 Corrected Hash Function: Generates a numeric index(using '_' just to identify it as a private method)
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i); // ✅ Using charCodeAt(i) correctly
    }
    return hash % this.buckets.length; // ✅ Ensures index stays within bounds
  }

  // Insert a key-value pair
  set(key, value) {
    let index = this._hash(key);
    if (!this.buckets[index]) {
      this.buckets[index] = []; // Create a new bucket if empty
    }
    // Check if key exists, update value
    //use of for loop so that we can iterate over the collision handled pairs
    for (let pair of this.buckets[index]) {
      if (pair[0] === key) {
        pair[1] = value;
        return;
      }
    }
    this.buckets[index].push([key, value]); // Add new key-value pair[by having push we handle collisions in case different key is already present at same index]
  }

  // Retrieve a value by key
  get(key) {
    let index = this._hash(key);
    if (!this.buckets[index]) return undefined;
    for (let pair of this.buckets[index]) {
      if (pair[0] === key) return pair[1];
    }
    return undefined; // Key not found
  }

  // Delete a key-value pair
  delete(key) {
    let index = this._hash(key);
    if (!this.buckets[index]) return false;
    this.buckets[index] = this.buckets[index].filter((pair) => pair[0] !== key);
    return true;
  }

  // Check if a key exists
  has(key) {
    let index = this._hash(key);
    if (!this.buckets[index]) return false;
    return this.buckets[index].some((pair) => pair[0] === key);
  }

  //print the hashtable
  printTable() {
    for (let i = 0; i < this.size; i++) {
      if (this.buckets[i]) {
        console.log(`Index ${i}:`, this.buckets[i]);
      } else {
        console.log(`Index ${i}: empty`);
      }
    }
  }
}

// 🔹 Testing Our Custom HashTable
let ht = new HashTable();

ht.set("name", "Alice");
ht.set("age", 25);
ht.set("city", "New York");

console.log(ht.get("name")); // Alice
console.log(ht.get("age")); // 25
console.log(ht.has("city")); // true
ht.printTable();
