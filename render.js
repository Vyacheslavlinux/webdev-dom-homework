 import { array } from "./array.js";
 import { addComment } from "./listeners.js";
 import { initClickLike } from "./listeners.js";
 import {name, token} from './api.js';
 import { initClickComment } from "./listeners.js";
import { renderLogin } from "./renderLogin.js";
 const container = document.querySelector('.container')
 const LinkToLoginText = '<p><span class="link-login">Чтобы добавить комментарий, авторизуйтесь</span></p'

       

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

       const addCommentsHtml = `<ul id="container" class="comments" > 
      
      
      </ul>
      <div id="add-form" class="add-form">
        <input
          type="text"
          // id="add-form-name"
          class="add-form-name"
          placeholder="Введите ваше имя"
          readonly
          value="${name}"
          id="name-input"
        />
        <textarea
          type="textarea"
          id="add-form-text"
          class="add-form-text"
          placeholder="Введите ваш коментарий"
          rows="4"
          
        ></textarea>
        <div class="add-form-row">
          <button id="add-form-button" class="add-form-button">Написать</button>
        </div >
             
      </div>
      <div class="form-loading" style="display: none; margin-top:20px">Комментарий добавляется...

      </div>`

     const baseHtml = `<ul class="comments">${arrayHTML}</ul>
     ${token ? addCommentsHtml : LinkToLoginText}
     ` 
      
      
      
      
      
      container.innerHTML = baseHtml;

      
       if (token) {

      initClickLike(renderArray);
      initClickComment();
      addComment(renderArray);
       } else {
      document.querySelector('.link-login').addEventListener('click', () => {
        renderLogin();
      })
      }
    }

    