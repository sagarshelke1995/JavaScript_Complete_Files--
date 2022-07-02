/* ES6 Collections */

/*
---------------------------------------------------------------------------------
                                Map Collection in ECMAScript
---------------------------------------------------------------------------------
 */

/*
Map is a collection of keyed data items,just like an Object.
But the main difference is that Map allows keys of any type.

new Map() – creates the map.
map.set(key, value) – stores the value by the key.
map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
map.has(key) – returns true if the key exists, false otherwise.
map.delete(key) – removes the value by the key.
map.clear() – clears the map
map.size – returns the current element count.
map.keys() – returns the keys for iteration,
map.values() – returns the values for iteration,
map.entries() – returns the entries [key, value], it’s used by default in for..of.

 */
let map = new Map();
map.set(1 , 'HTML');
map.set(2 , 'CSS');
map.set(3 , 'JAVASCRIPT');
map.set(4 , 'JQUERY');
map.set(5 , 'BOOTSTRAP');
map.set(6 , 'NODE JS');
console.log(map);

// map.get(key)
console.log(map.get(4)); /// Jquery

// map.has(key)
console.log(map.has(5)); // true

// map.delete(key)
map.delete(3);
console.log(map);

// map.size
console.log(`Size : ${map.size}`);

// Keys
let output = '';
for(let key of map.keys()){
   output += `${key} `;
}
console.log(output);

// Values
output = '';
for(let value of map.values()){
    output += `${value} `;
}
console.log(output);

// Entries
output = '';
for(let entry of map.entries()){
    output += `Key : ${entry[0]} => value : ${entry[1]} \n`;
}
console.log(output);

// clear
map.clear();
console.log(map);

/*
---------------------------------------------------------------------------------
                                Set Collection in ECMAScript
---------------------------------------------------------------------------------
 */

/*
A Set is a collection of values, where each value may occur only once.

Set contains the following methods

new Set(iterable) – creates the set, optionally from an array of values (any iterable will do).
set.add(value) – adds a value, returns the set itself.
set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.
set.has(value) – returns true if the value exists in the set, otherwise false.
set.clear() – removes everything from the set.
set.size – is the elements count.

 */

let colorSet = new Set();
colorSet.add('red');
colorSet.add('red');
colorSet.add('blue');
colorSet.add('blue');
colorSet.add('orange');
colorSet.add('orange');
colorSet.add('black');
colorSet.add('black');

console.log(colorSet);

// delete()
colorSet.delete('black');
console.log(colorSet);

// has()
console.log(colorSet.has('orange'));

// size
console.log(`Size : ${colorSet.size}`);

// clear
colorSet.clear();
console.log(colorSet);


