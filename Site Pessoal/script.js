$(document).ready(function(){
	$("#drop").click(function(){
		$("#panel").slideToggle("slow");
	});
});

$(window).scroll(function(){
  var top = $(window).scrollTop();
  if(top > 350){
     $("#logo-site").css("top", "-13.5em");
  }else{ 
     $("#logo-site").css("top", "-1.5em");
  }
});