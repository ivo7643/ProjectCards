

const fs = require('fs').promises;
const readlineSync = require('readline-sync');

function getFiles(fileName) {
  return fs.readFile(`./themes/${fileName}`, 'utf-8').then((data) => {
    const qq = data.split('\n').filter((el) => el !== '');
    const quest = [];
    for (let i = 0; i < qq.length; i += 2) {
      quest.push({ question: qq[i], answer: qq[i + 1] });
    }
    return quest;
  });
}


