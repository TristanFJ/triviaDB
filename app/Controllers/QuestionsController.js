import {
  questionsService
} from "../Services/QuestionsService.js"
import {
  ProxyState
} from "../AppState.js";

export class QuestionsController {


  constructor() {
    console.log('QuestionsController connected');
  }

  async getQuestions(url) {
    try {
      await questionsService.getQuestions
    } catch (error) {

    }
  }
}