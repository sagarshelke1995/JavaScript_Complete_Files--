const games = ['GTA 3' , 'GTA vice city' , 'GTA san andreas' , 'GTA 4'];

// Normal for-loop ES5
let output = '';
for(let i=0; i<games.length; i++){
    output += `${games[i]} , `;
}
console.log(output);

// for-in loop ES5
output = '';
for(let index in games){
    output += `${games[index]} , `;
}
console.log(output);

// for-of loop ES6
output = '';
for(let game of games){
    output += `${game} , `;
}
console.log(output);

// forEach function ES5
output = '';
games.forEach(function(game) {
    output += `${game} , `;
});
console.log(output);

// forEach with Arrow ES6
output = '';
games.forEach(game => output += `${game} , `);
console.log(output);