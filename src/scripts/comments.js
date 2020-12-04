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
  let list = document.querySelector('.wrap')
    let commentCount = document.querySelector('.comment-count')
  comments.forEach( function(val) {
    if (count <= 10) {
       list.insertAdjacentHTML('beforeend', `
        <div class="media">   
            <a class="pull-left" href="#">
             <img class="media-object" src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="">
            </a>  
                <div class="media-body">
                    <h4 class="media-heading">${ val.name }</h4>
                    <p>${ val.body }</p>
                    <ul class="list-unstyled list-inline media-detail pull-left">
                      <li><i class="fa fa-calendar"></i>27/02/2014</li>
                      <li><i class="fa fa-thumbs-up"></i>13</li> 
                    </ul>
                    <ul class="list-unstyled list-inline media-detail pull-right">
                       <li class=""><a href="">Like</a></li>
                       <li class=""><a href="">Reply</a></li>
                    </ul>
                </div>
        </div> `)
        commentCount.textContent =` ${ count.toString() } Comments `
      }
      count++
    })
}


