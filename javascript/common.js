//wenti
function quiver(ele,times){
	for(var i = 0; i < times ;i++){
		$(ele).animate({top:'-15px'},100);
		$(ele).animate({top:'15px'},100);
		$(ele).animate({top:'0px'},100);
	}	
}
$(".topTag").css({opacity:0.7}); //标签透明
$(".contactBelow").animate({opacity:0.6},600); //联系我们背景透明
$(".Logo1").mouseover(function(){ //logo跳动
	quiver($(".Logo1"),2);
})
$(".wpb_toggle").click(function() {
	var u_class = $(this).attr('class');
	if (u_class == 'title wpb_toggle wpb_animate_when_almost_visible wpb_top-to-bottom wpb_start_animation') {
		$(this).addClass('wpb_toggle_title_active');
	} else {
		$(this).removeClass('wpb_toggle_title_active');
	}
	var zk_id = '#zk_' + $(this).attr('id');
	$(zk_id).slideToggle(200);
	return false;
});
var changeflag = true;
$(window).scroll(function() {
	if ($(document).scrollTop() > 2600) {
		$(".container333_2").css("display", "block");
		//$(".container333_2").addClass("BounceIn");
		if(changeflag){
			$(".container333_2").animate({
				"width":"1100px",
				"left":"-50px"
			});
			setTimeout(function(){
				$(".container333_2").animate({
					"width":"1000px",
					"left":"0px"
				});
			},300);
			changeflag = false;
		}

		$(".fixdz").css("-webkit-transform", "scale(1)");
		$(".fixdz").css("opacity", "1");
	} else {
		$(".container333_2").removeClass("BounceIn");
	}
	if ($(document).scrollTop() > 280) {
		$(".jimibuzou").addClass("activeeec");
		$(".jimibuzou").css("height", "490px");
		$(".jmwor1").animate({
			"left":0
		},"slow");
		setTimeout(function(){
			$(".jmwor2").animate({
				"left":0
			},800);
		},600);
		setTimeout(function(){
			$(".jmwor3").animate({
				"left":0
			},800);
		},1200);
		setTimeout(function(){
			$(".jmwor4").animate({
				"right":0
			},800);
		},1800);
		setTimeout(function(){
			$(".jmwor5").animate({
				"right":0
			},800);
		},2400);
		setTimeout(function(){
			$(".jmwor6").animate({
				"right":0
			},800);
		},3000);
		setTimeout(function(){
			$(".jmwor7").animate({
				"right":0
			},800);
		},3600);
	}
});

$('.fixdz li a').click(function() {
	$('.activee').removeClass('activee');
	$(this).addClass('activee');
});

$("#leftsead a").hover(function() {
	if ($(this).prop("className") == "youhui") {
		$(this).children("img.hides").show();
	} else {
		$(this).children("img.hides").show();
		$(this).children("img.shows").hide();
		$(this).children("img.hides").animate({
			marginRight: '0px'
		}, 'slow');
	}
}, function() {
	if ($(this).prop("className") == "youhui") {
		$(this).children("img.hides").hide('slow');
	} else {
		$(this).children("img.hides").animate({
			marginRight: '-143px'
		}, 'slow', function() {
			$(this).hide();
			$(this).next("img.shows").show();
		});
	}
});

//back to top
$("#top_btn2").click(function() {
	if (scroll == "off") return;
	$("html,body").animate({
		scrollTop: 0
	}, 300);
});

$("#top_btn2").hide();
//当滚动条的位置处于距顶部100像素以下时，跳转链接出现，否则消失
$(window).scroll(function() {
	if ($(document).scrollTop() >= 150) {
		$("#top_btn2").fadeIn(500);
		$(".Header").css("position", "fixed").css("z-index", "9999999").css("top", "0");
		$(".Header").addClass("FadeIn");
		$(".onem").addClass("FadeInL");
		$(".Logo1").css("height", "70px");
		$(".Nav").css("height", "70px").css("overflow", "hidden").css("line-height", "70px");
		$(".fixdz").css("-webkit-transform", "scale(1)");
		$(".fixdz").css("opacity", "1");
	} else {
		$(".Logo1").css("height", "100px");
		$(".Nav").css("height", "100px").css("overflow", "visible").css("line-height", "100px");
		$(".Header").removeClass("FadeIn");
		$(".Header").css("position", "relative");
		$("#top_btn2").fadeOut(500);
		$(".onem").removeClass("FadeInL");
		$(".fixdz").css("-webkit-transform", "scale(1.4)");
		$(".fixdz").css("opacity", "0");
	}

	// start all the timers
	//$('.timer').each(count);
});