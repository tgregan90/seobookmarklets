javascript:(function()%7Blet linkNodes %3D document.querySelectorAll("td a")%3Blet urls %3D %5B%5D%3BlinkNodes.forEach(linkNode%3D>%7Burls.push(linkNode.outerText)%3B%7D)%3Blet strings %3D %5B%5D%3Burls.forEach(url%3D>%7Burl %3D url.toString()%3Burl %3D url.replaceAll("%2C"%2C"")%3Burl %3D url.substring(24)%3Burl %3D url.replaceAll("-"%2C" ")%3Burl %3D url.replaceAll("%2F"%2C"")%3Burl %2B%3D "%2C DLP %5Cr"%3Burl %3D url.trim()%3Bstrings.push(url)%3B%7D)%3Bfunction copyToClipboard(text) %7Bvar dummy %3D document.createElement("textarea")%3Bdocument.body.appendChild(dummy)%3Bdummy.value %3D text%3Bdummy.select()%3Bdocument.execCommand("copy")%3Bdocument.body.removeChild(dummy)%3B%7D%3BcopyToClipboard(strings.join(" %5Cr"))%7D)()