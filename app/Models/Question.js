import {
  ProxyState
} from "../AppState.js"
import {
  generateId
} from "../Utils/generateId.js"

export class Question {
  constructor(data) {
    this.question = data.question
    this.answer = data.correct_answer
    this.wrong = data.incorrect_answers
  }

  get Template() {
    return /*html*/ `
      <div class="card m-2 shadow">
        <div class="card-body" onclick="alert('${this.answer}')">
          <h4 class="text-uppercase">${this.question}</h4>
          </div>
          </div>

          <button class="btn btn-primary" onclick="location.reload()">New Question</button>

    `
  }
}