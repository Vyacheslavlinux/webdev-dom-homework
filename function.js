    import { array } from "./array.js";
    import { renderArray } from "./render.js";
    import { ChangeHTML } from "./changeHTML.js";
    const inputName = document.getElementById('add-form-name');
    const inputText = document.getElementById('add-form-text');
  
  export const initClickLike = () => {
      const arrayCounters = document.querySelectorAll(".like-button");
      for ( const arrayCounter of arrayCounters) {
      arrayCounter.addEventListener("click", () => {
        const index = arrayCounter.dataset.index;
        
        if (array[index].like == true) {
          
          array[index].like = false; 
          
          array[index].likenumber--;
        
        }
        else if (array[index].like == false) {
          
          array[index].like = true; 
          
          array[index].likenumber++;
        
        };
        
        event.stopPropagation();
        renderArray();
      })
      }
      
    }

     export const initClickComment = () => {
        const inputName = document.getElementById('add-form-name');
        const inputText = document.getElementById('add-form-text');

      const commentElements = document.querySelectorAll(".comment");
      for ( const commentElement of commentElements) {
        commentElement.addEventListener("click", () => {
          const index = commentElement.dataset.commentnumber;

          inputText.value =`${array[index].name} ${array[index].comment}`;
        });

      }
    }

     

      const buttonElement = document.getElementById("add-form-button");
    buttonElement.addEventListener("click", () => {
      
        
      
      const currentDate = new Date();

      

      if (inputName.value.trim()==='' || inputText.value.trim()==='') {
        alert("поля ввода не могут быть пустыми");
        return;        
      }

      

      array.push({
        

        name: ChangeHTML(inputName.value), 
        date: currentDate.toLocaleString('ru-RU', {
          year:"2-digit",
          month:"numeric",
          day:"numeric",
          hour:"numeric", 
          minute:"numeric"
        }).replace(',',''),
        comment: ChangeHTML(inputText.value),
        like: false,
        likenumber: 0
      });
      renderArray();
      inputName.value = "";
      inputText.value = "";
      
      
      

    });
    
    
