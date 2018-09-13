$(document).ready(function(){		  
	$(window).scroll(function(){
		var top = $(window).scrollTop();
		if (top == 0){
			$("#navbar").css("background-color", "transparent").css("box-shadow", "0px");
		}
		else{
			$("#navbar").css("background-color", "cornflowerblue").css("box-shadow", "0px 2px 16px 0px rgba(0,0,0,0.4)");
		}
	});
});

$(document).ready(function(){
	var $doc = $("html, body");
	$(".linkAncora").click(function(){
		$doc.animate({
			scrollTop: $($.attr(this, "href")).offset().top
		}, 500);
		return false;
	});
});

