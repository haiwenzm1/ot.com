$(function () {
    var parallax;
    $('#main').fullpage({
        navigation: true,
        afterRender: function () {
            $('.banner2-content-0 img').fadeIn(1500);
            $('.banner2-content-0 .text').addClass('animated pulse');
            parallax = new Parallax($('.banner2-content-0')[0]);
        },
        afterLoad: function (anchorLink, index) {
            if (index == 1) {
                $('.banner2-content-0 img').fadeIn(1500);
                $('.banner2-content-0 .text').addClass('animated pulse');
                parallax = new Parallax($('.banner2-content-0')[0]);
            }

            if (index == 2) {
                $('.banner3-wrap .text').animate({ 'left': '48.6vw', 'opacity': '100' }, 1500);
                $('.banner3-wrap #pop-click').animate({ 'left': '80vw', 'opacity': '100' }, 1500);

                $('#pop-click').click(function () {
                    $.fn.fullpage.setAllowScrolling(false);
                    $('#fp-nav').hide();
                    $('.pop-layout').show();
                    $('.left-nav').find('li').eq(0).addClass('active');
                    $('.left-nav').addClass('animated fadeInLeft');

                    $('.banner3-nav-content').addClass('animated fadeIn');
                    $('.banner3-nav-content').find('p').eq(0).show();
                    $('.banner3-nav-content .logo-img').addClass('animated bounceIn');
                    $('.banner5-pop-layout-content-scroll-down').fadeIn();
                })

                $(document).on('click', '.banner3 .close', function () {
                    $('.left-nav li').removeClass('active');
                    $('.banner3-nav-content p').hide();
                    $('.pop-layout').hide();
                    $('.banner5-pop-layout-content-scroll-down').hide();
                    $('#fp-nav').show();
                    $.fn.fullpage.setAllowScrolling(true);
                })

                $('.banner3-nav-content').bind('mousewheel', function (event, delta) {
                    var dir = delta > 0 ? 'Up' : 'Down';
                    if (dir == 'Up') {
                        if ($('.left-nav .active').prev().length != 0) {
                            $('.left-nav .active').removeClass('active').prev().addClass('active')
                        }
                    } else {
                        if ($('.left-nav .active').next().length != 0) {
                            $('.left-nav .active').removeClass('active').next().addClass('active')
                        }
                    }
                    var index = $('.left-nav').find('li').index($('.left-nav .active'));
                    console.log(index);
                    $('.banner3-nav-content').find('p').eq(index).show().siblings().hide();
                    return false;
                });
            }

            if (index == 3) {
                $('.banner5-wrap .text').animate({ 'left': '40vw', 'opacity': '100' }, 1500);
                $('.banner5-wrap #banner5-pop-click').animate({ 'left': '77vw', 'opacity': '100' }, 1500);

                $('#banner5-pop-click').click(function () {
                    $('#fp-nav').hide();
                    $.fn.fullpage.setAllowScrolling(false);
                    $('.time-nav').find('li').eq(0).addClass('active');
                    $('.time-nav').show();
                    $('.banner5-pop-layout-content-close').show();
                    $('.banner5-pop-layout-content-scroll-down').show();
                    $('.banner5-pop-content').find('div').eq(0).show();
                    $('.banner5-pop-layout').show();
                    $('.banner5-pop-layout').animate({ width: '150vw', height: '150vw', left: '-25vw', top: '-35vh', opacity: "100" }, 1500, function () {
                        $('.banner5-pop-layout').stop();
                    });

                    $('.banner5-pop-layout-content').animate({ left: '25vw', top: '35vh' }, 1500, function () {
                        $('.banner5-pop-layout-content').stop();
                    });
                });

                $('.banner5-pop-layout-content').bind('mousewheel', function (event, delta) {
                    var dir = delta > 0 ? 'Up' : 'Down';
                    if (dir == 'Up') {
                        if ($('.time-nav .active').prev().length != 0) {
                            $('.time-nav .active').removeClass('active').prev().addClass('active')
                        }
                    } else {
                        if ($('.time-nav .active').next().length != 0) {
                            $('.time-nav .active').removeClass('active').next().addClass('active')
                        }
                    }
                    var index = $('.time-nav').find('li').index($('.time-nav .active'));
                    $('.banner5-pop-content').find('div').eq(index).show().siblings().hide();
                    return false;
                });

                $(document).on('click', '.banner5-pop-layout-content-close', function () {
                    $('.banner5-pop-layout').stop();
                    $('.banner5-pop-layout-content').stop();
                    $('.time-nav').hide();
                    $('.time-nav').find('li').removeClass('active');
                    $('.banner5-pop-layout').hide();
                    $('.banner5-pop-content div').hide();
                    $('.banner5-pop-layout-content-close').hide();
                    $('.banner5-pop-layout-content-scroll-down').hide();
                    $('.banner5-pop-layout').css({ width: '0vw', height: '0vh', left: '77vw', top: '70vh', opacity: "0" });
                    $('.banner5-pop-layout-content').css({ left: '-77vw', top: '-70vh' });
                    // $('.banner5-pop-layout-content').unbind('mousewheel');
                    $('#fp-nav').show();
                    $.fn.fullpage.setAllowScrolling(true);
                })

                $('.time-nav a').bind('click', function () {
                    $(this).parent().addClass('active');
                    $(this).parent().siblings('li').removeClass('active');
                    var index = $('.time-nav').find('li').index($('.time-nav .active'));
                    $('.banner5-pop-content').find('div').eq(index).show().siblings().hide();
                    return false;
                });
            }

            if (index == 4) {
                $('.banner6-div-3').animate({ left: "0" }, 1500);
                setTimeout(function () {
                    $('.banner6-div-2').animate({ left: "-27%" }, 1000);
                }, 500);
                setTimeout(function () {
                    $('.banner6-div-1').animate({ left: "-62%" }, 500, function () {
                        $(document).on('mouseover', '#header,#footer', function () {
                            $('.banner6-div-1 span').remove();
                            $('.banner6-div-2 span').remove();
                            $('.banner6-div-3 span').remove();

                            $('.banner6-div-1').stop();
                            $('.banner6-div-2').stop();
                            $('.banner6-div-3').stop();

                            $('.banner6-div-1').css({ 'width': '100%', 'left': '-62%', '-webkit-transform': 'skew(-13deg)', '-moz-transform': 'skew(-13deg)', 'transform': 'skew(-13deg)', 'z-index': '1003' });
                            $('.banner6-div-1 *').css({ '-webkit-transform': 'skew(13deg)', '-moz-transform': 'skew(13deg)', 'transform': 'skew(13deg)' });
                            $('.banner6-div-1 img').css({ 'right': '-15%' });
                            $('.banner6-div-1 p').css({ 'right': '7vw' });
                            $('.banner6-div-1 a').css({ 'right': '1%' });

                            $('.banner6-div-2').css({ 'width': '100%', 'left': '-27%', '-webkit-transform': 'skew(-13deg)', '-moz-transform': 'skew(-13deg)', 'transform': 'skew(-13deg)', 'z-index': '1002' });
                            $('.banner6-div-2 *').css({ '-webkit-transform': 'skew(13deg)', '-moz-transform': 'skew(13deg)', 'transform': 'skew(13deg)' });
                            $('.banner6-div-2 img').css({ 'right': '-17%' });
                            $('.banner6-div-2 p').css({ 'right': '7vw' });
                            $('.banner6-div-2 a').css({ 'right': '1%' });

                            $('.banner6-div-3').css({ 'width': '100%', 'left': '0', 'z-index': '1001' });
                            $('.banner6-div-3 img').css({ 'right': '0' });
                            $('.banner6-div-3 p').css({ 'right': '7vw' });
                            $('.banner6-div-3 a').css({ 'right': '1%' });
                        });

                        $(document).on('mouseover', '.banner6-div-1, .span-div-1', function () {
                            setTimeout(function () {
                                var w1 = $('.banner6').width() * 0.05;
                                var w2 = $('.banner6-div-1 a').width();
                                var w3 = (w1 - w2) / 2;
                                $('.banner6-div-2').stop();
                                $('.banner6-div-3').stop();
                                $('.banner6-div-1').animate({ 'width': '90%' }, 1000);
                                $('.banner6-div-1').css({ 'left': '0', 'transform': 'none', 'z-index': '3000' });
                                $('.banner6-div-1 *').css({ 'transform': 'none' });
                                $('.banner6-div-1 img').css({ 'right': '0', 'width': '100%' });
                                $('.banner6-div-1 p').css({ 'right': w1 + 20 + 'px' });
                                $('.banner6-div-1 a').css({ 'right': w3 + 'px' });

                                $('.banner6-div-2').css({ 'width': '95%', 'left': '0', 'transform': 'none', 'z-index': '2000' });
                                $('.banner6-div-2 *').css({ 'transform': 'none' });
                                $('.banner6-div-2 img').css({ 'right': '0', 'width': '100%' });
                                $('.banner6-div-2 a').css({ 'right': w3 + 'px' });

                                $('.banner6-div-3').css({ 'width': '100%', 'left': '0', 'z-index': '1000' });
                                $('.banner6-div-3 img').css({ 'right': '0', 'width': '100%' });
                                $('.banner6-div-3 a').css({ 'right': w3 + 'px' });

                                $('.banner6-div-1 span').remove();
                                $('.banner6-div-2 span').remove();
                                $('.banner6-div-3 span').remove();

                                $('.banner6-div-2').append('<span class="span-div-2" style="right: 0;"></span>');
                                $('.banner6-div-3').append('<span class="span-div-3" style="right: 0;"></span>');
                            }, 100);
                        });

                        $(document).on('mouseover', '.banner6-div-2,.span-div-2', function () {
                            setTimeout(function () {
                                var w1 = $('.banner6').width() * 0.05;
                                var w4 = $('.banner6').width() * 0.95;
                                var w2 = $('.banner6-div-1 a').width();
                                var w3 = (w1 - w2) / 2;

                                $('.banner6-div-1').css({ 'width': '95%', 'left': '0', 'transform': 'none', 'z-index': '2000' });
                                $('.banner6-div-1 *').css({ 'transform': 'none' });
                                $('.banner6-div-1 img').css({ 'right': '41%' });
                                $('.banner6-div-1 a').css({ 'right': '95%' });

                                $('.banner6-div-1').stop();
                                $('.banner6-div-3').stop();
                                $('.banner6-div-2').animate({ 'width': '90%' }, 1000);
                                $('.banner6-div-2').css({ 'left': '5%', 'transform': 'none', 'z-index': '3000' });
                                $('.banner6-div-2 *').css({ 'transform': 'none' });
                                $('.banner6-div-2 img').css({ 'right': '0', 'width': '100%' });
                                $('.banner6-div-2 p').css({ 'right': w1 + 20 + 'px' });
                                $('.banner6-div-2 a').css({ 'right': w3 + 'px' });

                                $('.banner6-div-3').css({ 'width': '100%', 'left': '0', 'z-index': '1000' });
                                $('.banner6-div-3 img').css({ 'right': '0', 'width': '100%' });
                                $('.banner6-div-3 a').css({ 'right': w3 + 'px' });

                                $('.banner6-div-1 span').remove();
                                $('.banner6-div-2 span').remove();
                                $('.banner6-div-3 span').remove();
                                $('.banner6-div-1').append('<span class="span-div-1" style="left: 0;"></span>');
                                $('.banner6-div-3').append('<span class="span-div-3" style="right: 0;"></span>');
                            }, 100);
                        });

                        $(document).on('mouseover', '.banner6-div-3,.span-div-3', function () {
                            setTimeout(function () {
                                var w1 = $('.banner6').width() * 0.05;
                                var w4 = $('.banner6').width() * 0.95;
                                var w2 = $('.banner6-div-1 a').width();
                                var w3 = (w1 - w2) / 2;

                                $('.banner6-div-1').css({ 'width': '100%', 'transform': 'none', 'left': '0', 'z-index': '1000' });
                                $('.banner6-div-1 *').css({ 'transform': 'none' });
                                $('.banner6-div-1 img').css({ 'right': '41%' });
                                $('.banner6-div-1 a').css({ 'right': w4 + w3 + 'px' });

                                $('.banner6-div-2').css({ 'width': '95%', 'left': '5%', 'transform': 'none', 'z-index': '2000' });
                                $('.banner6-div-2 *').css({ 'transform': 'none' });
                                $('.banner6-div-2 img').css({ 'right': '93%', 'width': '100%' });
                                $('.banner6-div-2 a').css({ 'right': w4 - w1 + w3 + 'px' });

                                $('.banner6-div-2').stop();
                                $('.banner6-div-1').stop();
                                $('.banner6-div-3').animate({ 'width': '90%' }, 1000);
                                $('.banner6-div-3').css({ 'left': '10%', 'z-index': '3000' });
                                $('.banner6-div-3 img').css({ 'right': '0', 'width': '100%' });
                                $('.banner6-div-3 p').css({ 'right': w1 + 20 + 'px' });
                                $('.banner6-div-3 a').css({ 'right': w3 + 'px' });

                                $('.banner6-div-1 span').remove();
                                $('.banner6-div-2 span').remove();
                                $('.banner6-div-3 span').remove();
                                $('.banner6-div-1').append('<span class="span-div-1" style="left: 0;"></span>');
                                $('.banner6-div-2').append('<span class="span-div-2" style="left: 0;"></span>');
                            }, 100);
                        });
                    });
                }, 1000);
            }
        },
        onLeave: function (index, direction) {
            if (index == 1) {
                $('.banner2-content-0 img').hide();
                parallax.disable();
            }

            if (index == 2) {
                $('.banner3-wrap img').css('opacity', '0');
                $('.banner3-wrap .text').css('left', '45.6vw');
                $('.banner3-wrap #pop-click').css('left', '83vw');
                $('.left-nav li').removeClass('active');
                $('.banner3-nav-content p').hide();
                $('.banner3-nav-content').unbind('mousewheel');
            }

            if (index == 3) {
                $('.banner5-pop-layout-content').unbind('mousewheel');
                $('.banner5-wrap img').css('opacity', '0');
                $('.banner5-wrap .text').css('left', '37vw');
                $('.banner5-wrap #banner5-pop-click').css('left', '80vw');
              }

            if (index == 4) {
                $(document).off('mouseover', '.banner6-div-1,.span-div-1');
                $(document).off('mouseover', '.banner6-div-2,.span-div-2');
                $(document).off('mouseover', '.banner6-div-3,.span-div-3');
                $(document).off('mouseover', '#header,#footer');

                $('.banner6-div-1').stop();
                $('.banner6-div-2').stop();
                $('.banner6-div-3').stop();

                $('.banner6-div-1 span').remove();
                $('.banner6-div-2 span').remove();
                $('.banner6-div-3 span').remove();

                $('.banner6-div-1').css({ 'width': '100%', 'left': '-120%', '-webkit-transform': 'skew(-13deg)', '-moz-transform': 'skew(-13deg)', 'transform': 'skew(-13deg)', 'z-index': '1003' });
                $('.banner6-div-1 *').css({ '-webkit-transform': 'skew(13deg)', '-moz-transform': 'skew(13deg)', 'transform': 'skew(13deg)' });
                $('.banner6-div-1 img').css({ 'right': '-15%' });
                $('.banner6-div-1 p').css({ 'right': '7vw' });
                $('.banner6-div-1 a').css({ 'right': '1%' });

                $('.banner6-div-2').css({ 'width': '100%', 'left': '-120%', '-webkit-transform': 'skew(-13deg)', '-moz-transform': 'skew(-13deg)', 'transform': 'skew(-13deg)', 'z-index': '1002' });
                $('.banner6-div-2 *').css({ '-webkit-transform': 'skew(13deg)', '-moz-transform': 'skew(13deg)', 'transform': 'skew(13deg)' });
                $('.banner6-div-2 img').css({ 'right': '-17%' });
                $('.banner6-div-2 p').css({ 'right': '7vw' });
                $('.banner6-div-2 a').css({ 'right': '1%' });

                $('.banner6-div-3').css({ 'width': '100%', 'left': '-120%', 'z-index': '1001' });
                $('.banner6-div-3 img').css({ 'right': '0' });
                $('.banner6-div-3 p').css({ 'right': '7vw' });
                $('.banner6-div-3 a').css({ 'right': '1%' });
            }
        },
        afterSlideLoad: function (anchorLink, index, slideAnchor, slideIndex) {
            if (index == 1) {
                $('.banner2-content-' + slideIndex + ' img').fadeIn(4000);
                $('.banner2-content-' + slideIndex + ' .text').addClass('animated pulse');
                parallax = new Parallax($('.banner2-content-' + slideIndex)[0]);
            }
        },
        onSlideLeave: function (anchorLink, index, slideIndex, direction, nextSlideIndex) {
            if (index == 1) {
                $('.banner2-content-' + slideIndex + ' img').hide();
                parallax.disable();
            }
        }
    });

    // setInterval(function () {
    //     $.fn.fullpage.moveSlideRight();
    // }, 3000);

    $(window).resize(function () {
        autoScrolling();
    });

    function autoScrolling() {
        var $ww = $(window).width();
        if ($ww < 1024) {
            $.fn.fullpage.setAutoScrolling(false);
        } else {
            $.fn.fullpage.setAutoScrolling(true);
        }
    }

    autoScrolling();
});