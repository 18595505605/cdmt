$(".aaq>ul>li").hover(function(){
	$(this).children("a").css("color","#C89348");
},function(){
	$(this).children("a").css("color","#AEAEAE");
})
$(".ll").hover(function(){
	$(this).children("a").css("color","#C89348");
},function(){
	$(this).children("a").css("color","#C89348");
})
$(window).scroll(function(){
	var hei=$(window).scrollTop();
	if(hei>150){
		$(".q").css("background","white");
		$(".q").css("border","1px solid white");
		$(".log>.tu-a").hide();
		$(".log>.tu-b").show();
		$(".san").css("background","white");
	}
	if(hei<150){
		$(".q").css("background","black");
		$(".q").css("border","1px solid black");
		$(".log>.tu-a").show();
		$(".log>.tu-b").hide();
		$(".san").css("background","black");
	}
})
$(".l1>li").hover(function(){
	$(this).css("color","white");
},function(){
	$(this).css("color","");
})
$(".log").hover(function(){
	$(".log>img").css("opacity","0.5");
},function(){
	$(".log>img").css("opacity","1");
})