jQuery(document).ready(function(a){"use strict";function b(a,b){a=escape(a),b=escape(b);var c=document.location.search,d=a+"="+b,e=new RegExp("(&|\\?)"+a+"=[^&]*");return c=c.replace(e,"$1"+d),RegExp.$1||(c+=(c.length>0?"&":"?")+d),c}function d(a){for(var b=a+"=",c=document.cookie.split(";"),d=0;d<c.length;d++){for(var e=c[d];" "==e.charAt(0);)e=e.substring(1);if(0==e.indexOf(b))return decodeURIComponent(e.substring(b.length,e.length))}return""}function e(a){if(void 0!==a.data("hide")){var c=d(yith_woocompare.cookie_name);(c?JSON.parse(c):"").length?a.closest(".yith-woocompare-widget").show():a.closest(".yith-woocompare-widget").hide()}}function f(b){var c=a(".yith-woocompare-widget ul.products-list"),d=c.data("lang");if(c.length){if(b)c.html(b);else{var f={action:yith_woocompare.actionreload,context:"frontend",lang:d};void 0!==a.fn.block&&c.block({message:null,overlayCSS:{background:"#fff url("+yith_woocompare.loader+") no-repeat center",backgroundSize:"20px 20px",opacity:.6}}),a.ajax({type:"post",url:yith_woocompare.ajaxurl.toString().replace("%%endpoint%%",yith_woocompare.actionreload),data:f,success:function(b){void 0!==a.fn.block&&c.unblock(),c.html(b)}})}e(c),a(document).trigger("yith_woocompare_widget_updated")}}a(document).on("click","a.compare:not(.added)",function(b){b.preventDefault();var i,c=a(this),d=a(".yith-woocompare-widget ul.products-list"),e=c.parents("#yith-woocompare-related"),g=!!e.length,h=!!g&&e.data("iframe");i={action:yith_woocompare.actionadd,id:c.data("product_id"),context:"frontend",is_related:g,iframe:h},void 0!==a.fn.block&&(c.block({message:null,overlayCSS:{background:"#fff url("+yith_woocompare.loader+") no-repeat center",backgroundSize:"20px 20px",opacity:.6}}),d.block({message:null,overlayCSS:{background:"#fff url("+yith_woocompare.loader+") no-repeat center",backgroundSize:"20px 20px",opacity:.6}})),a.ajax({type:"post",url:yith_woocompare.ajaxurl.toString().replace("%%endpoint%%",yith_woocompare.actionadd),data:i,dataType:g?"html":"json",success:function(b){if(g){a("#yith-woocompare").replaceWith(a(b).filter("#yith-woocompare")),f(!1),a(document).trigger("yith_woocompare_page_refreshed",[!1])}else c.addClass("added").attr("href",b.table_url).text(yith_woocompare.is_page?yith_woocompare.view_label:yith_woocompare.added_label),f(b.widget_table),"yes"!=yith_woocompare.auto_open||b.only_one||yith_woocompare.is_page||a("body").trigger("yith_woocompare_open_popup",{response:b.table_url,button:c});void 0!==a.fn.block&&(c.unblock(),d.unblock())}})}),yith_woocompare.is_page||a(document).on("click","a.compare.added",function(b){b.preventDefault();var c=this.href;void 0!==c&&a("body").trigger("yith_woocompare_open_popup",{response:c,button:a(this)})}),a("body").on("yith_woocompare_open_popup",function(b,d){var e=d.response;d.button;a(window).width()>=768?(a.colorbox({href:e,iframe:!0,width:"80%",height:"80%",fixed:!0,className:"yith_woocompare_colorbox",onClosed:function(){yith_woocompare.im_in_page?location.reload():f(!1)},onComplete:function(){c(),a.dataTableFunction()}}),a(window).resize(function(){a.colorbox.resize({width:"90%",height:"90%"})})):window.location=yith_woocompare.page_url}),a(document).on("click",".compare-list .remove a, a.yith_woocompare_clear",function(b){b.preventDefault();var c=a(this),d={action:yith_woocompare.actionremove,id:c.data("product_id"),iframe:c.data("iframe"),context:"frontend"};void 0!==a.fn.block&&c.block({message:null,overlayCSS:{background:"#fff url("+yith_woocompare.loader+") no-repeat center",backgroundSize:"20px 20px",opacity:.6}}),a.ajax({type:"post",url:yith_woocompare.ajaxurl.toString().replace("%%endpoint%%",yith_woocompare.actionremove),data:d,dataType:"html",success:function(b){var d=a(b).filter("#yith-woocompare");a("#yith-woocompare").replaceWith(d),a('.compare[data-product_id="'+c.data("product_id")+'"]',window.parent.document).removeClass("added").html(yith_woocompare.button_text),f(!1),a(document).trigger("yith_woocompare_product_removed",[""])}})}),a(".yith-woocompare-open a, a.yith-woocompare-open").on("click",function(c){c.preventDefault(),a("body").trigger("yith_woocompare_open_popup",{response:b("action",yith_woocompare.actionview)+"&iframe=1"})}),a(".yith-woocompare-widget").on("click","a.compare",function(b){yith_woocompare.is_page||(b.preventDefault(),a("body").trigger("yith_woocompare_open_popup",{response:a(this).attr("href")}))}).on("click","li a.remove, a.clear-all",function(b){b.preventDefault();var c=a(".yith-woocompare-widget .products-list").data("lang"),d=a(this),e=d.data("product_id"),g={action:yith_woocompare.actionremove,id:e,context:"frontend",responseType:"product_list",lang:c},h=d.parents(".yith-woocompare-widget").find("ul.products-list");void 0!==a.fn.block&&h.block({message:null,overlayCSS:{background:"#fff url("+yith_woocompare.loader+") no-repeat center",backgroundSize:"20px 20px",opacity:.6}}),a.ajax({type:"post",url:yith_woocompare.ajaxurl.toString().replace("%%endpoint%%",yith_woocompare.actionremove),data:g,dataType:"html",success:function(b){var c=a("#yith-woocompare");c.length&&a.get(window.location,function(b){var d=a(b).find("#yith-woocompare");c.replaceWith(d),a(document).trigger("yith_woocompare_page_refreshed",[d])}),f(b),void 0!==a.fn.block&&h.unblock(),"all"==e?a(".compare.added").removeClass("added").html(yith_woocompare.button_text):a('.compare[data-product_id="'+e+'"]').removeClass("added").html(yith_woocompare.button_text)}})}),a(document).on("click","#yith-woocompare-cat-nav li > a",function(b){b.preventDefault();var c=a(this),d=c.closest("#yith-woocompare"),e=c.data("cat_id"),f=c.closest("#yith-woocompare-cat-nav > ul"),g=f.data("product_ids"),h=f.data("iframe");a.ajax({url:yith_woocompare.ajaxurl.toString().replace("%%endpoint%%",yith_woocompare.actionfilter),data:{action:yith_woocompare.actionfilter,yith_compare_cat:e,yith_compare_prod:g,context:"frontend",iframe:h},dataType:"html",success:function(b){var c=a(b).filter("#yith-woocompare");d.replaceWith(c),a(document).trigger("yith_woocompare_page_refreshed",[c])}})});var c=function(){if(void 0!==a.fn.owlCarousel){var b=a("#yith-woocompare-related"),c=b.find(".related-products"),d=b.find(".related-slider-nav");if(!b.length)return;c.owlCarousel({autoplay:yith_woocompare.autoplay_related,autoplayHoverPause:!0,loop:!0,margin:15,responsiveClass:!0,responsive:{0:{items:2},480:{items:3},768:{items:yith_woocompare.num_related}}}),d.length&&(d.find(".related-slider-nav-prev").click(function(){c.trigger("prev.owl.carousel")}),d.find(".related-slider-nav-next").click(function(){c.trigger("next.owl.carousel")}))}};c(),a(document).on("yith_woocompare_product_removed yith_woocompare_page_refreshed",c),a.dataTableFunction=function(b){var d,c=b&&b.length?b:a(document).find("#yith-woocompare table.compare-list");c.length&&void 0!==a.fn.DataTable&&void 0!==a.fn.imagesLoaded&&c.each(function(){var b=a(this);b.imagesLoaded(function(){d=b.DataTable({info:!1,scrollX:!0,scrollCollapse:!0,paging:!1,ordering:!1,searching:!1,autoWidth:!1,destroy:!0}),new a.fn.dataTable.FixedColumns(d,{leftColumns:yith_woocompare.fixedcolumns})})})},a.dataTableFunction(!1),a(document).on("yith_woocompare_product_removed yith_woocompare_page_refreshed",function(b,c){var d=!!c&&a(c).find("table.compare-list");a.dataTableFunction(d)}),a("body").on("added_to_cart",function(b,c,d,e){a(e).closest("table.compare-list").length&&e.hide()}),e(a(".yith-woocompare-widget ul.products-list"))});