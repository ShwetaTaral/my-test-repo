// JavaScript Document
var countLinktext=[4,3,2,3,1];  //maintain the count of each link's text in array 
var linkTextArr=[0,0,0,0,0];	//tracking the each link text. Use for comparing with countLinktext
var linkNode=1;  				//track the count of link.
var linkNodeText=0;				//track the count of text in each link. 
$(document).ready(function() 
{
	hidealltext();				//hide all the link text.
   	gotonext();					//fucntion hanldes the next button click event.
   	changePageNumber();
});


//to display the page number
function changePageNumber(){
	$("#indexnavtrack").text(linkNode+"/"+countLinktext.length);
}

function gotonext()
{
	 $(".btnNext").on("mousedown",function()		
	{
		nextbuttonclick();				//function for handling the btnNext click		
    	changePageNumber();
    });
}

function nextbuttonclick()
{
	
	if(linkNode<=countLinktext.length)			
	{
		console.log("inside if")
		if(linkTextArr[linkNode-1]!=countLinktext[linkNode-1])
		{
			displayText();				//Upadate the count value and display respective text.
		}
		else							//execute after each link text complete and move to next link text
		{ 
				console.log("inside else")
					linkNode++;	
					$("#linkNode"+linkNode).css("border","1px solid red");		
					linkNodeText=0;
					displayText();
			
		}
		$("#linkNode"+linkNode).css("border","1px solid red");	
    }
}


function displayText()
{
	
	hidealltext();			//hide all the initially displayed text
	linkNodeText++;	
	if(linkNode>countLinktext.length)     //if the value exceeds than the lenght of countLinktext
	{
			linkNode=1;								//reset the linkNode and linkNodeText
			linkNodeText=1;
				for(i=0;i<linkTextArr.length;i++)
				{
					linkTextArr[i]-=countLinktext[i];		//reset the linkTextArr
				}
				
	}
	linkTextArr[linkNode-1]=linkNodeText;			//updating value of the linkTextArr
	$("#link"+linkNode+"text"+linkNodeText).show();			//display the respective text
	console.log("linkNode*"+ linkNode +"linkNodeText*"+ linkNodeText);
}


function hidealltext()
{
	for(var i=1;i<=countLinktext.length;i++)
	{
		for(var j=1;j<=countLinktext.length;j++)
		{
			$("#link"+i+"text"+j).hide();			//hide all the link text
		}
	}
}

