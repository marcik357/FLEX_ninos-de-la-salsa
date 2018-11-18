var $btnTop = $("#btn_top")
$(window).on("scroll", function(){
	if ($(window).scrollTop() >= 400){
		$btnTop.fadeIn();
	}else{
		$btnTop.fadeOut();
	}
});

$btnTop.on("click", function(){
	$("html,body").animate({scrollTop:0}, 700)
});