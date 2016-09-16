var dotify = function(id){
	var sideArray = id.split(", ");
	for(var index=0; index<sideArray.length; index++){
		var ident = sideArray[index];
		var width = parseInt($(ident).css("width"));
		var height = parseInt($(ident).css("height"));
		var fontSize = parseInt($(ident).css("font-size"))/2;
		var horizRatio = width/fontSize;
		var lineHeight = fontSize*2.4;
		var vertRatio = Math.floor(height/lineHeight);
		var totalChar = vertRatio * horizRatio;
		var words = $(ident).text().split(" ");
	
		var i = 0;
		var lines = 0;
		while(lines<3){
			currWidth=0;
			while(currWidth<width){
			
				var wordWidth = words[i].length*fontSize;
				currWidth=currWidth+wordWidth;
				i++;
				if(currWidth>width){
					i--;
				}
		
			}
	
			lines++;
	
		}
	
		var dottedText = "";
		for(var j = 0; j<=i; j++){
		
			if(j==0){
				dottedText = words[j];
			}else{
				dottedText = dottedText+" "+words[j];
			}
		
		}
		
		var otherText = "";
		for(var k = i+1; k<words.length; k++){
		
			if(k==0){
				otherText = words[k];
			}else{
				otherText = otherText+" "+words[k];
			}
		
		}

		sideViewStorage[ident]=$(ident).text();
		//$("<p></p>").appendTo($(ident).parent()).attr("id",ident+"Hidden").css("display","none").text(otherText);
		$(ident).text(dottedText+"...");
	
	}

}

$(window).ready(function(){
	dotify("#side1Description, #side2Description, #side3Description, #side4Description");
});