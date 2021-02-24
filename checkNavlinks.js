let links = document.querySelectorAll("nav a");
async function processLinks(linksArray){
    for (const link of linksArray){
        await testLink(link);
    }
}

async function testLink(link){
    let request = new Request(link);
    let headers = new Headers({"User-Agent":"MY-UA-STRING"});
try{
  await fetch(request,{
    method  : 'GET', 
    headers : headers})
      .then(response=>{
    console.log(response);
    console.log(response.ok);
     if(response.ok && response.redirected == false ){
        link.style.color = "green"
    } else {
        link.style.color = "red"
    }

  })}catch(e){
    console.log(e);
}
}
processLinks(links);
