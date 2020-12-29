const express = require('express');
const path = require('path');
const cool = require('cool-ascii-faces');
const PORT = process.env.PORT || 5000;

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/cool', (req, res) => res.send(cool()))
  .get('/tarot', (req, res) => res.send(tarot()))
  .get('/drag', (req, res) => res.send(drag()))
  .listen(PORT, () => console.log(`Listening on ${PORT}`))

const tarot = () => {
  const cards = [
    'O Louco',
    'O Mago',
    'A Alta Sacerdotisa',
    'A Imperatriz',
    'O Imperador',
    'O Hierofante',
    'Os Namorados',
    'A Carruagem',
    'A Força',
    'O Eremita',
    'A Roda da Fortuna',
    'A Justiça',
    'O Enforcado',
    'A Morte',
    'Temperança',
    'O Diabo',
    'A Torre',
    'A Estrela',
    'A Lua',
    'O Sol',
    'O Julgamento',
    'O Mundo',
    'Ás de Espadas',
    '2 de Espadas',
    '3 de Espadas',
    '4 de Espadas',
    '5 de Espadas',
    '6 de Espadas',
    '7 de Espadas',
    '8 de Espadas',
    '9 de Espadas',
    '10 de Espadas',
    'Pajem de Espadas',
    'Cavaleiro de Espadas',
    'Rei de Espadas',
    'Rainha de Espadas',
    'Ás de Copas',
    '2 de Copas',
    '3 de Copas',
    '4 de Copas',
    '5 de Copas',
    '6 de Copas',
    '7 de Copas',
    '8 de Copas',
    '9 de Copas',
    '10 de Copas',
    'Pajem de Copas',
    'Cavaleiro de Copas',
    'Rei de Copas',
    'Rainha de Copas',
    'Ás de Pentáculos',
    '2 de Pentáculos',
    '3 de Pentáculos',
    '4 de Pentáculos',
    '5 de Pentáculos',
    '6 de Pentáculos',
    '7 de Pentáculos',
    '8 de Pentáculos',
    '9 de Pentáculos',
    '10 de Pentáculos',
    'Pajem de Pentáculos',
    'Cavaleiro de Pentáculos',
    'Rei de Pentáculos',
    'Rainha de Pentáculos',
    'Ás de Paus',
    '2 de Paus',
    '3 de Paus',
    '4 de Paus',
    '5 de Paus',
    '6 de Paus',
    '7 de Paus',
    '8 de Paus',
    '9 de Paus',
    '10 de Paus',
    'Pajem de Paus',
    'Cavaleiro de Paus',
    'Rei de Paus',
    'Rainha de Paus'
  ];

  const direction = [' de cabeça pra baixo', ' de cabeça pra cima'];

  return cards[Math.floor(Math.random() * cards.length)] + direction[Math.floor(Math.random() * direction.length)];
}

const drag = () => {
  const names = [
    'Viviane',
    'Luciula',
    'Tieta',
    'Victorya',
    'Natasya',
    'Víbora',
    'Emmanule',
    'Sharon',
    'Pérola',
    'Ximbica',
    'Mileny',
    'Florinda',
    'Crystal',
    'Joaquina'
  ];

  const surNames = [
    'Faca Dura',
    'Doce de Banana',
    'Doce Mel',
    'Vírgula Solta',
    'Furacão',
    'Tormenta do Destino',
    'Do Pingo Do Mei Dia',
    'Boca De Se Lascar',
    'Fox',
    'Dior',
    'Cai De Queda',
    'Bang Bang',
    'Ahaza Brasa',
    'Menina Virgem',
    'Berro',
    'Starlight',
    'Swarovski',
    'Do Brasil',
    'Perdida no Mundo'
  ];

  return names[Math.floor(Math.random() * names.length)] + ' ' + surNames[Math.floor(Math.random() * surNames.length)];
}