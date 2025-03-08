
// array contenente oggetti
const bikes = [
  {
    brand: 'Colnago',
    model: 'V4RS',
    weight: 7.3
  },
  {
    brand: 'Specialized',
    model: 'Tarmac SL8',
    weight: 6.8
  },
  {
    brand: 'Cervèlo',
    model: 'S5',
    weight: 7.2
  },
  {
    brand: 'Trek',
    model: 'Madone SL 7',
    weight: 7.8
  },
  {
    brand: 'Wilier',
    model: 'Filante SLR',
    weight: 6.9
  }
]

const weights = [];


console.log(bikes);

for (i = 0; i < bikes.length; i++) {
  const currentW = bikes[i]['weight'];

  weights.push(parseFloat(currentW));
}

console.log(weights);

const minWeight = Math.min(...weights);

console.log(`minWeight: ${minWeight}`);

const index = weights.indexOf(minWeight);

console.log(`index: ${index}`);
