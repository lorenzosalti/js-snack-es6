
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

// array contenente i pesi di tutte le biciclette
const weights = [];

// console.log(bikes);

for (i = 0; i < bikes.length; i++) {
  const currentW = bikes[i]['weight'];

  weights.push(parseFloat(currentW));
}

// console.log(weights);

// peso minore dell'array
const minWeight = Math.min(...weights);

// console.log(`minWeight: ${minWeight}`);

// indice del peso minore
const index = weights.indexOf(minWeight);

// console.log(`index: ${index}`);

// stampa della bicicletta più leggera
console.log(`La bicicletta da corsa più leggera è:
${bikes[index]['brand']} ${bikes[index]['model']}.
Dal peso di ${bikes[index]['weight']}Kg.`);
