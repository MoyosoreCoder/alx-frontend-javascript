//export var a = 20;
export function taskFirst() {
  var task = 'I prefer const when I can.';
  var c = 30;
  return task;
}

export function getLast() {
  return ' is okay';
}

export function taskNext() {
  var combination = 'But sometimes let';
  combination += getLast();

  return combination;
}
export var a = 20;//undfined output
