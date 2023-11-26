"use strict"
// Loading
$(document).ready(function(){
    $('.lds-dual-ring').fadeOut(1000,function(){
        $('.LoadingPage').fadeOut(1000,function(){
            $('body').css('overflow','auto');
            $('.LoadingPage').remove();
        });
    });
    // SideBar
    $('.MenuContainer,.Icon').click(function () { 
        const LinksWidth=$('.Links').innerWidth();
        if ($('aside').css('left')=='0px')
        {
            $('aside').animate({left:-(LinksWidth)} , 500)
        }
        else
        {
            $('aside').animate({left:0} , 500)
        }
    });
        // SectionScrolling
        $("aside a[href^='#']").click(function(e) {
            const Path= $(e.target).attr('href');
            const TargetSecHeight=$(Path).offset().top;
            $('body,html').animate({scrollTop:TargetSecHeight},1500);
        });
    
    
    // Home
       // ScrollUp Btn
        $(window).scroll(function(){
            const CurrentPosition=$(window).scrollTop();
            const DeatailsSec=$('#Details').offset().top;
            if (CurrentPosition >=DeatailsSec-150) {
                $('.ArrowUpCarier').fadeIn(500)
            }
            else{
                $('.ArrowUpCarier').fadeOut(500)
            }
        });
        $('.ArrowUpCarier').click(function(){
            $('html,body').animate({scrollTop:0},1500)
        });

    // Details
    $('.DJName').click(function(e){
        $(e.target).siblings().slideToggle(500)
        const OtherCard=$(e.target).parent().siblings().children('.card');
        $(OtherCard).slideUp(500);
        });
        // Slider
        $(function() {
            $('.skitter-large').skitter({
                dots:false,
                velocity:0.3,
                easing_default:"ease-in-out",
                interval:1500
            });
        });
    // Duration
    const Destination=new Date('jul 21, 2024 00:00:00').getTime();
    const Timer=setInterval(function(){
        const Now=new Date().getTime();
        const Duration =Destination-Now;
        const Days = Math.floor(Duration / (1000 * 60 * 60 * 24));
        const Hours = Math.floor((Duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const Minutes = Math.floor((Duration % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((Duration % (1000 * 60)) / 1000);
        $('#Days').text(Days);
        $('#Hours').text(Hours);
        $('#Minutes').text(Minutes);
        $('#Seconds').text(seconds);
        if (Duration < 0)
        {
            clearInterval(Timer);
        }
    },1000);
    // Contact
    $('textarea').on('input',function ()
    {
        // const Typing=$('textarea').length;     Y?!
        const Typing=$(this).val().length;
        const SUM =Number($('textarea').attr('maxlength'));
        console.log(SUM-Typing)
        $('#Character').text(SUM-Typing);
    });

    });
