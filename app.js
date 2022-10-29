let score = new Array(500000);

function testerInner() {
  const a = performance.now();
  const r = [];
  for (let i = 0; i < score.length; i++) {
    const random = Math.random();
    r.push(random);
  }
  const b = performance.now();
  return b - a;
}

function testerOuter() {
  const a = performance.now();
  const x = score.length;
  const r = [];
  for (let i = 0; i < x; i++) {
    const random = Math.random();
    r.push(random);
  }
  const b = performance.now();
  return b - a;
}

function tester(func) {
  const timeArr = [];
  for (let i = 0; i < 1000; i++) {
    timeArr.push(func());
  }
  return timeArr;
}

const timeInnerArray = tester(testerInner);
const timeOuterArray = tester(testerOuter);

function avaTime(arr) {
  const avarage = arr.reduce((total, current) => total + current, 0);
  return avarage / arr.length;
}

console.log('Inner - should be slower (greater than number) <<<<<<>>>>>>');
console.log(avaTime(timeInnerArray));
console.log('Outer - should be faster (less than number)<<<<<<>>>>>>');
console.log(avaTime(timeOuterArray));
