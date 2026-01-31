
import {renderArray} from "./render.js"
import { addComment } from "./listeners.js";
import { fetchComments } from "./api.js";
import { updateComments } from "./array.js";

fetchComments().then(data =>{
    updateComments(data);
    renderArray();
});

// renderArray();
addComment();