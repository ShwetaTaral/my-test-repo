// JavaScript Document
var arr1=[4];
var arr2=[0];
var count=1;
var a=1;
$(document).ready(function() 
{
    $(".gotoNext").on("mousedown",function()
	{
		for(var i=0;i<arr1.length;i++)
		{	
			for(var j=0;j<=i;j++)
			{
				if(arr2[j]<=arr1[j])
				{
					arr2[0]=count;
					console.log("arr"+arr2);
					hidealltext();
					$("#link"+a+"text"+count).show();
				}
			}
			
		}
		count++;
	});
	console.log("arr"+arr2);
});
function hidealltext()
{
	$("#link1text1,#link1text2,#link1text3,#link1text4").hide();
}