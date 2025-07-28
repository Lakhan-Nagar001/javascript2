DOM-> DOCUMENT OBJECT MODEL

when a web page is loaded, the browser creates a Document Object Model (DOM)

const { Children } = require("react")

Top 3 Musketeers of Web Dev

Html (sturcture)  ,  css(style) ,  js(logic)


Basic Starter code->  

<style></style>   tag connects HTML with CSS 
<script></script> tag connects HTML with JS


Dom manipulation 

Query selector:

document.querySelector("myId / myClass / tag") // returns first element
document.querySelectorAll("myId / myClass / tag") // returns a NodeList

properties->

1. tagName: returns the tag for element Node 
2. innnerText; returns the text content of the elemnt and all its Children
3. innerHTML; returns the plain text or HTML contents in the element
4. textContent; returns textual content even for hideen   elements

           ///Lecture- 7(Apana college)

attributes->

getAttribute( attr) // to get attribute value
setAttributes(attr, value) // to set the attribute val th

style->

Node.style

