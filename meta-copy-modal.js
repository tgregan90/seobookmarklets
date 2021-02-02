document.querySelectorAll(".metaBlockModal").forEach(block => block.remove());
let modalElement = `
<div class="metaBlockModal" style="">

<span class="metaBlockModal-closeButton" style=""></span>

<p><strong>Title</strong>: </p>
<p>${document.title} </p>
<p>Word Count: <span class="titleCount"></span></p>

<p> <strong>Meta Description</strong>: </p>
<p>${document.querySelector("meta[name='description']").content}</p>
<p>Word Count: <span class="descriptionCount"></span></p>

<style>
.metaBlockModal{
    display: block;
    width: 100%;
    background-color: lightgray;
    z-index: 100000000;
    padding: 30px 0px 20px 30%;
    position:relative;
}


.metaBlockModal-closeButton{
    position: absolute;
    top: 20px;
    right: 20px;
    border: 1px solid black;
    padding: 10px 15px;
    border-radius:50%;
    cursor:pointer;
    background-color: white;
}

.metaBlockModal-closeButton:after{
    content: "+";
}

.metaBlockModal-closeButton:hover{
    transform: rotate(45deg);
    background-color: black;
    color: white;
}
</style>
</div>
`
document.body.insertAdjacentHTML("afterBegin",modalElement);
let titleCount = document.title.length;
let descriptionCount = document.querySelector("meta[name='description']").content.length;
document.querySelector(".titleCount").innerText = titleCount;
document.querySelector(".descriptionCount").innerText = descriptionCount;
document.querySelector(".metaBlockModal-closeButton").addEventListener("click",(e)=>{
    document.querySelector(".metaBlockModal").remove();
})
