var array = ['item 1', 'item 2', 'item 3'];

for(var i = 0; i < 3; i = i + 1) {
  console.log("hey");
}
for (var i = 0; i < 3; i++) {
  console.log([i]);
}
for (var i = 0; i < 3; i++) {
  console.log(array);
  console.log(array[0]);
  console.log(array[1]);
  console.log(array[3]);
}
for (var i = 0; 1 < 3; i++ ) {
  array.push('new item');
  console.log(array);
}
for ( var i = 0; i < array.length; i++) {
  console.log("yuju");
}
