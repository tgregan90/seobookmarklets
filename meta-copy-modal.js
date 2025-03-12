document.querySelectorAll(".metaBlockModal").forEach(block => block.remove());
let  titleTag = false, 
    titleLen = false,
    titleCount = false,
    metaDescription = false, 
    descriptionLen = false,
    descriptionWordCount = false,
    descriptionCount = false,
    canonical = false,
    canonicalFlag = false,
    canonicalCount = false,
    metaRobots = false,
    metaRobotsFlag = false,
    metaRobotsCount = false;

try{    
    titleTag = document.querySelector("head title").textContent;
    titleLen = titleTag.length;
    titleCount = document.querySelectorAll("head title").length;
    } catch(e) {
        console.log(`Error finding title: ${e}`);
    }

try{    
    metaDescription = document.querySelector("meta[name='description']").content;
    descriptionLen = document.querySelector("meta[name='description']").content.length;
    descriptionWordCount = descriptionLen - (metaDescription.replaceAll(" ","")).length;
    descriptionCount = document.querySelectorAll("meta[name='description']").length;

    } catch(e) {
        console.log(`Error finding Meta Description: ${e}`);
    }

try{    
     canonical = document.querySelector("link[rel='canonical']").href
     canonicalFlag = document.querySelector("link[rel='canonical']").href === window.location.href ? "Pass" : "Fail";
     canonicalCount = document.querySelectorAll("head link[rel='canonical']").length;

    } catch(e) {
        console.log(`Error finding Canonical: ${e}`);
    }
try{    
     metaRobots = document.querySelector("meta[name='robots']").content.toLowerCase();
     metaRobotsFlag = ( metaRobots.includes("noindex") ||  metaRobots.includes("nofollow") ) ? false : true;
     metaRobotsCount = document.querySelectorAll("head meta[name='robots']").length;

    } catch(e) {
        console.log(`Error finding Meta Robots: ${e}`);
    }

let modalElement = `
<div class="metaBlockModal" >
    <div class="container">


        <span class="metaBlockModal-closeButton" ></span>

        <p class="bookmarklet-header"><strong>Title</strong></p>
        <p>${ titleTag ? titleTag : "No Title Found" } </p>
        <p><strong>Letter Count</strong>: <span class="titleCount">${ titleLen ? titleLen : "No Title Found" }</span></p>
        <p><strong>Count of Titles</strong>: <span class="titleCount">${ titleCount ? titleCount : "No Titles Found" }</span></p>

        <p class="bookmarklet-header"><strong>Meta Description</strong></p>
        <p>${ metaDescription ? metaDescription : "No Meta Description Found"}</p>
        <p><strong>Letter Count</strong>: <span class="descriptionLen">${descriptionLen ? descriptionLen : "No Meta Description Found"}</span></p>
        <p><strong>Word Count</strong>: <span class="descriptionWordCount">${descriptionWordCount ? descriptionWordCount : "No Meta Description Found"}</span></p>
        <p><strong>Count of Descriptions</strong>: <span class="descriptionCount">${descriptionCount ? descriptionCount : "No Meta Descriptions Found"}</span></p>

        <p class="bookmarklet-header"><strong>Meta robots</strong>:<span class=${metaRobotsFlag ? "Pass" : "Fail"}>${metaRobotsFlag ? "Pass" : "Fail"}</span></p> 
        <p>${ metaRobots ? metaRobots : "No Meta Robots Found"}</p>
        <p><strong>Count of meta robots tags</strong>: ${ metaRobotsCount ? metaRobotsCount : "No Meta Robots Found"}</p>

        <p class="bookmarklet-header"><strong>Canonical</strong>:<span class=${canonicalFlag}>${canonicalFlag}</span></p>
        <p><strong>HREF</strong>: ${ canonical ? canonical : "No Canonical Tag Found"} - <span class="${ canonical ? (canonicalFlag ? "Pass" : "Fail") : "" }">${canonical ? (canonicalFlag ? "Pass" : "Fail") : ""}</span></p>
        <p><strong>Count of Canonicals</strong>: ${ canonicalCount ? canonicalCount : "No Canonical Tags Found"}</p>
        <style>
            .bookmarklet-header {
                font-size: 22px;
                line-height: 26px;
                color: rebeccapurple;
            }
            .metaBlockModal{
                all: unset;
                display: block;
                width: 100%;                
                background-color: lightgray;
                z-index: 100000000 !important;
                line-height: 18px;
                font-size: 16px;
                font-family: helvetica,serif;
            }

            .metaBlockModal p {
                padding: 5px 0;
                margin: 5px 0;
            }

            .metaBlockModal .container {
                position: relative;
                max-width: 1200px;
                margin: 0 auto;
                padding: 30px 0px 20px 10px;
            }
            .metaBlockModal p{
                margin-bottom: 10px;
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
                font-size: 1rem;
            }
            .metaBlockModal-closeButton:hover{
                transform: rotate(45deg);
                background-color: black;
                color: white;
            }
            .metaBlockModal .Pass{
                background-color: lightgreen;
                padding: 5px 10px;
                border-radius: 15%;
            }
            .metaBlockModal .Fail{
                background-color:#ffcccb;
                padding: 5px 10px;
                border-radius: 15%;
            }
        </style>
    </div>
</div>
`;
document.body.insertAdjacentHTML("afterBegin",modalElement);

document.querySelector(".titleCount").innerText = titleCount;
document.querySelector(".descriptionCount").innerText = descriptionCount;
document.querySelector(".metaBlockModal-closeButton").addEventListener("click",(e)=>{
    document.querySelector(".metaBlockModal").remove();
});