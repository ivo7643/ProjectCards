const { Topics } = require("./topics");

const topic = new Topics(["onime.txt", "pivo.txt", "raccoon.txt", "rofl.txt"]);

const question = topic.choiceTheme();

for (let i = 0; i < question.length; i++) {
  topic.questions(question[i]);
}

topic.end();
