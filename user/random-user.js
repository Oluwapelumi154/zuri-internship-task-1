const groupA = ['Oluwapelumi', 'Oluwakemi', 'Jane', 'Joseph', 'Tunde', 'soji'];
const groupB = ['Susan', 'Richard', 'Donald', 'Samuel', 'Adejare', 'Caleb', 'philemon'];
const places = ['NewYork', 'San-franscisco', 'California', 'Texas', 'illonis'];
const groupAData = [];
const groupBData = [];
const Places = [];
for (let i = 0; i < groupA.length; i++) {
  const randomNumber = Math.floor(Math.random() * groupA.length);
  groupAData.push(groupA[randomNumber]);
}
for (let i = 0; i < groupB.length; i++) {
  const randomNumber = Math.floor(Math.random() * groupB.length);
  groupBData.push(groupB[randomNumber]);
}
for (let i = 0; i < places.length; i++) {
  const randomNumber = Math.floor(Math.random() * places.length);
  Places.push(places[randomNumber]);
}
const Data = [...groupAData.slice(0, 1), ...groupBData.slice(0, 1), ...Places.slice(0, 1)];
function appendData() {
  const users = document.querySelector('.users');
  const groupA = document.createElement('div');
  groupA.className = 'groupA';
  users.append(groupA);
  for (let i = 0; i <= Data.length; i++) {
    groupA.innerHTML = `${Data[0]} and ${Data[1]} will be going on a dinner date at places ${Data[2]}`;
  }
  return users;
}
appendData();

/** Testing Radom Values **/
/** Returns a range of value between 2-3 **/
function getRandomValue(min, max) {}
/** Returns a range of value between 2-4 **/
function getRandomIntInclusive(min, max) {
  return Math.random() * (max - min + 1) + min;
}
/** Returns a range of value between 0-1 **/
function getRandom() {
  return Math.random() * 2;
}
/** Returns a range of value between 0-0.9 **/
function getRandomValue() {
  return Math.random();
}
console.log(getRandomValue(2, 4));
console.log(getRandomIntInclusive(2, 4));
console.log(getRandom());
console.log(getRandomValue());
