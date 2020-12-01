import $ from 'jquery'
import {getComments} from "./services/getComments";

export const comments = () =>{
  getComments().then(function(data){
    showComments(data)
  });
};

const showComments = (comments) =>{
 console.debug($('body'));
  let count = 1
  let list = document.querySelector('.list-comment')
  comments.forEach( function(val) {
    if (count <= 10) {
        let newComment = document.createElement('li')
        let commentNumber = document.createElement('div')
        let commentTitle = document.createElement('h3')
        let commentEmail = document.createElement('span')
        let commentText = document.createElement('p')
        commentNumber.textContent = count.toString()
        commentTitle.textContent = val.name
        commentEmail.textContent = 'E-mail:  ' + val.email
        commentText.textContent = val.body
        newComment.appendChild(commentNumber)
        newComment.appendChild(commentTitle)
        newComment.appendChild(commentEmail)
        newComment.appendChild(commentText)
        list.appendChild(newComment)
      }
      count++
    })
}


