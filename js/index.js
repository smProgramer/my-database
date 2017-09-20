$(function(){
    var $aClose=$('#dd_close a');
    var $right=$('#right');
    setTimeout(function(){
        $right.css('display','block');
    },1000);
    $aClose.click(function(){
        $right.css('display','none');
    });
    $(window).scroll(function(){
        var top = $(window).scrollTop()+50;
        $right.css({top:top+"px"});      
    });


    $('#scroll_number li').mouseenter(function(){
        clearInterval(timer);
        var index=$(this).index();          
        $('#scroll_number li').stop().eq(index).css({'background':'orange','color':'white'}).siblings().css({'background':'none','color':'black'}); 
        $('#scroll_img li').stop().eq(index).fadeIn('fast').siblings().fadeOut();
    }).mouseleave(function(){
        timer=setInterval(function(){       
        tab();
    },1500);
    })
    function tab(){
        if(num>$('#scroll_number li').length-1){
            num=0;
        }
        num++;
        $('#scroll_number li').stop().eq(num-1).css({'background':'orange','color':'white'}).siblings().css({'background':'none','color':'black'});
        $('#scroll_img li').eq(num-1).fadeIn('fast').siblings().fadeOut();
    }

    var timer=null,num=0;
    timer=setInterval(function(){       
        tab();
    },1500);



    $('.book_type').mouseenter(function(){
        $(this).addClass('book_type_out').siblings().removeClass('book_type_out');
        var index=$(this).index();
        $('.book_class dl').removeClass('book_none').eq(index).siblings().addClass('book_none');
    })



    setInterval(function(){
    $('#express li:last').css({'height':'0px','opacity': '0'}).insertBefore('#express li:first').animate({'height':'26px','opacity': '1'}, 'slow', function(){
      $(this).removeAttr('style');
    });
    },1000)
    









})