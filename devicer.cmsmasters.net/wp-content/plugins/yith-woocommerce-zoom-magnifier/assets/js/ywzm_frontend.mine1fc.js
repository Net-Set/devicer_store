jQuery(function(r){var i,t,o,a,e,s,l,m,d,c,g=r(".images"),n=r(".yith_magnifier_zoom"),u=r(".yith_magnifier_zoom img").first(),f=g.find(".yith_magnifier_zoom").attr("href"),v=g.find(".yith_magnifier_zoom img").attr("src"),_=g.find(".thumbnails");if("undefined"==typeof yith_magnifier_options)return!1;g.yith_magnifier(yith_magnifier_options),r(document).on("found_variation","form.variations_form",function(i,e){var r=e.image_magnifier||f,t=v;e.image.src&&(t=e.image.src),n.attr("href",r),u.attr("src",t),u.attr("srcset",t),u.attr("src-orig",t),g.data("yith_magnifier")&&g.yith_magnifier("destroy"),g.yith_magnifier(yith_magnifier_options)}).on("reset_image",function(i){n.attr("href",f),u.attr("src",v),u.attr("srcset",v),u.attr("src-orig",v),g.find(".thumbnails").replaceWith(_),g.data("yith_magnifier")&&g.yith_magnifier("destroy"),g.yith_magnifier(yith_magnifier_options)}),r(".single-product.woocommerce div.product div.images ul.yith_magnifier_gallery").length&&(r("form.variations_form .variations select").trigger("change"),r(".single-product.woocommerce div.product div.images div.thumbnails").css("width",r(".single-product.woocommerce div.product div.images div.thumbnails").width()),t=r(".single-product.woocommerce div.product div.images ul.yith_magnifier_gallery").data("circular"),o=r(".single-product.woocommerce div.product div.images ul.yith_magnifier_gallery").data("columns"),a=r(".single-product.woocommerce div.product div.images ul.yith_magnifier_gallery").data("slider_infinite"),e=r(".single-product.woocommerce div.product div.images .yith_magnifier_gallery li").width(),s=r(".single-product.woocommerce div.product div.images .yith_magnifier_gallery li").css("margin-left"),i=void 0===s?0:s.split("px").shift(),m=0,(l=[]).push(m),r(".single-product.woocommerce div.product div.images ul.yith_magnifier_gallery li").each(function(){r(this).css("width",e+"px"),r(this).css("margin-left",s),r(this).css("margin-right",s),r(this).show(),m+=2*i+e,l.push(m),0}),d=m,r(".single-product.woocommerce div.product div.images .yith_magnifier_gallery").css("width",d+"px"),r("#slider-next").css("top","50%"),r("#slider-next").css("transform","translateY( -50% )"),r("#slider-prev").css("top","50%"),r("#slider-prev").css("transform","translateY( -50% )"),c=0,r("body").on("click","#slider-next",function(){if(r(".single-product.woocommerce div.product div.images .yith_magnifier_gallery li.last").next().is("li")){c++,r(".single-product.woocommerce div.product div.images ul.yith_magnifier_gallery").animate({marginLeft:"-"+l[c]+"px"});var i=r(".single-product.woocommerce div.product div.images .yith_magnifier_gallery li.first").next();r(".single-product.woocommerce div.product div.images .yith_magnifier_gallery li.first").removeClass("first"),i.addClass("first"),i=r(".single-product.woocommerce div.product div.images .yith_magnifier_gallery li.last").next(),r(".single-product.woocommerce div.product div.images .yith_magnifier_gallery li.last").removeClass("last"),i.addClass("last")}else if("yes"!=t||r(".single-product.woocommerce div.product div.images ul.yith_magnifier_gallery").is(":animated")){if("yes"==a&&!r(".single-product.woocommerce div.product div.images ul.yith_magnifier_gallery").is(":animated")){for(;r(".single-product.woocommerce div.product div.images .yith_magnifier_gallery li.first").prev().is("li");){var e=r(".single-product.woocommerce div.product div.images .yith_magnifier_gallery li.first").prev();r(".single-product.woocommerce div.product div.images .yith_magnifier_gallery li.first").removeClass("first"),e.addClass("first"),e=r(".single-product.woocommerce div.product div.images .yith_magnifier_gallery li.last").prev(),r(".single-product.woocommerce div.product div.images .yith_magnifier_gallery li.last").removeClass("last"),e.addClass("last")}c=0,r(".single-product.woocommerce div.product div.images ul.yith_magnifier_gallery").animate({marginLeft:"-"+l[c]+"px"})}}else{c--,r(".single-product.woocommerce div.product div.images ul.yith_magnifier_gallery").css("margin-left","-"+l[c]+"px");i=r(".single-product.woocommerce div.product div.images .yith_magnifier_gallery li").first(),i=(r(".single-product.woocommerce div.product div.images .yith_magnifier_gallery li.last").after(i),r(".single-product.woocommerce div.product div.images .yith_magnifier_gallery li.last").removeClass("last"),i.addClass("last"),r(".single-product.woocommerce div.product div.images .yith_magnifier_gallery li.first").next());r(".single-product.woocommerce div.product div.images .yith_magnifier_gallery li.first").removeClass("first"),i.addClass("first"),c++,r(".single-product.woocommerce div.product div.images ul.yith_magnifier_gallery").animate({marginLeft:"-"+l[c]+"px"})}}),r("body").on("click","#slider-prev",function(){if(r(".single-product.woocommerce div.product div.images .yith_magnifier_gallery li.first").prev().is("li")){c--,r(".single-product.woocommerce div.product div.images ul.yith_magnifier_gallery").animate({marginLeft:"-"+l[c]+"px"});var i=r(".single-product.woocommerce div.product div.images .yith_magnifier_gallery li.first").prev();r(".single-product.woocommerce div.product div.images .yith_magnifier_gallery li.first").removeClass("first"),i.addClass("first"),i=r(".single-product.woocommerce div.product div.images .yith_magnifier_gallery li.last").prev(),r(".single-product.woocommerce div.product div.images .yith_magnifier_gallery li.last").removeClass("last"),i.addClass("last")}else if("yes"!=t||r(".single-product.woocommerce div.product div.images ul.yith_magnifier_gallery").is(":animated")){if("yes"==a&&!r(".single-product.woocommerce div.product div.images ul.yith_magnifier_gallery").is(":animated")){for(;r(".single-product.woocommerce div.product div.images .yith_magnifier_gallery li.last").next().is("li");){var e=r(".single-product.woocommerce div.product div.images .yith_magnifier_gallery li.first").next();r(".single-product.woocommerce div.product div.images .yith_magnifier_gallery li.first").removeClass("first"),e.addClass("first"),e=r(".single-product.woocommerce div.product div.images .yith_magnifier_gallery li.last").next(),r(".single-product.woocommerce div.product div.images .yith_magnifier_gallery li.last").removeClass("last"),e.addClass("last")}c=l.length-1-o,r(".single-product.woocommerce div.product div.images ul.yith_magnifier_gallery").animate({marginLeft:"-"+l[c]+"px"})}}else{c++,r(".single-product.woocommerce div.product div.images ul.yith_magnifier_gallery").css("margin-left","-"+l[c]+"px");i=r(".single-product.woocommerce div.product div.images .yith_magnifier_gallery li").last(),i=(r(".single-product.woocommerce div.product div.images .yith_magnifier_gallery li.first").before(i),r(".single-product.woocommerce div.product div.images .yith_magnifier_gallery li.first").removeClass("first"),i.addClass("first"),r(".single-product.woocommerce div.product div.images .yith_magnifier_gallery li.last").prev());r(".single-product.woocommerce div.product div.images .yith_magnifier_gallery li.last").removeClass("last"),i.addClass("last"),c--,r(".single-product.woocommerce div.product div.images ul.yith_magnifier_gallery").animate({marginLeft:"-"+l[c]+"px"})}}),"yes"==r(".single-product.woocommerce div.product div.images ul.yith_magnifier_gallery").data("auto_carousel")&&setTimeout(function p(){r("#slider-next").click(),setTimeout(p,3e3)},3e3),r(document).on("mouseover",".yith_slider_arrow",function(i){r(this).find("path").css("fill",ywzm_data.slider_colors_hover_array.arrow)}),r(document).on("mouseout",".yith_slider_arrow",function(i){r(this).find("path").css("fill",ywzm_data.slider_colors_array.arrow)}))});