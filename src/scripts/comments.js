import $ from "jquery";
import { getComments } from "./services/getComments";
import { newComment } from "./newComment";

let arrNewComments = [];
let likeList;
let likeCount;

export const comments = () => {
  getComments().then((data) => {
    arrNewComments = sliceArr(data, 10);
    showComments(arrNewComments);
    like();
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

const input = document.querySelector(".button-input");

input.addEventListener("click", (evt) => {
  evt.preventDefault();
  let formInput = document.querySelector(".form-control");
  if (formInput.value.trim() !== "") {
    let object = { body: formInput.value.trim() };
    arrNewComments.unshift(object);
    list.insertAdjacentHTML("afterBegin", newComment("???", formInput.value));
    like();
  }
  formInput.value = "";
});


const like = () => {
  likeList = document.querySelectorAll('.like')
  likeCount = document.querySelectorAll('.like-count')
  for (let i=0; i < likeList.length; i++) {
    addLike(i);
  }
}

const addLike = (i) => likeList[i].addEventListener('click', (evt) =>
  {
    evt.preventDefault();
    if (typeof arrNewComments[i].like === "undefined") {
      arrNewComments[i].like = 1;
    } else {
      arrNewComments[i].like += 1
    }
    likeCount[i].lastChild.textContent = arrNewComments[i].like
  })





