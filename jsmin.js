! function t(r, e, n) {
    function o(a, l) {
        if (!e[a]) {
            if (!r[a]) {
                var i = "function" == typeof require && require;
                if (!l && i) return i(a, !0);
                if (u) return u(a, !0);
                var c = new Error("Cannot find module '" + a + "'");
                throw c.code = "MODULE_NOT_FOUND", c
            }
            var h = e[a] = {
                exports: {}
            };
            r[a][0].call(h.exports, function (t) {
                var e = r[a][1][t];
                return o(e ? e : t)
            }, h, h.exports, t, r, e, n)
        }
        return e[a].exports
    }
    for (var u = "function" == typeof require && require, a = 0; a < n.length; a++) o(n[a]);
    return o
}({
    1: [function (t, r, e) {
        "use strict";
        var n = function () {
            var t = $("#text").val();
            if (0 == t.length) return $("#wordCount").html(0), $("#totalChars").html(0), $("#charCount").html(0), void $("#charCountNoSpace").html(0);
            var r = /\s+/gi,
                e = t.trim(),
                n = e.replace(r, " ").split(" ").length,
                o = t.length,
                u = e.length,
                a = t.replace(r, "").length;
            $("#wordCount").html(n), $("#totalChars").html(o), $("#charCount").html(u), $("#charCountNoSpace").html(a)
        };
        $(document).ready(function () {
            var t = $("#text");
            t.change(n), t.keydown(n), t.keypress(n), t.keyup(n), t.blur(n), t.focus(n)
        })
    }, {}]
}, {}, [1]);
