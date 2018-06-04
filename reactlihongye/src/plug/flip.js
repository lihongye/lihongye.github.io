(function() {
    var s = function(e, f) {
      var n = this;
      var g = {
        container: e,
        width: 300,
        height: 200,
        sources: [],
        type: "flip"
      };
      var h = null;
      var i = null;
      var j = 0;
      f = f || {};
      var k = {};
      for (var l in f) {
        if (typeof f[l] === 'object') {
          k[l] = {};
          for (var m in f[l]) {
            k[l][m] = f[l][m]
          }
        } else {
          k[l] = f[l]
        }
      };
      for (var o in g) {
        if (typeof f[o] === 'object') {
          for (var p in g[o]) {
            if (typeof f[o][p] === 'undefined') {
              f[o][p] = g[o][p]
            }
          }
        } else if (typeof f[o] === 'undefined') {
          f[o] = g[o]
        }
      };
      n.params = f;
      n.originParams = k;
      var q = function(a, b, c, d) {
        if (a.addEventListener) {
          a.addEventListener(b, c, d)
        } else if (a.attachEvent) {
          a.attach("on" + b, c)
        }
      };
      var r = function() {
        i = document.querySelector(n.params.container);
        n.iContainer = i;
        h = document.createElement("div");
        n.iWrapper = h;
        if (i != null) {
          i.style.width = n.params.width + "px";
          i.style.height = n.params.height + "px";
          h.style.width = n.params.width + "px";
          h.style.height = n.params.height + "px";
          h.style.position = "absolute";
          h.style.top = "0";
          h.style.left = "0";
          h.style.background = "url(" + n.params.sources[j] + ") 0px 0px no-repeat";
          h.style.backgroundSize = n.params.width + "px " + n.params.height + "px";
          i.appendChild(h)
        }
        n.lock = true
      };
      r();
      return n
    };
    s.prototype = {
      activeIndex: 0,
      animate: function(b, c, d) {
        var e = {};
        var a = 0;
        clearInterval(b.timer);
        b.timer = setInterval(function() {
          e["x"] = (a += 6);
          if (c) c.call(b, e);
          if (e["x"] == 180) {
            clearInterval(b.timer);
            if (d) d.call(b)
          }
        },
        30)
      },
      flip: function() {
        var n = this;
        var e = n.params.sources[n.activeIndex];
        if (!n.lock) return;
        n.lock = false;
        n.iWrapper.style.background = 'none';
        n.iWrapper.innerHTML = "";
        var R = 6;
        var C = 3;
        var f = R * C;
        for (var i = 0; i < C; i++) {
          for (var j = 0; j < R; j++) {
            var g = Math.ceil(n.params.width / C) * i;
            var h = Math.ceil(n.params.height / R) * j;
            var k = document.createElement("div");
            k.className = "flip";
            k.style.background = "url(" + e + ") -" + g + "px -" + h + "px no-repeat";
            k.style.backgroundSize = n.params.width + "px " + n.params.height + "px";
            k.style.width = Math.ceil(n.params.width / C) + "px";
            k.style.height = Math.ceil(n.params.height / R) + "px";
            k.style.position = "absolute";
            k.style.left = g + "px";
            k.style.top = h + "px"; (function(b, c, d) {
              b.change = false;
              setTimeout(function() {
                n.animate(b,
                function(a) {
                  if (a.x > 90 && !b.change) {
                    b.style.background = "url(" + n.params.sources[n.next()] + ") -" + c + "px -" + d + "px no-repeat";
                    b.style.backgroundSize = n.params.width + "px " + n.params.height + "px"
                  }
                  if (a.x > 90) {
                    b.style.transform = "perspective(500px) rotateY(" + a.x + "deg) scale(-1, 1)"
                  } else {
                    b.style.transform = "perspective(500px) rotateY(" + a.x + "deg)"
                  }
                },
                function() {
                  if ((--f) == 0) {
                    n.activeIndex = n.next();
                    n.lock = true
                  }
                })
              },
              (i + j) * 200)
            })(k, g, h);
            n.iWrapper.appendChild(k);
            k = null
          }
        }
      },
      next: function() {
        var n = this;
        return (n.activeIndex + 1) % n.params.sources.length
      }
    };
    window.NSlide = s
  })()