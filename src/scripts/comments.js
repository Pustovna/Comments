import $ from "jquery";
import { getComments } from "./services/getComments";
import { newComment } from "./newComment";

export const comments = () => {
  getComments().then((data) => {
    showComments(sliceArr(data, 10));
  });
};

const sliceArr = (comments, index) => comments.slice(0, index);

const showComments = (comments) => {
  console.debug($("body"));
  const list = document.querySelector(".wrap");
  comments.forEach(({ email, body }) => {
    list.insertAdjacentHTML("beforeend", newComment(email, body));
  });
};
