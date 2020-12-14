import $ from "jquery";
import { getComments } from "./services/getComments";
import { newComment } from "./newComment";

let arrNewComments = [];

export const comments = () => {
  getComments().then((data) => {
    arrNewComments = sliceArr(data, 10);
    showComments(arrNewComments);
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
  }
  formInput.value = "";
});

document.addEventListener("click", function (e) {
  if (e.target && e.target.classList == "like") {
    e.preventDefault();
    let likeList = document.querySelectorAll(".like");
    let likeCount = document.querySelectorAll(".like-count");
    for (let i = 0; i < likeList.length; i++) {
      if (likeList[i] === e.target) {
        arrNewComments[i].like = !arrNewComments[i].like;
        console.log(arrNewComments[i].like);
        likeCount[i].lastChild.textContent = +arrNewComments[i].like;
      }
    }
  }
});
