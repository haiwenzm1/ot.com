$(function() {
    var parallax;
    $('#main').fullpage({
        // paddingTop: document.documentElement.clientHeight * 0.1 + 86 + 'px',
        // paddingBottom: document.documentElement.clientHeight * 0.12 + 41 + 'px',
        navigation: true,
        afterRender: function() {
            $('.banner2-content-0 img').fadeIn(4000);
            $('.banner2-content-0 .text').addClass('animated shake');
            parallax = new Parallax($('.banner2-content-0')[0]);
        },
        afterLoad: function(anchorLink, index) {
            if (index == 1) {
                $('.banner2-content-0 img').fadeIn(4000);
                $('.banner2-content-0 .text').addClass('animated shake');
                parallax = new Parallax($('.banner2-content-0')[0]);
            }

            if (index == 2) {
                $('.banner3-wrap img').fadeIn(4000);
                $('#pop-click').addClass('animated shake');

                $('#pop-click').click(function() {
                    $.fn.fullpage.setAllowScrolling(false);
                    $('#fp-nav').hide();
                    $('.pop-layout').show();
                    $('.left-nav').find('li').eq(0).addClass('active');
                    $('.left-nav').addClass('animated fadeInLeft');

                    $('.banner3-nav-content').addClass('animated fadeIn');
                    $('.banner3-nav-content').find('p').eq(0).show();
                    $('.banner3-nav-content .logo-img').addClass('animated bounceIn');
                })

                $(document).on('click', '.banner3 .close', function() {
                    $('.left-nav li').removeClass('active');
                    $('.banner3-nav-content p').hide();
                    $('.pop-layout').hide();
                    $('#fp-nav').show();
                    $.fn.fullpage.setAllowScrolling(true);
                })

                $('.banner3-nav-content').bind('mousewheel', function(event, delta) {
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
                    $('.banner3-nav-content').find('p').eq(index).show().siblings().hide();
                    return false;
                });
            }

            if (index == 3) {
                $('.banner5').find('[rel]').each(function() {
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

                $('#banner5-pop-click').click(function() {
                    $('#fp-nav').hide();
                    $('.banner5-pop-layout').show();
                    $.fn.fullpage.setAllowScrolling(false);
                    $('.time-nav').find('li').eq(0).addClass('active');
                    $('.banner5-pop-content').find('div').eq(0).show();
                });

                $(document).on('click', '.banner5-pop-layout-content-close', function() {
                    $('#fp-nav').show();
                    $('.banner5-pop-layout').hide();
                    $.fn.fullpage.setAllowScrolling(true);
                })

                $('.banner5-pop-layout-content').bind('mousewheel', function(event, delta) {
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
            }

            if (index == 4) {
                $(document).on('click', '.banner6-div-1 a, .span-div-1', function() {
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

                $(document).on('click', '.banner6-div-2 a,.span-div-2', function() {
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

                $(document).on('click', '.banner6-div-3 a,.span-div-3', function() {
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
        onLeave: function(index, direction) {
            if (index == 1) {
                $('.banner2-content-0 img').hide();
                parallax.disable();
            }

            if (index == 2) {
                $('.banner3-wrap img').hide();
                $('.time-nav li').removeClass('active');
                $('.banner3-nav-content p').hide();
            }
        },
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex) {
            if (index == 1) {
                $('.banner2-content-' + slideIndex + ' img').fadeIn(4000);
                $('.banner2-content-' + slideIndex + ' .text').addClass('animated shake');
                parallax = new Parallax($('.banner2-content-' + slideIndex)[0]);
            }
        },
        onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex) {
            if (index == 1) {
                $('.banner2-content-' + slideIndex + ' img').hide();
                parallax.disable();
            }
        }
    });

    // setInterval(function () {
    //     $.fn.fullpage.moveSlideRight();
    // }, 3000);

    $(window).resize(function() {
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