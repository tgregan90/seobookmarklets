let links = document.querySelectorAll(".top-navigation-container a");
async function processLinks(linksArray){
    for (const link of linksArray){
        await testLink(link);
    }
}

async function testLink(link){
    let request = new Request(link);
try{
  await fetch(request).then(response=>{
    console.log(response);
    console.log(response.ok);
     if(response.ok){
        link.style.color = "green"
    } else {
        link.style.color = "red"
    }

  })}catch(e){
    console.log(e);
}
}
processLinks(links);
