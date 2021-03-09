let headings = document.querySelectorAll("h1,h2,h3,h4,h5,h6");
for(heading of headings){
    switch (heading.nodeName) {
        case "H1":
            heading.style.backgroundColor = "green";
            heading.style.color = "white";
            heading.append(" - (H1)");
            break;
        case "H2":
            heading.style.backgroundColor = "blue";
            heading.style.color = "white";
            heading.append(" - (H2)");
            break;
        case "H3":
            heading.style.backgroundColor = "red";  
            heading.style.color = "white";
            heading.append(" - (H3)");
            break;
        case "H4":
            heading.style.backgroundColor = "purple"; 
            heading.style.color = "white"; 
            heading.append(" - (H4)");
            break;
        case "H5":
            heading.style.backgroundColor = "orange"; 
            heading.style.color = "white";
            heading.append(" - (H5)");
            break;  
        case "H6":
            heading.style.backgroundColor = "yellow";  
            heading.append(" - (H6)");
            break;            
            
        default:
            break;
    }
}
