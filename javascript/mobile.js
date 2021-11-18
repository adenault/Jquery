
/*
	* Moble Menu
	* @Version 1.0.0 2021-11-15
	* Developed by: Ami (亜美) Denault
	* (c) 2013 Korori - korori-gaming.com
	* license: http://www.opensource.org/licenses/mit-license.php
*/
(function (e) {
    var mobileVar = {
        content: '#layout',
        bars: '.mobile_bars_background',
        mobile: '.mobile',
        baritems: '.bar1, .bar2, .bar3',
        mobile_bars: '.mobile_bars',
        width: 952
    };

    var link = document.createElement('meta');
    link.setAttribute('name', 'viewport');
    link.content = "width=device-width, initial-scale=1, shrink-to-fit=no";
    document.getElementsByTagName('head')[0].appendChild(link);

    $.mobilemenu = function (mobile_links, options) {
        var settings = $.extend({}, mobileVar, options);
        var content = (typeof settings.content == "string" ? settings.content : mobileVar.content);
        var bars = (typeof settings.bars == "string" ? settings.bars : mobileVar.bars);
        var mobile = (typeof settings.mobile == "string" ? settings.mobile : mobileVar.mobile);
        var baritems = (typeof settings.baritems == "string" ? settings.baritems : mobileVar.baritems);
        var mobile_bars = (typeof settings.mobile_bars == "string" ? settings.mobile_bars : mobileVar.mobile_bars);
        var width = (typeof settings.baritems_click == "number" ? settings.width : mobileVar.width);

        $('body').append('<div class="' + bars.trim().substring(1) + '"><div class="' + mobile_bars.substring(1).trim() + '"><div class="' + baritems.split(",")[0].trim().substring(1) + '"></div><div class="' + baritems.split(",")[1].trim().substring(1) + '"></div><div class="' + baritems.split(",")[2].trim().substring(1) + '"></div></div></div>');

        var links = '<li><a href="/">Home</a></li>';
        $.each(mobile_links, function (key, value) {
            links += '<li><a href="' + value + '">' + key + '</a></li>';
        });

        $('body').append('<ul class="' + mobile.trim().substring(1) + '" style="display: none;">' + links + '</ul>');

        $(window).resize(function () {
            mobileScroll();
        });

        mobileScroll();

        $(mobile_bars).click(function (event) {
            event.stopPropagation();
            event.preventDefault();
            $(this).toggleClass("change");
            $(mobile).slideToggle();
        });

        function mobileScroll() {
            if ($(window).width() < width) {
                $(mobile).hide();
                $(mobile_bars).removeClass("change");
                $(content).css({'margin-top': '80px'});
                $(mobile).css({'overflow-y': 'auto'});

            } else {
                $(mobile).css({'max-height': 'unset' , 'overflow-y': 'unset','margin-top': '0px;'});
                $(mobile_bars).removeClass("change");
                $(content).css({'margin-top': 'unset'});
            }
        }
    };

})(jQuery);