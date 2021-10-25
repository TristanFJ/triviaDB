import {
  questionsService
} from "../Services/QuestionsService.js"
import {
  ProxyState
} from "../AppState.js";

function _draw() {
  let questions = ProxyState.questions
  let template = ''
  questions.forEach(q => template += q.Template)
  document.getElementById('app').innerHTML = template
}


export class QuestionsController {


  constructor() {
    console.log('QuestionsController connected');
    this.getQuestions()

    ProxyState.on('questions', _draw)
  }

  async getQuestions(url) {
    try {
      await questionsService.getQuestions(url)
      console.log('get questions complete');
    } catch (error) {
      console.log(error);
    }
  }
}