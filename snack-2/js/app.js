// variables
const maxFouls = 20;
const maxPoints = 100;

// array of objects describing football teams
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

const foulsDrown = [];


// iterazione per inserire numeri randomici in fouls e points
// e creazioe di un oggetto con nome e falli pushato in un array
for (let i = 0; i < teams.length; i++) {

  const currentFouls = getRandom(0, maxFouls);
  const currentPoints = getRandom(0, maxPoints);

  teams[i].fouls = currentFouls;
  teams[i].points = currentPoints;

  const singleTeam = {};

  singleTeam.name = teams[i].name;
  singleTeam.fouls = teams[i].fouls;

  foulsDrown.push(singleTeam);
};

// stampa dei due array di oggetti
console.log(teams);
console.log(foulsDrown);


// genera un numero intero random tra min e max inclusi
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};