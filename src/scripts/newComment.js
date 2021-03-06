export const newComment = (email, body, id, likeAmount) => {
  return `
        <div class="media">   
            <a class="pull-left" href="#">
             <img class="media-object" src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="">
            </a>  
                <div class="media-body">
                    <h4 class="media-heading">${email}</h4>
                    <p>${body}</p>
                    <ul class="list-unstyled list-inline media-detail pull-left">
                      <li><i class="fa fa-calendar"></i>27/02/2014</li>
                      <li><i class="fa fa-thumbs-up"></i><span class="like-count">${likeAmount}</span></li> 
                    </ul>
                    <ul class="list-unstyled list-inline media-detail pull-right">
                       <li><a href="" class="like" data-id="${id}">Like</a></li>
                       <li class=""><a href="">Reply</a></li>
                    </ul>
                </div>
        </div> `;
};
