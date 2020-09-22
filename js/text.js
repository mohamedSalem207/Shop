$(function() {

    "use strict";

    $("body").css("padding-top", $("header").innerHeight());

    $("body").click(function() {

        $("div.login.show-details").removeClass("active");

        $("div.login-details").fadeOut(0);

        $("div.help-details").fadeOut(0);

        $("nav.icon-menu").fadeOut(0);

    });

    $(window).scroll(function() {

        if ($(window).scrollTop() > 100) {

            $("i.scroll-to-top").css("display", "inline");

        } else {

            $("i.scroll-to-top").css("display", "none");

        }

    })

    $("i.scroll-to-top").click(function() {

        $("body, html").animate({

            scrollTop: "0"

        }, 200)

    })

    $(document).keydown(function(e) {

        if (e.keyCode == 27) {

            $("div.login-details").fadeOut(0);

            $("div.help-details").fadeOut(0);

            $("div.login.show-details").removeClass("active");

            $("div.media-login.show-details").removeClass("active");

            $("nav.icon-menu").fadeOut(0);

        }

    })

    $("div.navbar i.navbar-icons").click(function(e) {

        e.stopPropagation();

        if ($("nav.icon-menu").css("display") == "none") {

            $("nav.icon-menu").slideDown(20);

        } else if ($("nav.icon-menu").css("display") == "block") {

            $("nav.icon-menu").fadeOut(0);

            console.log("Good");

        }

    })

    $("div.login.show-details").each(function() {

        $(this).click(function(e) {

            e.stopPropagation();

            $(this).addClass("active").siblings().removeClass("active");

        })

    })

    $("header div.login").click(function(e) {

        e.stopPropagation();

    })

    $("nav div.show-login-details").click(function() {

        if ($("nav div.login-details").css("display") == "none") {

            $("nav div.help-details").fadeOut(0);
            
            $("nav div.login-details").slideDown(50);

        } else if ($("nav div.login-details").css("display") == "block") {

             $("nav div.show-login-details").removeClass("active");
            
            $("nav div.login-details").fadeOut(0);

        }

    })

    $("nav div.show-help-details").click(function() {

        if ($("nav div.help-details").css("display") == "none") {

            $("nav div.login-details").fadeOut(0);
            
            $("nav div.help-details").slideDown(50);

        } else if ($("nav div.help-details").css("display") == "block") {

             $("nav div.show-help-details").removeClass("active");
            
            $("nav div.help-details").fadeOut(0);

        }

    })

    $("div.login-details").click(function(e) {

        e.stopPropagation();

    })

    $("div.help-details").click(function(e) {

        e.stopPropagation();

    })

    $("div.media-login.show-details").each(function() {

        $(this).click(function(e) {

            e.stopPropagation();

            $(this).addClass("active").siblings().removeClass("active");

        })

    })

    $("div.media-show-login-details").click(function() {

        if ($("div.login-details").css("display") == "none") {

            $("div.help-details").fadeOut(0);
            
            $("div.login-details").slideDown(50);

        } else if ($("div.login-details").css("display") == "block") {

             $("div.media-show-login-details").removeClass("active");
            
            $("div.login-details").fadeOut(0);

        }

    })

    $("div.media-show-help-details").click(function() {

        if ($("div.help-details").css("display") == "none") {

            $("div.login-details").fadeOut(0);
            
            $("div.help-details").slideDown(50);

        } else if ($("div.help-details").css("display") == "block") {

             $("div.media-show-help-details").removeClass("active");
            
            $("div.help-details").fadeOut(0);

        }

    })

    var placeAttr = "";

    $(":input").focus(function() {

        placeAttr =  $(this).attr("placeholder");

        $(this).attr("placeholder", "");

    }).blur(function() {

        $(this).attr("placeholder", placeAttr);

    })

    $("i.search-icon").click(function() {

        if ($("div.search input").val() == "") {

            $("div.search input").focus();

        }

    })

    $("div.search button").click(function() {

        if ($("div.search input").val() == "") {

            $("div.search input").focus();

        }

    })

    var theBiggerHeight = 0;

    if ($("main div.menu").innerHeight() > theBiggerHeight) {

        theBiggerHeight = $("main div.menu").innerHeight();

        $("div.same-height").css("height", theBiggerHeight);

    } else if ($("main div.gallery").innerHeight() > theBiggerHeight) {

        theBiggerHeight = $("main div.gallery").innerHeight();

        $("div.same-height").css("height", theBiggerHeight);
    
    } else if ($("main div.offers").innerHeight() > theBiggerHeight) {

        theBiggerHeight = $("main div.offers").css("height");

        $("div.same-height").css("height", theBiggerHeight);

    }

    $("div.menu-details").click(function(e) {

        e.stopPropagation();

    })

    $("main div.content div.menu a").hover(function() {

        $("div.menu-details").fadeIn(0);

        $(this).addClass("active-menu").siblings().removeClass("active-menu");

        $("#" + $(this).data("details")).fadeIn(10).siblings().fadeOut(0);

    }, function() {

        $("div.menu-details").fadeOut(0);

        $("main div.content a").removeClass("active-menu");

    })

    $("div.menu-details").hover(function() {

        $(this).css("display", "block");

    }, function() {

        $(this).fadeOut(0);

        $("main div.content a").removeClass("active-menu");

    })

    if ($(window).innerWidth() >= 1200) {

        $("section div.content").hover(function() {

            if ($(this).find("div.products-container").scrollLeft() == 0) {

                $(this).find("div.products-container").find("i.slide-left").fadeOut(0);

                $(this).find("div.products-container").find("i.slide-right").fadeIn(0);

            } else {

                $(this).find("div.products-container").find("i.slide-right").fadeIn(0);

                $(this).find("div.products-container").find("i.slide-left").fadeIn(0);

            }

            if ($(this).find("div.products-container").scrollLeft() > $(this).find("div.products-container").outerWidth()*2-20) {

                $(this).find("div.products-container").find("i.slide-right").fadeOut(0);

                $(this).find("div.products-container").find("i.slide-left").fadeIn(0);

            }

        }, function() {

            $(this).find("div.products-container").find("i.slide-right").fadeOut(0);

            $(this).find("div.products-container").find("i.slide-left").fadeOut(0);

        })

        $("div.products-container").scroll(function() {

            if ($(this).scrollLeft() == 0) {

                $(this).find("i.slide-left").fadeOut(0);

                $(this).find("i.slide-right").fadeIn(0);

            } else {

                $(this).find("i.slide-right").fadeIn(0);

                $(this).find("i.slide-left").fadeIn(0);

            }

            if ($(this).scrollLeft() > $(this).outerWidth() * 2 - 20) {

                $(this).find("i.slide-right").fadeOut(0);

                $(this).find("i.slide-left").fadeIn(0);

            }

        })

    } else if ($(window).innerWidth() >= 992 && $(window).innerWidth() < 1200) {
        
        $("div.products-container").scroll(function() {

            if ($(this).scrollLeft() == 0) {

                $(this).find("i.slide-left").fadeOut(0);

            } else if ($(this).scrollLeft() > 0) {

                $(this).find("i.slide-right").fadeIn(0);

                $(this).find("i.slide-left").fadeIn(0);

            }
            
            if ($(this).scrollLeft() >= $(window).innerWidth() * 3.4) {

                $(this).find("i.slide-right").fadeOut(0);

            }

        })

    } else if ($(window).innerWidth() > 767 && $(window).innerWidth() < 992) {

        $("div.products-container").scroll(function() {

            if ($(this).scrollLeft() == 0) {

                $(this).find("i.slide-left").fadeOut(0);

            } else if ($(this).scrollLeft() > 0) {

                $(this).find("i.slide-right").fadeIn(0);

                $(this).find("i.slide-left").fadeIn(0);

            }
            
            if ($(this).scrollLeft() >= $(window).innerWidth() * 6 - 900) {

                $(this).find("i.slide-right").fadeOut(0);

            }

        })       

    } else if ($(window).innerWidth() > 600 && $(window).innerWidth() <= 767) {
        
        $("div.products-container").scroll(function() {

            if ($(this).scrollLeft() == 0) {

                $(this).find("i.slide-left").fadeOut(0);

            } else if ($(this).scrollLeft() > 0) {

                $(this).find("i.slide-right").fadeIn(0);

                $(this).find("i.slide-left").fadeIn(0);

            }
            
            if ($(this).scrollLeft() >= $(window).innerWidth() * 6 - 880) {

                $(this).find("i.slide-right").fadeOut(0);

            }

        })
        
    } else if ($(window).innerWidth() <= 600) {

        $("div.products-container").scroll(function() {

            if ($(this).scrollLeft() == 0) {

                $(this).find("i.slide-left").fadeOut(0);

            } else if ($(this).scrollLeft() > 0) {

                $(this).find("i.slide-right").fadeIn(0);

                $(this).find("i.slide-left").fadeIn(0);

            }
            
            if ($(this).scrollLeft() >= $(window).innerWidth() * 8 - 200) {

                $(this).find("i.slide-right").fadeOut(0);

            }

        })

    }

    $("div.products-container i.slide-right").click(function() {

        $(this).parent().animate({

            scrollLeft: "+=" + $(this).parent().innerWidth()

        }, 500)

    })

    $("div.products-container i.slide-left").click(function() {

        $(this).parent().animate({

            scrollLeft: "-=" + $(this).parent().innerWidth()

        }, 500)

    })

    $("section.brands div.products-container").scroll(function() {

        if ($(window).innerWidth() > 600 && $(window).innerWidth() < 1200) {

            $("secton.brands div.products-container").scroll(function() {

                if ($(this).scrollLeft() == 0) {
    
                    $(this).find("i.slide-left").fadeOut(0);
    
                } else if ($(this).scrollLeft() > 0) {
    
                    $(this).find("i.slide-right").fadeIn(0);
    
                    $(this).find("i.slide-left").fadeIn(0);
    
                }
                
                if ($(this).scrollLeft() >= $(window).innerWidth() / 2) {
    
                    $(this).find("i.slide-right").fadeOut(0);
    
                }
    
            })

        }  else if ($(window).innerWidth() <= 600) {

            $("section.brands div.products-container").scroll(function() {

                if ($(this).scrollLeft() == 0) {
    
                    $(this).find("i.slide-left").fadeOut(0);
    
                } else if ($(this).scrollLeft() > 0) {
    
                    $(this).find("i.slide-right").fadeIn(0);
    
                    $(this).find("i.slide-left").fadeIn(0);
    
                }
                
                if ($(this).scrollLeft() >= $(window).innerWidth() * 1.5 + 200) {
    
                    $(this).find("i.slide-right").fadeOut(0);
    
                }
    
            })

        }

    })

})
