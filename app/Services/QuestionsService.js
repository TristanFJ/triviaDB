import {
  ProxyState
} from "../AppState.js";
import {
  Question
} from "../Models/Question.js"
import {
  api
} from "../Services/AxiosService.js"

class QuestionsService {
  constructor() {
    // console.log('QuestionsService connected');
  }

  async getQuestions() {
    console.log('getting question');
    const response = await api.get()
    ProxyState.questions = response.data.results.map(q => new Question(q))
  }
}

export const questionsService = new QuestionsService()