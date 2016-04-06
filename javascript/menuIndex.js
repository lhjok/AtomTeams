$(document).ready(function(){
    var isMobile = {
        Android: function(){
            return navigator.userAgent.match(/Android/i);
        }
        ,BlackBerry: function(){
            return navigator.userAgent.match(/BlackBerry/i);
        }
        ,iOS: function(){
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        }
        ,Opera: function(){
            return navigator.userAgent.match(/Opera Mini/i);
        }
        ,Windows: function(){
            return navigator.userAgent.match(/IEMobile/i);
        }
        ,any: function(){
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };
    if($('h2').length > 2 || $('h3').length > 3 && !isMobile.any()){
        var h2 = [],h3 = [],tmpl = '<ul>',h2index = 0;
        var findScrollableElement = function(els){
            for (var i = 0, argLength = arguments.length; i < argLength; i++){
                var el = arguments[i],
                    $scrollElement = $(el);
                if ($scrollElement.scrollTop() > 0){
                    return $scrollElement;
                }else{
                    $scrollElement.scrollTop(1);
                    var isScrollable = $scrollElement.scrollTop() > 0;
                    $scrollElement.scrollTop(0);
                    if (isScrollable){
                        return $scrollElement;
                    }
                }
            }
            return [];
        };
        $.each($('h2,h3'),function(index,item){
            if(item.tagName.toLowerCase() == 'h2'){
                var h2item = {};
                h2item.name = $(item).text();
                h2item.id = 'menuIndex'+index;
                h2.push(h2item);
                h2index++;
            }else{
                var h3item = {};
                h3item.name = $(item).text();
                h3item.id = 'menuIndex'+index;
                if(!h3[h2index-1]){
                    h3[h2index-1] = [];
                }
                h3[h2index-1].push(h3item);
            }
            item.id = 'menuIndex' + index
        });
        tmpl += '<li class="h1"><a href="#" data-top="0">'+$('h1').text()+'</a></li>';
        for(var i=0;i<h2.length;i++){
            tmpl += '<li><a href="#" data-id="'+h2[i].id+'">'+h2[i].name+'</a></li>';
            if(h3[i]){
                for(var j=0;j<h3[i].length;j++){
                    tmpl += '<li class="h3"><a href="#" data-id="'+h3[i][j].id+'">'+h3[i][j].name+'</a></li>';
                }
            }
        }
        tmpl += '</ul>';
        var $scrollable = findScrollableElement('body','html');
        var menuIdx = $('<div id="menuIndex"></div>');
        menuIdx.append($(tmpl)).delegate('a','click',function(e){
            e.preventDefault();
            var scrollNum = $(this).attr('data-top') || $('#'+$(this).attr('data-id')).offset().top;
            $scrollable.animate({ scrollTop: scrollNum-30 }, 400, 'swing');
        })
        $('.Sidebar').append(menuIdx);
        var menuHeight = $("#menuIndex ul").height();
        $('#menuIndex').css("height",menuHeight);
        $(window).load(function(){
            var scrollTop = [];
            $.each($('#menuIndex li a'),function(index,item){
                if(!$(item).attr('data-top')){
                    var top = $('#'+$(item).attr('data-id')).offset().top;
                    scrollTop.push(top);
                    $(item).attr('data-top',top);
                }
            });
            $(window).scroll(function(){
                var nowTop = $(window).scrollTop(),index,length = scrollTop.length;
                if(nowTop+60 > scrollTop[length-1]){
                    index = length
                }else{
                    for(var i=0;i<length;i++){
                        if(nowTop+60 <= scrollTop[i]){
                            index = i
                            break;
                        }
                    }
                }
                $('#menuIndex li').removeClass('on')
                $('#menuIndex li').eq(index).addClass('on')
            });
        });

        var _height = $(".Stock").offset().top+$(".Stock").outerHeight()-77;
        function getSize(){
            var _left = $(".Stock").offset().left;
            if(_height < 950){
                _height +=100;
            }
            $('#menuIndex').css({
               // top:_height,
                //left:_left,
                //position:"absolute"
            });           
        }

        getSize();
        $(window).resize(function(){
            getSize();
        });

        $(window).scroll(function(){
            var _sheight = $(window).scrollTop();
            var bottom = $("#Afooter").offset().top-100;
            var _box = $("#menuIndex").outerHeight()+$("#menuIndex").offset().top;
            if(_sheight >=937){
                 if(_box >= bottom){
                        var entry = $(".entry").height()-$("#menuIndex").outerHeight()-20;
                       $('#menuIndex').css({
                            position:"absolute",
                            top:entry
                        });
                       var _btm = document.getElementById("Afooter").getBoundingClientRect().top;
                       if(_btm >= $(window).height()-130){
                            $('#menuIndex').css({
                                position:"fixed",
                                top:"85px",
                                "margin-left":"21px"
                            });  
                       }             
                    }else{
                        $('#menuIndex').css({
                            position:"fixed",
                            top:"85px",
                            "margin-left":"21px"
                        });                    
                    }
            }else{
                 $('#menuIndex').css({
                    position:"static"
                });            
            }
        });
    }
});