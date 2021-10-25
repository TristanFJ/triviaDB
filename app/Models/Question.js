import {
  generateId
} from "../Utils/generateId.js"

export class Question {
  constructor(data) {
    this.question = data.question
    this.answer = data.answer
  }

  get Template() {
    return /*html*/ `
      <div class="card m-2 shadow">
        <div class="card-body">
          <h4 class="text-uppercase no-select">${this.question}</h4>
        </div>
      </div>
    `
  }
}