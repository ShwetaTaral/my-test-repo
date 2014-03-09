// JavaScript Document
var countLinktext=[];  //maintain the count of each link's text in array 
var linkNode=0;  				//track the count of link.
var linkNodeText=0;				//track the count of text in each link. 
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
	linkNodeText++;
	//if more than available, reset.
	if(linkNodeText>=countLinktext[linkNode]){
		linkNode++;
		//if more than available, reset.
		if(linkNode>=countLinktext.length)
			linkNode=0;
		linkNodeText=0;		
		moveToNextLink(); //moving the hover lighlight to the corresponding link
	}
	displayText(); //display the corresponding text
}

//handler to go to next link, or the next text of current link
function prevButtonclick()
{
	linkNodeText--;
	//if more than available, reset.
	if(linkNodeText<0){
		linkNode--;
		//if more than available, reset.
		if(linkNode<0)
			linkNode=countLinktext.length-1;
		linkNodeText=countLinktext[linkNode]-1;		
		moveToNextLink(); //moving the hover lighlight to the corresponding link
	}
	displayText(); //display the corresponding text
}

//to display the page number
function changePageNumber(){
	$("#indexnavtrack").text((linkNodeText+1)+"/"+countLinktext[linkNode]);
}

//to display link text
function displayText()
{
	hidealltext(); //hide all the initially displayed text
	$("#link"+(linkNode+1)+" p").eq(linkNodeText).removeClass("hidden"); //display the respective text	
}

function hidealltext()
{
	$(".linktext p").addClass("hidden");	
}

function moveToNextLink()
{
	$(".navbar-nav li a").removeClass("linkhover");	//remove the selected state of all the link
	$(".navbar-nav li").eq(linkNode).find("a").addClass("linkhover")
}