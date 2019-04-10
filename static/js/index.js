window.useCaseClick = function(e) {
    for (var t = document.getElementsByClassName("list-item"), n = document.getElementsByClassName("menu-item"), o = 0; o < t.length; o++) t[o].removeClass("selected"),
        n[o].addClass("hide");
    t[e].addClass("selected"),
        n[e].removeClass("hide")
},
    window.playVideo = function() {
        if (document.getElementById("video-masking").removeClass("hide"), window.innerWidth < window.innerHeight) {
            var e = document.querySelector(".video-wrapper iframe"),
                t = document.querySelector(".video-wrapper"),
                n = 9 * window.innerWidth / 16;
            t.paddingTop = "0",
                e.style.width = "100%",
                e.style.height = n + "px",
                e.style.top = "0px",menu
            e.style.left = "0px",
                e.style.bottom = "0px",
                e.style.right = "0px",
                e.style.margin = "auto"
        }
        document.getElementById("youtube-video").contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*")
    },
    window.onMaskingClick = function() {
        document.getElementById("video-masking").addClass("hide"),
            document.getElementById("youtube-video").contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', "*")
    },
    window.onExtensionSelectorClick = function() {
        var e = document.getElementById("extension-selector"),
            t = document.getElementById("extension-list"),
            n = document.getElementById("extension-masking");
        t.hasClass("active") ? (t.removeClass("active"), n.removeClass("active"), e.removeClass("active")) : (e.addClass("active"), t.addClass("active"), n.addClass("active"))
    },
    window.onExtensionMaskingClick = function() {
        var e = document.getElementById("extension-selector"),
            t = document.getElementById("extension-list"),
            n = document.getElementById("extension-masking");
        t.hasClass("active") && (t.removeClass("active"), n.removeClass("active"), e.removeClass("active"))
    },
    window.onExtendTableClick = function() {
        for (var e = document.getElementById("extend-tbl"), t = document.getElementById("tbl-latest-body"), n = document.getElementById("tbl-old-body"), o = 0; o < n.children.length; o++) t.appendChild(n.children[o]);
        e.parentNode.removeChild(e)
    },
    window.showEventPopup = function(e, t) {
        var n = document.getElementsByTagName("body")[0],
            o = document.createElement("div");
        o.className = "event-popup-masking hide";
        var d = document.createElement("div");
        d.className = "event-popup-body hide",
            d.innerHTML = e;
        var i = document.createElement("div");
        i.className = "event-popup-button-wrap",
            i.innerHTML = t,
            d.appendChild(i);
        var s = document.createElement("i");
        s.className = "event-popup-close",
            s.addEventListener("click",
                function() {
                    n.removeChild(o),
                        n.removeChild(d)
                }),
            d.prepend(s),
            n.appendChild(o),
            n.appendChild(d),
            d.getElementsByTagName("img")[0].addEventListener("load",
                function() {
                    o.removeClass("hide"),
                        d.removeClass("hide")
                }),
            o.addEventListener("click",
                function() {
                    n.removeChild(o),
                        n.removeChild(d)
                })
    }

$(function () {
    var s_width = document.body.clientWidth;  //获取屏幕宽度
    if(s_width < 600){                        //手机操作
        $("#menu .menu-item").click(function () {
            $(this).parent("#menu").removeClass('active')
            $('.menu-icon').toggleClass('active');
        });
        $(".menu-icon").click(function () {
            $("#menu").toggleClass('active')
            $(this).toggleClass('active');
            // $("#menu").removeClass('active')
        });
        $(".inner .tec-pic").width(s_width -40);
        $("#main .inner01").css('padding-bottom',s_width+40);




    }

    $(".white_paper").hover(function () {
        $('.submenu').show(200)
    })





})

