replaceText(document.body)
function replaceText(element) {
    if (element.hasChildNodes()) {
       element.childNodes.forEach(replaceText) 
    } else if (element.nodeType === Text.TEXT_NODE) {
       if (element.textContent.match(/coronavirus/gi)) {
		   const newElement = document.createElement('span')
		   newElement.innerHTML = element.textContent.replace(/(coronavirus)/gi, 
		   '<a href="http://www.cnn.com">Coronavirus</a>')
		   element.replaceWith(newElement)
	   }
	   // element.textContent = element.textContent.replace(/coronavirus/gi, 'XXX')
    }
}
