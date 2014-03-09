// JavaScript Document
var textsInLinks=[];  //maintain the count of each link's text in array 
var currentLink=0;  				//track the count of link.
var currentLinkText=0;				//track the count of text in each link. 

$(document).ready(function() 
{	
   	setupElements();	//to setup page elements and display properties.   	  	
	
});

//to setup page elements and display properties
function setupElements()
{
	getLinkAndTextCount();
	displayText();
   	changePageNumber(); 	
   	hightlightMenu();
   	
	$(".btnNext").on("click",function()		
	{
		nextButtonclick();				//function for handling the btnNext click		
    	changePageNumber();
    });
    
    $(".btnPrev").on("click",function()		
	{
		prevButtonclick();				//function for handling the btnNext click		
    	changePageNumber();
    });
    
    $(".navbar-nav li").on("click",function(){  //Random click on the any linkNode will start traversing from that node
		currentLink=$(this).index();
		console.log(currentLink);
	 	currentLinkText=0;
	 	displayText();
	   	changePageNumber(); 	
	   	hightlightMenu();
	});

}

function getLinkAndTextCount(){
	$.each($("#contentPlaceHolder .linktext"),function(){
		var textParagraphCount=$(this).find("p").length;
		textsInLinks.push(textParagraphCount);
	})
}

//handler to go to next link, or the next text of current link
function nextButtonclick()
{
	currentLinkText++;
	//if more than available, reset.
	if(currentLinkText>=textsInLinks[currentLink]){
		currentLink++;
		//if more than available, reset.
		if(currentLink>=textsInLinks.length)
			currentLink=0;
		currentLinkText=0;		
		hightlightMenu(); //moving the hover highlight to the corresponding link
	}
	displayText(); //display the corresponding text
}

//handler to go to prev link, or the next text of current link
function prevButtonclick()
{
	currentLinkText--;
	//if more than available, reset.
	if(currentLinkText<0){
		currentLink--;
		//if more than available, reset.
		if(currentLink<0)
			currentLink=textsInLinks.length-1;
		currentLinkText=textsInLinks[currentLink]-1;		
		hightlightMenu(); //moving the hover lighlight to the corresponding link
	}
	displayText(); //display the corresponding text
}

//to display the page number
function changePageNumber(){
	$("#indexnavtrack").text((currentLinkText+1)+"/"+textsInLinks[currentLink]);
}

//to display link text
function displayText()
{	
	hidealltext(); //hide all the initially displayed text
	var currentTextDiv=$(".linktext").eq(currentLink);
	var currentTextParagraph=currentTextDiv.find("p").eq(currentLinkText);
	currentTextParagraph.removeClass("hidden"); //display the respective text	
}

//hide the all link texts
function hidealltext()
{
	$(".linktext p").addClass("hidden");	
}
//hightlight the link node according to navigation.
function hightlightMenu()
{
	$(".navbar-nav li").removeClass("Active");	//remove the selected state of all the link
	$(".navbar-nav li").eq(currentLink).addClass("Active");
}

