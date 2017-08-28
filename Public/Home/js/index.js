$(function () {
    $('#main').fullpage({
        paddingTop: '170px',
        paddingBottom: '170px',
        navigation: true,
        afterRender: function () {
            bannerIn('banner2', 0);
        },
        afterLoad: function (anchorLink, index) {
            if (index == 1) {
                bannerIn('banner2', 0);
            }

            if (index == 2) {
                $('.banner3').find('[rel]').each(function () {
                    if ($(this).attr('dir') == 'top' || $(this).attr('dir') == 'bottom') {
                        $(this).delay(100).animate({
                            top: $(this).attr('rel')
                        }, 1500, 'easeOutExpo');
                    } else {
                        $(this).delay(100).animate({
                            left: $(this).attr('rel')
                        }, 1000, 'easeOutExpo');
                    }
                });

                $('#pop-click').click(function () {
                    $('#fp-nav').hide();
                    $('.pop-layout').show();
                    $.fn.fullpage.setAllowScrolling(false);
                    $('.left-nav').find('li').eq(0).addClass('active');
                    $('.banner3-nav-content').find('p').eq(0).show();
                })

                $(document).on('click', '.banner3 .close', function () {
                    $('#fp-nav').show();
                    $('.pop-layout').hide();
                    $.fn.fullpage.setAllowScrolling(true);
                })

                $('.banner3-nav-content').bind('mousewheel', function (event, delta) {
                    var dir = delta > 0 ? 'Up' : 'Down';
                    if (dir == 'Up') {
                        if ($('.left-nav .active').prev().length == 0) {
                            $('.left-nav .active').removeClass('active');
                            $('.left-nav').find('li').eq($('.left-nav').find('li').length - 1).addClass('active');
                        } else {
                            $('.left-nav .active').removeClass('active').prev().addClass('active')
                        }
                    } else {
                        if ($('.left-nav .active').next().length == 0) {
                            $('.left-nav .active').removeClass('active');
                            $('.left-nav').find('li').eq(0).addClass('active');
                        } else {
                            $('.left-nav .active').removeClass('active').next().addClass('active')
                        }
                    }
                    var index = $('.left-nav').find('li').index($('.left-nav .active'));
                    $('.banner3-nav-content').find('p').eq(index).show().siblings().hide();
                    return false;
                });


            }

            if (index == 3) {
                bannerIn('banner4', 0);
            }

            if (index == 4) {
                $('.banner5').find('[rel]').each(function () {
                    if ($(this).attr('dir') == 'top' || $(this).attr('dir') == 'bottom') {
                        $(this).delay(100).animate({
                            top: $(this).attr('rel')
                        }, 1500, 'easeOutExpo');
                    } else {
                        $(this).delay(100).animate({
                            left: $(this).attr('rel')
                        }, 1000, 'easeOutExpo');
                    }
                });

                $('#banner5-pop-click').click(function () {
                    $('#fp-nav').hide();
                    $('.banner5-pop-layout').show();
                    $.fn.fullpage.setAllowScrolling(false);
                    $('.time-nav').find('li').eq(0).addClass('active');
                    $('.banner5-pop-content').find('div').eq(0).show();
                });

                $(document).on('click', '.banner5-pop-layout-content-close', function () {
                    $('#fp-nav').show();
                    $('.banner5-pop-layout').hide();
                    $.fn.fullpage.setAllowScrolling(true);
                })

                $('.banner5-pop-layout-content').bind('mousewheel', function (event, delta) {
                    var dir = delta > 0 ? 'Up' : 'Down';
                    if (dir == 'Up') {
                        if ($('.time-nav .active').prev().length == 0) {
                            $('.time-nav .active').removeClass('active');
                            $('.time-nav').find('li').eq($('.time-nav').find('li').length - 1).addClass('active');
                        } else {
                            $('.time-nav .active').removeClass('active').prev().addClass('active')
                        }
                    } else {
                        if ($('.time-nav .active').next().length == 0) {
                            $('.time-nav .active').removeClass('active');
                            $('.time-nav').find('li').eq(0).addClass('active');
                        } else {
                            $('.time-nav .active').removeClass('active').next().addClass('active')
                        }
                    }
                    var index = $('.time-nav').find('li').index($('.time-nav .active'));
                    $('.banner5-pop-content').find('div').eq(index).show().siblings().hide();
                    return false;
                });
            }

            if (index == 5) {
                $(document).on('click', '.banner6-div-1 a, .span-div-1', function () {
                    $('.banner6').remove('span');
                    $('.banner6-div-2 a,.banner6-div-3 a').removeAttr('url');

                    $('.banner6-div-1').css({ 'width': '100%', 'left': '0', 'z-index': '3000' });
                    $('.banner6-div-1 img').css({ 'left': '0', 'width': '90%' });

                    var w1 = $('.banner6-div-1').width() * 0.05;
                    var w2 = $('.banner6-div-1 a').width();
                    var w3 = (w1 - w2) / 2;

                    $('.banner6-div-1 p').css({ 'right': w1 * 3 + 'px' });
                    $('.banner6-div-1 a').css({ 'right': w1 * 2 + w3 + 'px' });

                    $('.banner6-div-2').css({ 'width': '100%', 'left': '0', 'transform': 'none', 'z-index': '2000' });
                    $('.banner6-div-2 *').css({ 'transform': 'none' });
                    $('.banner6-div-2 img').css({ 'left': '0', 'width': '95%' });
                    $('.banner6-div-2 a').css({ 'right': w1 + w3 + 'px' });

                    $('.banner6-div-3').css({ 'width': '100%', 'left': '0', 'z-index': '1000' });
                    $('.banner6-div-3 img').css({ 'left': '0', 'width': '100%' });
                    $('.banner6-div-3 a').css({ 'right': w3 + 'px' });

                    $('.banner6-div-1').append('<span class="span-div-2" style="transform:none; cursor: pointer; width: 5%; height: 25%; position: absolute; top:70%; left: 90%; z-index: 3001"></span>');
                    $('.banner6-div-1').append('<span class="span-div-3" style="transform:none; cursor: pointer; width: 5%; height: 25%; position: absolute; top:70%; left: 95%; z-index: 3002"></span>');

                    if ($('.banner6-div-1 a').attr('url')) {
                        $('.banner6-div-1 a').attr('href', "/index.php?s=/Home/Index/whoWeAre.html");
                    } else {
                        $('.banner6-div-1 a').attr('url', "/index.php?s=/Home/Index/whoWeAre.html");
                    }
                });

                $(document).on('click', '.banner6-div-2 a,.span-div-2', function () {
                    $('.banner6').remove('span');
                    $('.banner6-div-1 a,.banner6-div-3 a').removeAttr('url');

                    $('.banner6-div-1').css({ 'width': '100%', 'left': '0', 'z-index': '2000' });
                    var w1 = $('.banner6-div-1').width() * 0.05;
                    var w4 = $('.banner6-div-1').width() * 0.95;
                    var w2 = $('.banner6-div-1 a').width();
                    var w3 = (w1 - w2) / 2;

                    $('.banner6-div-1 img').css({ 'left': '0' });
                    $('.banner6-div-1 a').css({ 'right': w4 + w3 + 'px' });

                    $('.banner6-div-2').css({ 'width': '100%', 'left': '0', 'transform': 'none', 'z-index': '3000' });
                    $('.banner6-div-2 *').css({ 'transform': 'none' });
                    $('.banner6-div-2 img').css({ 'left': '5%', 'width': '90%' });
                    $('.banner6-div-2 p').css({ 'right': w1 * 2 + 'px' });
                    $('.banner6-div-2 a').css({ 'right': w1 + w3 + 'px' });

                    $('.banner6-div-3').css({ 'width': '100%', 'left': '0', 'z-index': '1000' });
                    $('.banner6-div-3 img').css({ 'left': '0', 'width': '100%' });
                    $('.banner6-div-3 a').css({ 'right': w3 + 'px' });

                    $('.banner6-div-2').append('<span class="span-div-1" style="transform:none; cursor: pointer; width: 5%; height: 25%; position: absolute; top:70%; left: 0%; z-index: 3001"></span>');
                    $('.banner6-div-2').append('<span class="span-div-3" style="transform:none; cursor: pointer; width: 5%; height: 25%; position: absolute; top:70%; left: 95%; z-index: 3002"></span>');

                    if ($('.banner6-div-2 a').attr('url')) {
                        $('.banner6-div-2 a').attr('href', "/index.php?s=/Home/Index/howWeWork.html");
                    } else {
                        $('.banner6-div-2 a').attr('url', "/index.php?s=/Home/Index/howWeWork.html");
                    }
                });

                $(document).on('click', '.banner6-div-3 a,.span-div-3', function () {
                    $('.banner6').remove('span');
                    $('.banner6-div-1 a,.banner6-div-2 a').removeAttr('url');

                    $('.banner6-div-1').css({ 'width': '100%', 'left': '0', 'z-index': '1000' });

                    var w1 = $('.banner6-div-1').width() * 0.05;
                    var w4 = $('.banner6-div-1').width() * 0.95;
                    var w2 = $('.banner6-div-1 a').width();
                    var w3 = (w1 - w2) / 2;

                    $('.banner6-div-1 img').css({ 'left': '0' });
                    $('.banner6-div-1 a').css({ 'right': w4 + w3 + 'px' });

                    $('.banner6-div-2').css({ 'width': '100%', 'left': '0', 'transform': 'none', 'z-index': '2000' });
                    $('.banner6-div-2 *').css({ 'transform': 'none' });
                    $('.banner6-div-2 img').css({ 'left': '5%', 'width': '90%' });
                    $('.banner6-div-2 a').css({ 'right': w4 - w1 + w3 + 'px' });

                    $('.banner6-div-3').css({ 'width': '100%', 'left': '0', 'z-index': '3000' });
                    $('.banner6-div-3 img').css({ 'left': '10%', 'width': '90%' });
                    $('.banner6-div-3 p').css({ 'right': w1 + 'px' });
                    $('.banner6-div-3 a').css({ 'right': w3 + 'px' });

                    $('.banner6-div-3').append('<span class="span-div-1" style="transform:none; cursor: pointer; width: 5%; height: 25%; position: absolute; top:70%; left: 0%; z-index: 2001"></span>');
                    $('.banner6-div-3').append('<span class="span-div-2" style="transform:none; cursor: pointer; width: 5%; height: 25%; position: absolute; top:70%; left: 5%; z-index: 3000"></span>');

                    if ($('.banner6-div-3 a').attr('url')) {
                        $('.banner6-div-3 a').attr('href', "/index.php?s=/Home/Index/whereWeAre.html");
                    } else {
                        $('.banner6-div-3 a').attr('url', "/index.php?s=/Home/Index/whereWeAre.html");
                    }
                });
            }
        },
        onLeave: function (index, direction) {
            if (index == 1) {
                bannerOut('banner2', 0);
            }

            if (index == 2) {
                $('.banner3').find('a').delay(100).animate({
                    left: '-80%'
                }, 1500, 'easeOutExpo');
            }

            if (index == 3) {
                bannerOut('banner4', 0);
            }
        },
        afterSlideLoad: function (anchorLink, index, slideAnchor, slideIndex) {
            if (index == 1) {
                bannerIn('banner2', slideIndex);
            }

            if (index == 3) {
                bannerIn('banner4', slideIndex);
            }
        },
        onSlideLeave: function (anchorLink, index, slideIndex, direction, nextSlideIndex) {
            if (index == 1) {
                bannerOut('banner2', slideIndex);
            }
            if (index == 3) {
                bannerOut('banner4', slideIndex);
            }
        }
    });

    function bannerIn(id, index) {
        $('.' + id).find('.slide').eq(index).find('[rel]').each(function () {
            if ($(this).attr('dir') == 'top' || $(this).attr('dir') == 'bottom') {
                $(this).delay(100).animate({
                    top: $(this).attr('rel')
                }, 1500, 'easeOutExpo');
            } else {
                $(this).delay(100).animate({
                    left: $(this).attr('rel')
                }, 1500, 'easeOutExpo');
            }
        });
    }

    function bannerOut(id, index) {
        $('.' + id).find('.slide').find('[rel]').each(function () {
            if ($(this).attr('dir') == 'left') {
                $(this).css('left', '-120%');
            } else if ($(this).attr('dir') == 'top') {
                $(this).css('top', '-120%');
            } else if ($(this).attr('dir') == 'right') {
                $(this).css('left', '120%');
            } else if ($(this).attr('dir') == 'bottom') {
                $(this).css('top', '120%');
            }
        });
    }

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
        setTimeout(function () {
            $('.banner2-wrap').width($('.banner2-img-8').width());
            $('.banner2-wrap').css('marginLeft', ($('.banner2').width() - $('.banner2-wrap').width()) / 2);
            var arroePosition = ($('.banner2').width() - $('.banner2-wrap').width() - $('.fp-controlArrow.fp-prev').width()) / 2;
            $('.banner2 .fp-controlArrow.fp-prev').css('left', arroePosition + 'px');
            $('.banner2 .fp-controlArrow.fp-next').css('right', arroePosition + 'px');

            $('.banner4-wrap').width($('.banner4-img-1').width());
            $('.banner4-wrap').css('marginLeft', ($('.banner4').width() - $('.banner4-wrap').width()) / 2);
            var arroePosition = ($('.banner4').width() - $('.banner4-wrap').width() - $('.fp-controlArrow.fp-prev').width()) / 2;
            $('.banner4 .fp-controlArrow.fp-prev').css('left', arroePosition + 'px');
            $('.banner4 .fp-controlArrow.fp-next').css('right', arroePosition + 'px');
        }, 500)

    }

    autoScrolling();
});