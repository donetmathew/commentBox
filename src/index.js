import "./main.scss";

let container= document.getElementById("comment-container");

function render() {
    let comment=createComment("Helllo","Wahtsupppp");
    container.appendChild(comment);
    container.addEventListener("click",onCommentClick)
}

function onCommentClick(e){
    const target=e.target;
    let comment=target.closest(".comment");
    let mainComment=comment.firstChild;
    if(target.classList.contains("btn")){
       let commentInput= createCommentInput();
       console.log(comment.children);
       console.log([...comment.children].every(el => el?.classList.contains("input")));
       if([...comment.children].some(el => el?.classList.contains("input"))){
        return;
       }
       comment.children.length === 1 ?  target.closest(".comment").appendChild(commentInput) : mainComment.after(commentInput);
    }
    if(target.classList.contains("submit-btn")){
       let subComments=target.closest(".subComments");
       let title= comment.children[0].value;
       if(title){
        comment.remove();
        subComments.classList.remove("input");
        subComments.prepend(createComment(title))
       }
     }
}

function createComment(title, description) {
    let random= Math.floor(Math.random() * 100) + 1;
    let avatar = createElement("img",{className:"avatar", src:`https://randomuser.me/api/portraits/women/${random}.jpg`})
    let p = createElement("p", { className: "text-bold title", innerHTML: title });
    let button = createElement("button", { className: "btn", innerHTML:"Reply" });
    let textContent = createElement("div", { className: "comment-content" } ,p,button);
    let mainComment = createElement("div", { className: "mainComment" } ,avatar,textContent);
    let comment =createElement("div", {className:"comment"},mainComment);
    return comment; 
}

function createCommentInput() {
    let inputTitle = createElement("input", { className: "input-title",  placeholder: "title"});
    let button = createElement("button", { className: "submit-btn", innerHTML:"Submit" });
    let comment = createElement("div", { className: "comment" } ,inputTitle,button);
    let commentInput = createElement("div", { className: "subComments input" } ,comment);

    return commentInput; 
}

function createElement(type = "div", props, ...children) {
    let el = document.createElement(type);
    for (let key in props) {
        el[key] = props[key];
    }
    for(let child of children){
        el.appendChild(child);
    }
    return el;
}

render();