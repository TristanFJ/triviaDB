import {
  questionsService
} from "../Services/QuestionsService.js"
import {
  ProxyState
} from "../AppState.js";

export class QuestionsController {


  constructor() {
    console.log('QuestionsController connected');
    this.getQuestions()
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