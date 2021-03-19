document.querySelectorAll(".metaBlockModal").forEach(block => block.remove());
let modalElement = `
<div class="metaBlockModal" >
<span class="metaBlockModal-closeButton" ></span>
<p><strong>Title</strong>: </p>
<p>${document.title} </p>
<p>Word Count: <span class="titleCount"></span></p>
<p> <strong>Meta Description</strong>: </p>
<p>${document.querySelector("meta[name='description']").content}</p>
<p>Word Count: <span class="descriptionCount"></span></p>
<p><strong>Meta robots</strong>:</p> 
<p>${document.querySelector("meta[name='robots']").content}</p>
<p><strong>Canonical</strong>:</p>
<p>${document.querySelector("link[rel='canonical']").href} - <span class=${( document.querySelector("link[rel='canonical']").href === window.location.href ) ? "Pass" :  "Fail"}>
${( document.querySelector("link[rel='canonical']").href === window.location.href ) ?  "Pass" :  "Fail"}</span>
</p>
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
.metaBlockModal .Pass{
    background-color: lightgreen;
    padding: 10px 20px;
}
.metaBlockModal .Fail{
    background-color:#ffcccb;
    padding: 10px 20px;
}
</style>
</div>
`;
document.body.insertAdjacentHTML("afterBegin",modalElement);
let titleCount = document.title.length;
let descriptionCount = document.querySelector("meta[name='description']").content.length;
document.querySelector(".titleCount").innerText = titleCount;
document.querySelector(".descriptionCount").innerText = descriptionCount;
document.querySelector(".metaBlockModal-closeButton").addEventListener("click",(e)=>{
    document.querySelector(".metaBlockModal").remove();
})
