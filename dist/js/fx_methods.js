!function(f,e){window.document;var s=f.fn.show,o=f.fn.hide,n=f.fn.toggle;function c(n,t,i,s,o){"function"!=typeof t||o||(o=t,t=e);var c={opacity:i};return s&&(c.scale=s,n.css(f.fx.cssPrefix+"transform-origin","0 0")),n.animate(c,t,null,o)}function i(n,t,i,s){return c(n,t,0,i,function(){o.call(f(this)),s&&s.call(this)})}f.fn.show=function(n,t){return s.call(this),n===e?n=0:this.css("opacity",0),c(this,n,1,"1,1",t)},f.fn.hide=function(n,t){return n===e?o.call(this):i(this,n,"0,0",t)},f.fn.toggle=function(t,i){return t===e||"boolean"==typeof t?n.call(this,t):this.each(function(){var n=f(this);n["none"==n.css("display")?"show":"hide"](t,i)})},f.fn.fadeTo=function(n,t,i){return c(this,n,t,null,i)},f.fn.fadeIn=function(n,t){var i=this.css("opacity");return 0<i?this.css("opacity",0):i=1,s.call(this).fadeTo(n,i,t)},f.fn.fadeOut=function(n,t){return i(this,n,null,t)},f.fn.fadeToggle=function(t,i){return this.each(function(){var n=f(this);n[0==n.css("opacity")||"none"==n.css("display")?"fadeIn":"fadeOut"](t,i)})}}(Zepto);