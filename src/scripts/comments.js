import $ from "jquery";
import { getComments } from "./services/getComments";
import { newComment } from "./newComment";

let arrNewComments = [];

export const comments = () => {
  getComments().then((data) => {
    arrNewComments = sliceArr(data, 10);
    arrNewComments = arrNewComments.reverse();
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
    console.log(arrNewComments);
  }
  formInput.value = "";
});

document.addEventListener("click", function (e) {
  if (e.target && e.target.classList == "like") {
    e.preventDefault();
    liker(e.target);
  }
});

const liker = (targetElem) => {
  const parent = targetElem.closest('.media-body');
  let likeCount = parent.querySelector(".like-count");
  const commentIndex = arrNewComments.length - targetElem.dataset.id;
  arrNewComments[commentIndex].like = !arrNewComments[commentIndex].like;
  likeCount.lastChild.textContent = +arrNewComments[commentIndex].like;
  if (targetElem.textContent === "Like") {
    targetElem.textContent = "Dislike";
  } else {
    targetElem.textContent = "Like";
  }
};
