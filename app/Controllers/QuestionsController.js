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
    // console.log('QuestionsController connected');
    ProxyState.on('questions', _draw)
    this.getQuestions()
  }

  async getQuestions() {
    try {
      await questionsService.getQuestions()
      console.log('retrieved question successfully');
    } catch (error) {
      console.log(error);
    }
  }
}