!
    function() {
        function e() {
            dataLayer.push(arguments)
        }
        Element.prototype.addClass = function(e) {
            var a = this.className;
            if (a) for (var t = this.className.split(" "), n = 0; n < t.length; n++) if (t[n] === e) return;
            a ? a += " " + e: a = e,
                this.className = a
        },
            Element.prototype.removeClass = function(e) {
                for (var a = this.className.split(" "), t = 0; t < a.length; t++) if (a[t] == e) {
                    a.splice(t, 1);fv
                    break
                }
                this.className = a.join(" ")
            },
            Element.prototype.hasClass = function(e) {
                if (this.className) for (var a = this.className.split(" "), t = 0; t < a.length; t++) if (a[t] === e) return ! 0;
                return ! 1
            },
        "undefined" == typeof window && (window = {}),
            window.onHeaderProductMenuBack = function(e) {
                e.target || e.srcElement;
                var a = document.querySelector(".menu.submenu"); - 1 === a.className.indexOf("active") ? a.addClass("active") : a.removeClass("active")
            },
            document.querySelector(".menu").addEventListener("scroll",
                function(e) {
                    e.stopPropagation()
                }),
            window.dataLayer = window.dataLayer || [],
            e("js", new Date),
            e("config", "UA-114007205-2")
    } ();