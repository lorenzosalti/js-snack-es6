
const teams = [
  {
    name: 'Inter',
    fouls: 0,
    points: 0
  },
  {
    name: 'Milan',
    fouls: 0,
    points: 0
  },
  {
    name: 'Juventus',
    fouls: 0,
    points: 0
  },
  {
    name: 'Roma',
    fouls: 0,
    points: 0
  },
  {
    name: 'Napoli',
    fouls: 0,
    points: 0
  }
];








// genera un numero intero random tra min e max inclusi
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};