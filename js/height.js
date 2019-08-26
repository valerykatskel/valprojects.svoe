function setHeightById() {
	var n = setHeightById.arguments.length;
	var args = setHeightById.arguments;
	
	if(n>1)
	switch (isInteger(args[0]))
	{
         case true:
            for(i=1; i < n; i++) {	
				element = document.getElementById(args[i]);			
				element.style.height = parseInt(args[0]) + "px";
			}	
            break;
         case false:
		 	var element;
			var maxHeight = 0;
			/* */
			for(i=0; i < n; i++) {				
				element = document.getElementById(args[i]);
				//alert(args[i]);
				if(maxHeight < parseInt(getElementHeight(element))) maxHeight = parseInt(getElementHeight(element));
			}	
			for(i=0; i < n; i++) {	
				element = document.getElementById(args[i]);			
				element.style.height = maxHeight + "px";
			}			 
    }
}
function isInteger(s) { // String s
	var i;
	for (i = 0; i < s.length; i++) {
		var c = s.charAt(i);
		if (!((c >= "0") && (c <= "9"))) return false;
	}
	return true;
}

function getElementHeight(element) {	
	if(element.clientHeight) {
		return element.clientHeight;
	}
	else {
		if(element.offsetHeight) {
			return element.offsetHeight;
		}
	}
	return 10;
}