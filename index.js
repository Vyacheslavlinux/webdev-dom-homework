
import {renderArray} from "./render.js"
import { addComment } from "./listeners.js";
import { fetchComments } from "./api.js";
import { updateComments } from "./array.js";



 export const fetchAndRenderComments = (isFirstLoading) => {

    if (isFirstLoading) {
       document.querySelector(".container").innerHTML = `<p>Продолжается загрузка комментариев...</p>` 
    }
fetchComments().then(data =>{
    updateComments(data);
    renderArray();
    
});
}
// addComment();
fetchAndRenderComments (true);
