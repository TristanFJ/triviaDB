import {
  Question
} from "../Models/Question.js"


class QuestionsService {
  constructor() {
    console.log('QuestionsService connected');
  }
}

export const questionsService = new QuestionsService()