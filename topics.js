/* eslint-disable prefer-destructuring */
const readline = require("readline-sync");
const fs = require("fs");
const { Questions } = require("./questions");

function getFiles(fileName) {
  const data = fs.readFileSync(`./topics/${fileName}`, "utf-8");

  const question = data.split("\n").filter((el) => el !== "");

  const questArr = [];
  for (let i = 0; i < question.length; i += 2) {
    questArr.push(
      new Questions({ question: question[i], answer: question[i + 1] })
    );
  }
  return questArr;
}

class Topics {
  constructor(filenames) {
    const allDataArr = filenames.map((file) => getFiles(file));
    this.type1 = allDataArr[0];
    this.type2 = allDataArr[1];
    this.type3 = allDataArr[2];
    this.type4 = allDataArr[3];
    this.score = 0;
    this.name = "";
  }

  choiceTheme() {
    this.name = readline.question("ИМЯ ИГРОКА: ");
    let arr = ["0", "type1", "type2", "type3", "type4"];
    let arr2 = ["0", "Анимэ", "Пиво", "Ведьмак", "Уровень сложности БОГ"];
    console.log(`\n===== 🤓 НАЧНЕМ ИГРУ ${this.name} 🤓 =====\n
    Темы для игры:
        1. ${arr2[1]}
        2. ${arr2[2]}
        3. ${arr2[3]}
        4. ${arr2[4]} \n`);
    let name = readline.question("Выбери тему:  ");
    return this[arr[Number(name)]];
  }

  questions(question) {
    console.log(`\n❓Вопрос: ${question.question}`);
    let name = readline.question("Ваш ответ: ");
    if (name.toLowerCase() === question.answer.toLowerCase()) {
      this.score += 1;
      console.log(` ✅ КРАСАВА - ответ правильный || счет = ${this.score}`);
    } else {
      console.log(
        ` ❌ грусть печаль - ответ неправильный || счет = ${this.score}\n ❎ Правильный ответ: ${question.answer}`
      );
    }
  }

  end() {
    let am;
    let con;
    if (this.score > 1) {
      am = "🥳";
      con = `${this.name} МОЛОДЕЦ! ЭТО ПОБЕДА`;
    } else {
      am = "🥵";
      con = `${this.name} ЭТО ПОРАЖЕНИЕ`;
    }
    console.log(
      `\n===== 🤓 КОНЕЦ ИГРЫ 🤓 =====\n ${con} ${am} Правильных ответов = ${this.score}  ${am}\n`
    );
  }
}
module.exports = { Topics };
