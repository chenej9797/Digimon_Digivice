$(document).ready(function(){var i=!1,o=1;$(".button-left").click(function(){!1===i?($(".monitor-image").addClass("pixel-1"),$(".sound").trigger("play"),i=!0,o=1):($(".monitor-image").removeClass("pixel-1"),$(".monitor-image").removeClass("pixel-2"),$(".monitor-image").removeClass("pixel-3"),i=!1)}),$(".button-right01").click(function(){if(!0===i){$(".sound").trigger("play");var e=o%3+1,a=(o+2)%3+1;o+=1,$(".monitor-image").removeClass("pixel-"+a),$(".monitor-image").addClass("pixel-"+e),console.log(e+","+a)}})});