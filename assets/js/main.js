// JavaScript Document
var countLinktext=[];  //maintain the count of each link's text in array 
var currentLink=0;  				//track the count of link.
var currentLinkText=0;				//track the count of text in each link. 
$(document).ready(function() 
{
	
   	setupElements();	//to setup page elements and display properties.   	  	
	selectLink();
});

//to setup page elements and display properties
function setupElements()
{
	getLinkAndTextCount();
	displayText();
   	changePageNumber(); 
	
   	
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
}

function getLinkAndTextCount(){
	$.each($("#contentPlaceHolder .linktext"),function(){
		var textParagraphCount=$(this).find("p").length;
		countLinktext.push(textParagraphCount);
	})
}

//handler to go to next link, or the next text of current link
function nextButtonclick()
{
	currentLinkText++;
	//if more than available, reset.
	if(currentLinkText>=countLinktext[currentLink]){
		currentLink++;
		//if more than available, reset.
		if(currentLink>=countLinktext.length)
			currentLink=0;
		currentLinkText=0;		
		moveToNextLink(); //moving the hover highlight to the corresponding link
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
			currentLink=countLinktext.length-1;
		currentLinkText=countLinktext[currentLink]-1;		
		moveToNextLink(); //moving the hover lighlight to the corresponding link
	}
	displayText(); //display the corresponding text
}

//to display the page number
function changePageNumber(){
	console.log(countLinktext,currentLink);
	$("#indexnavtrack").text((currentLinkText+1)+"/"+countLinktext[currentLink]);
}

//to display link text
function displayText()
{
	
	hidealltext(); //hide all the initially displayed text
	$("#link"+(currentLink+1)+" p").eq(currentLinkText).removeClass("hidden"); //display the respective text	
}

function hidealltext()
{
	$(".linktext p").addClass("hidden");	
}

function moveToNextLink()
{
	$(".navbar-nav li a").removeClass("linkhover");	//remove the selected state of all the link
	$(".navbar-nav li").eq(currentLink).find("a").addClass("linkhover");
}


function selectLink(){
		$("a").on("mousedown",function()
		{
		 var linktext=$(this).attr("class");
		 $(".navbar-nav li a").removeClass("linkhover");
		 $(this).addClass("linkhover");
		 var linkNo=linktext.substring(8,9);
		 countLinktext=0;
		 currentLink=linkNo-1;
		 displayText();
		 changePageNumber();
		});
}
