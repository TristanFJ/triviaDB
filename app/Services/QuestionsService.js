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
    console.log('QuestionsService connected');
  }

  async getQuestions(url) {
    console.log('getting questions');
    const response = await api.get(url)
    console.log('api response: ', response.data);
    ProxyState.questions = response.data.results.map(q => new Question(q))
  }
}

export const questionsService = new QuestionsService()