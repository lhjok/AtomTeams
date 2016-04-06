$(document).ready(function() {
	$(".Nav li").click(function(){
		$(this).addClass("activeNav").siblings().removeClass("activeNav");
	});
	$(window).scroll(function(){
		function oneyitubiao() {
			if ($(document).scrollTop() >= 600) {
				$(".liuhuaone").css("display", "block");
				$(".liuhuaone").addClass("FadeInR");
				$(".img_lic1").css("display", "block");
				$(".img_lic1").addClass("FadeInT");
				$(".wor_lic1").css("display", "block");
				$(".wor_lic1").addClass("FadeInB");
			}

		}
		setTimeout(oneyitubiao, 0);

		function twomm() {
			if ($(document).scrollTop() >= 800) {
				$(".liuhuatwo").css("display", "block");
				$(".liuhuatwo").addClass("FadeInR");

			}
			function oneertubiao() {

				if ($(document).scrollTop() >= 800) {

					$(".img_lic2").css("display", "block");
					$(".img_lic2").addClass("FadeInB");
					$(".wor_lic2").css("display", "block");
					$(".wor_lic2").addClass("FadeInT");

				}

			}

			setTimeout(oneertubiao, 200);

		}
		setTimeout(twomm, 800);
		function threemm() {
			if ($(document).scrollTop() >= 800) {
				$(".liuhuathree").css("display", "block");
				$(".liuhuathree").addClass("FadeInR");

			}
			function onesantubiao() {
				if ($(document).scrollTop() >= 800) {

					$(".img_lic3").css("display", "block");
					$(".img_lic3").addClass("FadeInT");
					$(".wor_lic3").css("display", "block");
					$(".wor_lic3").addClass("FadeInB");
				}
			}
			setTimeout(onesantubiao, 600);
		}

		setTimeout(threemm, 2000);

		function fourmm() {
			if ($(document).scrollTop() >= 800) {
				$(".liuhuafour").css("display", "block");
				$(".liuhuafour").addClass("FadeInR");
			}
			function onesitubiao() {
				if ($(document).scrollTop() >= 800) {

					$(".img_lic4").css("display", "block");
					$(".img_lic4").addClass("FadeInB");
					$(".wor_lic4").css("display", "block");
					$(".wor_lic4").addClass("FadeInT");
				}
			}

			setTimeout(onesitubiao, 200);
		}

		setTimeout(fourmm, 3500);
		function fivemm() {
			if ($(document).scrollTop() >= 800) {
				$(".liuhuafive").css("display", "block");
				$(".liuhuafive").addClass("FadeInR");

			}
			function onewutubiao() {
				if ($(document).scrollTop() >= 800) {

					$(".img_lic5").css("display", "block");
					$(".img_lic5").addClass("FadeInT");
					$(".wor_lic5").css("display", "block");
					$(".wor_lic5").addClass("FadeInB");
				}
			}
			setTimeout(onewutubiao, 200);
		}

		setTimeout(fivemm, 5000);
		function sixmm() {
			if ($(document).scrollTop() >= 800) {
				$(".liuhuasix").css("display", "block");
				$(".liuhuasix").addClass("FadeInR");

			}
			function oneliutubiao() {
				if ($(document).scrollTop() >= 800) {
					$(".img_lic6").css("display", "block");
					$(".img_lic6").addClass("FadeInB");
					$(".wor_lic6").css("display", "block");
					$(".wor_lic6").addClass("FadeInT");
				}
			}
			setTimeout(oneliutubiao, 200);
		}
		setTimeout(sixmm, 6000);
		function jtqyi() {
			if ($(document).scrollTop() >= 800) {
				$(".jtq1").css("width", "100px");
			} else {
				$(".jtq1").css("width", "0px");
			}
		}
		setTimeout(jtqyi, 200);
		function jtqer() {
			if ($(document).scrollTop() >= 800) {
				$(".jtq2").css("width", "100px");
			} else {
				$(".jtq2").css("width", "0px");
			}
		}
		setTimeout(jtqer, 1400);

		function jtqsan() {
			if ($(document).scrollTop() >= 800) {
				$(".jtq3").css("width", "100px");
			} else {
				$(".jtq3").css("width", "0px");
			}
		}
		setTimeout(jtqsan, 3000);

		function jtqsi() {
			if ($(document).scrollTop() >= 800) {
				$(".jtq4").css("width", "100px");

			} else {

				$(".jtq4").css("width", "0px");
			}
		}
		setTimeout(jtqsi, 4500);

		function jtqwu() {
			if ($(document).scrollTop() >= 800) {
				$(".jtq5").css("width", "100px");
			} else {
				$(".jtq5").css("width", "0px");
			}
		}
		setTimeout(jtqwu, 6000);
	});

(function($) {
     $.fx.step["backgroundPosition"] = function(fx) {
         if (typeof fx.end == 'string') {
             fx.start = getBgPos(fx.elem);
             //fx.end原本是一个string，这里将它转换成数组，就不会再进入这个if，也方便我们下面的计算
             //例 "0px -21px"
             fx.end = [parseFloat(fx.end.split(" ")[0]), parseFloat(fx.end.split(" ")[1])];
        }
         //这里fx.pos是根据传入的时间参数，从0到1变化的浮点数
         var nowPosX = ((fx.end[0] - fx.start[0]) * fx.pos) + fx.start[0] + fx.unit;
         var nowPosY = ((fx.end[1] - fx.start[1]) * fx.pos) + fx.start[1] + fx.unit;
        fx.elem.style.backgroundPosition = nowPosX + ' ' + nowPosY;
         
         /**
          * 获取backgroundPosition数组[top, left]，没有单位
          */
         function getBgPos(elem) {
             var top  = 0.0;
             var left = 0.0;
           if ($(elem).css("backgroundPosition")) {
                //例 "0px -21px"
                top  = parseFloat($(elem).css("backgroundPosition").split(" ")[0]);
                left = parseFloat($(elem).css("backgroundPosition").split(" ")[1]);
            }else{
                top  = parseFloat($(elem).css("backgroundPositionX"));
                left = parseFloat($(elem).css("backgroundPositionY"));
             }
           return [top, left];
        }
     }
})(jQuery);

	$(".four_reason li").on("mouseenter",function(){
		bigSize($(this),"fast","-5%");
		$(this).find(".bgfou").animate({
			height:"100%",
			width:"100%",
			left:0
		},"slow");
	}).on("mouseleave",function(){
		normalSize($(this),"fast");
		$(this).find(".bgfou").animate({
			height:"0",
			width:"0",
			left:"105px"			
		},"slow");
	});

	$(".newsPic").on("mouseenter",function(){
		bigSize($(this),"normal","-3%");
	}).on("mouseleave",function(){
		normalSize($(this),"normal");
	});

	function bigSize(item,speed,top){
		item.find("img").animate({
			width:"110%",
			height:"110%",
			position:"absolute",
			marginLeft:"-5%",
			marginTop:top
		},speed);	
	}
	function normalSize(item,speed){
		item.find("img").animate({
			width:"100%",
			height:"100%",
			position:"relative",
			marginLeft:0,
			marginTop:0
		},speed);		
	}
	var commentIndex = 0;
	var commentValue = 3;
	$('.flexslider').flexslider({
		directionNav: true,
		pauseOnAction: false
	});

	$(".xuhao").unbind("mouseover");
	$(".xuhao").mouseover(function(){
		$(this).siblings(".img_lic").animate({
			backgroundPosition:"0px -85px"
		});
		
		$(this).siblings(".wor_lic").css("color","#00a2c7");
	});
	$(".xuhao").mouseout(function(){
		$(this).siblings(".img_lic").animate({
			backgroundPosition:"0px 0px"  
		});
		$(this).siblings(".wor_lic").css("color","#555");
	});


	$(".CButtonRight").click(function(){
		commentIndex++;
		$(".CButtonRight , .CButtonLeft").css({visibility:"visible"});
		if(commentIndex == commentValue){
		      $(this).css({visibility:"hidden"});
		}
		for(var j = 0; j < commentIndex ; j++){
			$(".commentContent").eq(j).animate({marginLeft:"-394px",opacity:0},300);
		}
		$(".commentContent").eq(commentIndex).animate({marginLeft:"0px",opacity:1},300);	
	})
	$(".CButtonLeft").click(function(){
		commentIndex--;
		$(".CButtonRight , .CButtonLeft").css({visibility:"visible"});
		if(commentIndex == 0){
			$(".CButtonLeft").css({visibility:"hidden"});
		}
        $(".commentContent").eq(commentIndex).animate({marginLeft:"0px",opacity:1},300);		
	})
	$.each($(".serBox"),function(i,v){
		var _this = $(v);
		_this.click(function(){
			serFocus(i);
		});
	});
	$("#serFocus .close").click(function(){
		closeSerPop();
	});

	var dots = $(".flash_bar span");
	$.each(dots,function(i,v){
		var _v = $(v);
		_v.click(function(){
			changeflash(i);
		});
	});
	$(".serBox").hover(
		function() {
			$(this).children().stop(false, true);
			$(this).children(".jinrud").animate({
				bottom: 20
			}, 400);
		}, function() {
			$(this).children().stop(false, true);
			$(this).children(".jinrud").animate({
				bottom: -60
			}, 400);
	});
	function changeflash(i) {	
		var items = $("#serFocus .box2");
		var dots = $(".flash_bar span");
		items.eq(i).fadeIn().siblings(".box2").hide();
		dots.removeClass();
		dots.eq(i).addClass("dq").siblings().addClass("no");
	}
	function serFocus(i) {
	$(".servicesPop").slideDown("normal");
		changeflash(i);
	}
	function closeSerPop() {
		$(".servicesPop").slideUp("fast");
	}
});