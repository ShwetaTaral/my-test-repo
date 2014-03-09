// JavaScript Document
var noofeachlinktext=[4,3,2,3];
var trackeachtext=[0,0,0,0];
var count1=1;
var count2=0;
$(document).ready(function() 
{
	hidealltext();
    $(".gotoNext").on("mousedown",function()
	{
		nextbuttonclick();
    });
});

function nextbuttonclick()
{
	
	if(count1<=noofeachlinktext.length)
	{
		console.log("inside if")
		if(trackeachtext[count1-1]!=noofeachlinktext[count1-1])
		{
			test();
		}
		else
		{ 
				console.log("inside else")
					count1++;
					count2=0;
				test();
			
		}
			
    }
}


function test()
{
	
	hidealltext();
	count2++;
	
	if(count1>noofeachlinktext.length)
	{
		console.log("count1++"+count1);
			count1=1;
			count2=0;
				for(i=0;i<trackeachtext.length;i++)
				{
					trackeachtext[i]-=noofeachlinktext[i];
				}
				
	}
	trackeachtext[count1-1]=count2;
	$("#link"+count1+"text"+count2).show();	
	
}


function hidealltext()
{
	for(var i=1;i<=noofeachlinktext.length;i++)
	{
		for(var j=1;j<=noofeachlinktext.length;j++)
		{
			$("#link"+i+"text"+j).hide();
		}
	}
	
/*$("#link1text1,#link1text2,#link1text3,#link1text4,#link2text1,#link2text2,#link2text3,#link2text4,#link3text1,#link3text2,#link3text3,#link3text4,#link4text1,#link4text2,#link4text3,#link4text4").hide();
	*/
}

