import $ from "jquery";
import { getComments } from "./services/getComments";
import { newComment } from "./newComment";

let arrNewComments = []

export const comments = () => {
  getComments().then((data) => {
    showComments(sliceArr(data, 10));
    arrNewComments = sliceArr(data, 10)
  });
};

const sliceArr = (comments, index) => comments.slice(0, index);

const list = document.querySelector(".wrap");

const showComments = (comments) => {
  console.debug($("body"));
  comments.forEach(({ email, body }) => {
    list.insertAdjacentHTML("beforeend", newComment(email, body));
  });
};

const input = document.querySelector('.button-input')


input.addEventListener('click', (evt) => {
  evt.preventDefault()
  let formInput = document.querySelector('.form-control');
  if (formInput.value.trim() !== '') {
    arrNewComments.push(formInput.value.trim())
    list.insertAdjacentHTML("afterBegin", newComment('???', formInput.value))
  }
  formInput.value = ''
})

