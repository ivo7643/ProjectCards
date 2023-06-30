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
function getQuestion(arr, idx) {
  return arr[idx].question;
}
function getAnswer(arr, idx) {
  return arr[idx].answer;
}

console.log('\x1b[33mДобро пожаловать!\n');
getFiles('film.txt');

const themes = [`\x1b[44m1. Фильмы 📽`, `\x1b[44m2. ПДД ⛔️`];
console.log(`\x1b[37m${themes.join('\n')}`);

const readline = readlineSync.question(`\x1b[44mВыберите номер темы: `);

async function question(readline) {
  const fileName = function () {
    if (readline == 1) {
      return 'film.txt';
    } else {
      return 'PDD.txt';
    }
  };
  let count = 20;
  const arrQuest = await getFiles(fileName());
  for (let i = 0; i < arrQuest.length; i += 1) {
    console.log(`\x1b[44m${getQuestion(arrQuest, i)}`);
    const readlineAnswer = readlineSync.question(`\x1b[44mВаш ответ: \n`);
    if (readlineAnswer.toLowerCase() === getAnswer(arrQuest, i).toLowerCase()) {
      console.log(`\x1b[44m👍 - Красава! Ваши баллы - ${count}`);
      count += 20;
    } else {
      console.log(
        `\x1b[41m👎 Ответ не верный! Правильный ответ:${getAnswer(arrQuest, i)}`
      );
    }
  }
  console.log(`\x1b[42m🥳🎉 Итого у Вас:${count - 20} баллов`);
}

question(readline);
