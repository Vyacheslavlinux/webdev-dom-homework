
import {renderArray} from "./render.js"
import { addComment } from "./listeners.js";
import { fetchComments } from "./api.js";
import { updateComments } from "./array.js";

document.querySelector(".comments").innerHTML = '<ul> Продолжается загрузка комментариев...</ul>'

fetchComments().then(data =>{
    updateComments(data);
    renderArray();
});


addComment();