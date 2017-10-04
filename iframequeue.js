var iframeQueue = {
	   
		 getIframes: function(){
			 /*getter method to retrieve iframes*/
			 
			 try {
				 
				 /*get by class name each way we are embedding them*/
				 var elems = document.querySelectorAll("iframe.DZembed-table, iframe.DZrdembed-table");
				 
				 console.log("elements: " + JSON.stringify(elems));
				 
				 return elems;
				 
			 } catch (err){
				 
				 console.log("Error getting iframes: " + err.message);
				 
			 }
			 
		 },
	
		 blockIframes: function(){
				
				var iframes = iframeQueue.getIframes();
				
				try {
					
					jQuery.map(iframes, function(e, i){
						
						/* start at third iframe in page */
						if(i > 2){
							/*set display to none*/
							jQuery(e).css("display","none");
							
						}
					  
				  }); 
					
				} catch (err){
					
					console.log("Error getting iframes: " + err.message);
					
				}
				
		 },
		 
		 returnIframes: function(){
			 
			 var t = new Date().getTime(),
			       s = 500,
						 i = 0;
			 
			 /*after window.onload event, add iframes back at 1/2 second interval*/
			 jQuery(window).load(function(){
				 
				(function returnIframes(){
					
					window.setTimeout(function(){
					
						var iframes = iframeQueue.getIframes(), 
						      ct = new Date().getTime();
									
						iframes[i++].style.display = "block"; 
						
						console.log("Added iframe " + i + " to page: " + (ct-t)/1000 + " seconds after page load.");
						
						i < iframes.length ? returnIframes() : console.log("Done adding iframes...");

						}, s);
						
					})();
					
			});
			 
		 },
		 
		 initProcess: function(){
			 
			 iframeQueue.blockIframes();
			 
			 iframeQueue.returnIframes();
			 
		 }
 

};

if(window.iframeQueue){
	
	iframeQueue.initProcess();
	
}
