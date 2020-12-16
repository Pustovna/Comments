import $ from "jquery";
import { getComments } from "./services/getComments";
import { newComment } from "./newComment";

let arrNewComments = [];

export const comments = () => {
  getComments().then((data) => {
    arrNewComments = sliceArr(data, 10);
    arrNewComments = arrNewComments.reverse()
    showComments(arrNewComments);
  });
};

const sliceArr = (comments, index) => comments.slice(0, index);

const list = document.querySelector(".wrap");

const showComments = (comments) => {
  console.debug($("body"));
  comments.forEach(({ email, body, id }) => {
    list.insertAdjacentHTML("beforeend", newComment(email, body, id));
  });
};

const input = document.querySelector(".button-input");

input.addEventListener("click", (evt) => {
  evt.preventDefault();
  let formInput = document.querySelector(".form-control");
  if (formInput.value.trim() !== "") {
    let object = {
      body: formInput.value.trim(),
      id: arrNewComments.length + 1,
    };
    arrNewComments.unshift(object);
    list.insertAdjacentHTML(
      "afterBegin",
      newComment("???", formInput.value, object.id)
    );
    console.log(arrNewComments)
  }
  formInput.value = "";
});

document.addEventListener("click", function (e) {
  if (e.target && e.target.classList == "like") {
    e.preventDefault();
    let likeList = document.querySelectorAll(".like");
    let likeCount = document.querySelectorAll(".like-count");
    let i = arrNewComments.length - e.path[0].dataset.id
    arrNewComments[i].like = !arrNewComments[i].like;
    likeCount[i].lastChild.textContent = +arrNewComments[i].like;
    if (likeList[i].textContent === "Like") {
      likeList[i].textContent = "Dislike";
    } else {
      likeList[i].textContent = "Like";
  }
}});
