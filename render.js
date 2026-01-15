 import { array } from "./array.js";
 import { initClickLike } from "./function.js";
 import { initClickComment } from "./function.js";
 export const renderArray = () => {
 
        let classLike = "";

      const arrayHTML = array.map((arr, index) => {
        if (array[index].like == true){classLike = "-active-like"}
        else if (array[index].like == false) {classLike = ""         
        };
        
        return`<li class="comment" data-commentnumber="${index}">
          <div class="comment-header">
            <div>${arr.name}</div>
            <div>${arr.date}</div>
          </div>
          <div class="comment-body">
            <div class="comment-text">
              ${arr.comment}
            </div>
          </div>
          <div class="comment-footer">
            <div class="likes">
              <span class="likes-counter">${arr.likenumber}</span>
              <button data-index="${index}" class="like-button ${classLike}"></button>
            </div>
          </div>
        </li>
        `;
        
      }).join("");
      
      
      container.innerHTML = arrayHTML;
       

      initClickLike();
      initClickComment();
      
    }

    