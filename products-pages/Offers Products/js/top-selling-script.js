$(function() {

    $("body").css("padding-top", $("header").innerHeight());

    $("body").click(function() {

        $("div.login.show-details").removeClass("active");

        $("div.login-details").fadeOut(0);

        $("div.help-details").fadeOut(0);

    })

    $(document).keydown(function(e) {

        if (e.keyCode == 27) {

            $("div.login-details").fadeOut(0);

            $("div.help-details").fadeOut(0);

            $("div.login.show-details").removeClass("active");

        }

    })

    $("div.login.show-details").each(function() {

        $(this).click(function(e) {

            e.stopPropagation();

            $(this).addClass("active").siblings().removeClass("active");

        })

    })

    $("div.show-login-details").click(function() {

        if ($("div.login-details").css("display") == "none") {

            $("div.help-details").fadeOut(0);
            
            $("div.login-details").slideDown(50);

        } else if ($("div.login-details").css("display") == "block") {

             $("div.show-login-details").removeClass("active");
            
            $("div.login-details").fadeOut(0);

        }

    })

    $("div.show-help-details").click(function() {

        if ($("div.help-details").css("display") == "none") {

            $("div.login-details").fadeOut(0);
            
            $("div.help-details").slideDown(50);

        } else if ($("div.help-details").css("display") == "block") {

             $("div.show-help-details").removeClass("active");
            
            $("div.help-details").fadeOut(0);

        }

    })

    $("div.login-details").click(function(e) {

        e.stopPropagation();

    })

    $("div.help-details").click(function(e) {

        e.stopPropagation();

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

})