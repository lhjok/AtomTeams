$(document).ready(function() {
	systole();
	function systole(){
	if(!$(".history").length){
		return;
	}
	var $warpEle = $(".history-date"),
		$targetA = $warpEle.find("h2 a,ul li dl dt a"),
		parentH,
		eleTop = [];
	
	parentH = $warpEle.parent().height();
	$warpEle.parent().css({"height":59});
	
	setTimeout(function(){
		
		$warpEle.find("ul").children(":not('h2:first')").each(function(idx){
			eleTop.push($(this).position().top);
			$(this).css({"margin-top":-eleTop[idx]}).children().hide();
		}).animate({"margin-top":0}, 1600).children().fadeIn();

		$warpEle.parent().animate({"height":parentH}, 2600);

		$warpEle.find("ul").children(":not('h2:first')").addClass("bounceInDown").css({"-webkit-animation-duration":"2s","-webkit-animation-delay":"0","-webkit-animation-timing-function":"ease","-webkit-animation-fill-mode":"both"}).end().children("h2").css({"position":"relative"});
		
	}, 600);

	$targetA.click(function(){
		$(this).parent().css({"position":"relative"});
		$(this).parent().siblings().slideToggle();
		$warpEle.parent().removeAttr("style");
		return false;
	});
};

		$.fn.typewriter = function() {
			this.each(function() {
				var $ele = $(this), str = $ele.html(), progress = 0;
				$ele.html('');
				var timer = setInterval(function() {
					var current = str.substr(progress, 1);
					if (current == '<') {
						progress = str.indexOf('>', progress) + 1;
					} else {
						progress++;
					}
					$ele.html(str.substring(0, progress) + (progress & 1 ? '_' : ''));
					if (progress >= str.length) {
						clearInterval(timer);
					}
				}, 75);
			});
			return this;
		};
	//systole();
	$(window).scroll(function() {
		if ($(document).scrollTop() > 2400) {
			$(".penpall").css("left", "-67px");
			$(".penpall").addClass("FadeInL");
		} else {
			$(".penpall").css("left", "-2000px");

			$(".penpall").removeClass("FadeInL");
		}
	});
	function quiver(ele,times){
		for(var i = 0; i < times ;i++){
			$(ele).animate({top:'-15px'},100);
			$(ele).animate({top:'15px'},100);
			$(ele).animate({top:'0px'},100);
		}	
	}
	$(".topTag").css({opacity:0.7}); //标签透明
	$(".contactBelow").animate({opacity:0.6},600); //联系我们背景透明
	$(".Logo1").mouseover(function(){ //Logo1跳动
		quiver($(".Logo1"),2);
	})
	var offsetX = $("#loveHeart").width() / 2;
	var offsetY = $("#loveHeart").height() / 2 - 55;
	$("#code").typewriter();
	$(window).scroll(function() {
		if ($(document).scrollTop() > 1350) {
			$(".team_jg_3").addClass("FadeInR");
			$(".team_jg_1").addClass("FadeInL");
			$(".team_jg_2").addClass("FadeInT");
			$(".team_jg_1").css("display", "block");
			$(".team_jg_2").css("display", "block");
			$(".team_jg_3").css("display", "block");
		} else {
			$(".team_jg_3").removeClass("FadeInR");
			$(".team_jg_1").removeClass("FadeInL");
			$(".team_jg_2").removeClass("FadeInT");
		}

	});
	$.each($(".tttu"),function(i,v){
		var _this = $(v);
		var _team = $(".team_jg_3").find("li");
		_this.mouseover(function(){
			_this.siblings(".shanxing").addClass("shanxing21");
			_team.eq(i).find(".wenzizizi").css("color", "#fff");
			$(this).css("color", "#09f");
			/*
			_team.eq(i).find(".bbbggg").css("width", "100%");
			*/
			_team.eq(i).find(".bbbggg").removeClass("hide").animate({
				"width":"100%"
			});

		});
		_this.mouseout(function(){
			_this.siblings(".shanxing").removeClass("shanxing21");
			$(this).css("color", "#d38f05");
			_team.eq(i).find(".wenzizizi").css("color", "#555");
			/*
			_team.eq(i).find(".bbbggg").css("width", "0%");
			*/
			_team.eq(i).find(".bbbggg").animate({
				"width":"0%"
			});
			setTimeout(function(){
				_team.eq(i).find(".bbbggg").addClass("hide");
			},300);
		});
	});

	$(window).scroll(function() {

		/*动态数字*/
		$.fn.countTo = function(options) {
			options = options || {};

			return $(this).each(function() {
				// set options for current element
				var settings = $.extend({}, $.fn.countTo.defaults, {
					from: $(this).data('from'),
					to: $(this).data('to'),
					speed: $(this).data('speed'),
					refreshInterval: $(this).data('refresh-interval'),
					decimals: $(this).data('decimals')
				}, options);
				var loops = Math.ceil(settings.speed / settings.refreshInterval),
					increment = (settings.to - settings.from) / loops;

				// references & variables that will change with each update
				var self = this,
					$self = $(this),
					loopCount = 0,
					value = settings.from,
					data = $self.data('countTo') || {};

				$self.data('countTo', data);

				// if an existing interval can be found, clear it first
				if (data.interval) {
					clearInterval(data.interval);
				}
				data.interval = setInterval(updateTimer, settings.refreshInterval);

				// initialize the element with the starting value
				render(value);

				function updateTimer() {
					value += increment;
					loopCount++;

					render(value);

					if (typeof(settings.onUpdate) == 'function') {
						settings.onUpdate.call(self, value);
					}

					if (loopCount >= loops) {
						// remove the interval
						$self.removeData('countTo');
						clearInterval(data.interval);
						value = settings.to;

						if (typeof(settings.onComplete) == 'function') {
							settings.onComplete.call(self, value);
						}
					}
				}

				function render(value) {
					var formattedValue = settings.formatter.call(self, value, settings);
					$self.html(formattedValue);
				}
			});
		};


		$.fn.countTo.defaults = {
			from: 0,
			// the number the element should start at
			to: 0,
			// the number the element should end at
			speed: 1000,
			// how long it should take to count between the target numbers
			refreshInterval: 100,
			// how often the element should be updated
			decimals: 0,
			// the number of decimal places to show
			formatter: formatter,
			// handler for formatting the value before rendering
			onUpdate: null,
			// callback method for every time the element is updated
			onComplete: null // callback method for when the element finishes updating
		};

		function formatter(value, settings) {
			return value.toFixed(settings.decimals);
		}
		// custom formatting example
		$('#count-number').data('countToOptions', {
			formatter: function(value, options) {
				return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
			}
		});

		// start all the timers
		$('.timer').each(count);

		function count(options) {
			var $this = $(this);
			options = $.extend({}, options || {}, $this.data('countToOptions') || {});
			$this.countTo(options);
		}
	});
	/*锚链接缓冲*/

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
	$("#top_btn2").click(function() {
		if (scroll == "off") return;
		$("html,body").animate({
			scrollTop: 0
		}, 300);
	});
	$("#top_btn2").hide();
	//当滚动条的位置处于距顶部150像素以下时，跳转链接出现，否则消失
	$(window).scroll(function() {

		if ($(document).scrollTop() >= 150) {

			$("#top_btn2").fadeIn(500);
			$(".Header").css("position", "fixed").css("z-index", "9999999").css("top", "0");

			$(".Header").addClass("FadeIn");
			$(".onem").addClass("FadeInL");

			$(".Logo1").css("height", "70px");
			$(".Nav").css("height", "70px").css("overflow", "hidden").css("line-height", "70px");
		} else {
			$(".Logo1").css("height", "100px");
			$(".Nav").css("height", "100px").css("overflow", "visible").css("line-height", "100px");
			$(".Header").removeClass("FadeIn");
			$(".Header").css("position", "relative");
			$("#top_btn2").fadeOut(500);

			$(".onem").removeClass("FadeInL");
		}
	});
});