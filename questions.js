const { question } = require("readline-sync");



class Questions {
  constructor(args = {}) {
    this.question = args.question;
    this.answer = args.answer;
    this.score = args.score
  }

  generateQuest(q1)
}
let q1 
let q2 
let q3

 q1 = new Questions {(question:'Почему надо оглянуться вокруг и посмотреть назад?', answer: 'Духи', score: 100)}
 q2 = new Questions {(question:'Что любит рюк из тетради смерти ?', answer: 'яблоко', score: 10)}
 q3 = new Questions {(question:'что поставил джотаро куджо в игре в покер из джо джо ?', answer: 'душу', score: 9000)}




module.exports = { Questions };
