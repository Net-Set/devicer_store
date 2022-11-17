/**
 * @package 	WordPress
 * @subpackage 	Devicer
 * @version		1.0.0
 */


/*!
 * DebouncedResize Function
 */
(function(e){"use strict";var t=e.event,n,r;n=t.special.debouncedresize={setup:function(){e(this).on("resize",n.handler)},teardown:function(){e(this).off("resize",n.handler)},handler:function(e,i){var s=this,o=arguments,u=function(){e.type="debouncedresize";t.dispatch.apply(s,o)};if(r){clearTimeout(r)}i?u():r=setTimeout(u(),n.threshold)},threshold:150}})(jQuery);

