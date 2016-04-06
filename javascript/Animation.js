$(document).ready(function(){
    $('a.Nav-color').hover(function(){
        $(this).animate({'color': '#E50053'},300);
    },function(){
        $(this).animate({'color': '#555'},100);
    });
    $('a.Link-color').hover(function(){
        $(this).animate({'color': '#2e9fff'},300);
    },function(){
        $(this).animate({'color': '#575757'},100);
    });
    $('a.Link-left-color').hover(function(){
        $(this).animate({'color': '#2e9fff','paddingLeft': '10px'},300);
    },function(){
        $(this).animate({'color': '#575757;','paddingLeft': '0'},100);
    });
    $('h1 a').hover(function(){
        $(this).animate({'color': '#2e9fff'},300);
    },function(){
        $(this).animate({'color': '#575757'},100);
    });
});
