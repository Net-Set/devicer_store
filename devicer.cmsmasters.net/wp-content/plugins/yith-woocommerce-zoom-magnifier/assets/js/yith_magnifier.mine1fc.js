!function(g,i){"use strict";var u,p;g.fn.imagesLoaded===i&&(u=jQuery,p="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",u.fn.imagesLoaded=function(e){var o=this,n=u.isFunction(u.Deferred)?u.Deferred():0,a=u.isFunction(n.notify),s=o.find("img").add(o.filter("img")),r=[],h=[],m=[];function l(){var t=u(h),i=u(m);n&&(m.length?n.reject(s,t,i):n.resolve(s)),u.isFunction(e)&&e.call(o,s,t,i)}function c(t){d(t.target,"error"===t.type)}function d(t,i){t.src!==p&&-1===u.inArray(t,r)&&(r.push(t),(i?m:h).push(t),u.data(t,"imagesLoaded",{isBroken:i,src:t.src}),a&&n.notifyWith(u(t),[i,s,u(h),u(m)]),s.length===r.length&&(setTimeout(l),s.unbind(".imagesLoaded",c)))}return u.isPlainObject(e)&&u.each(e,function(t,i){"callback"===t?e=i:n&&n[t](i)}),s.length?s.bind("load.imagesLoaded error.imagesLoaded",c).each(function(t,i){var e=i.src,o=u.data(i,"imagesLoaded");o&&o.src===e?d(i,o.isBroken):i.complete&&void 0!==i.naturalWidth?d(i,0===i.naturalWidth||0===i.naturalHeight):(i.readyState||i.complete)&&(i.src=p,i.src=e)}):l(),n?n.promise(o):o}),g.yith_magnifier=function(t,i){this.t=i,this.element=g(i),this._init(t)},g.yith_magnifier.defaults={zoomWidth:"auto",zoomHeight:"auto",position:"right",tint:!1,tintOpacity:.5,lensOpacity:.5,softFocus:!1,smoothMove:3,showTitle:!0,titleOpacity:.5,adjustX:0,adjustY:0,phoneBehavior:"inside",loadingLabel:"Loading...",enableSlider:!0,slider:"carouFredSel",sliderOptions:{},from_gallery:"no",onLoad:function(){return!1},onEnter:function(){return!1},onLeave:function(){return!1},onMove:function(){return!1},onClick:function(){return!1},elements:{zoom:g(".yith_magnifier_zoom"),zoomImage:g(".yith_magnifier_zoom img").first(),gallery:g(".yith_magnifier_gallery li a")}},g.yith_magnifier.prototype={_init:function(t){var e=this;g(document).trigger("yith_magnifier_before_init"),g.each(g.yith_magnifier.defaults.elements,function(t,i){g.yith_magnifier.defaults.elements[t]=g(i,e)}),e.options=g.extend(!0,{},g.yith_magnifier.defaults,t),e.isPhone=e._isPhone(),e._loading(),e.options.onLoad(),e._initZoom(),e._initGallery(),g(document).trigger("yith_magnifier_after_init")},_initGallery:function(){var i=this,t=i.options.elements,e=t.gallery,o=t.zoom,n=t.zoomImage;0<e.length?(e.on("click",function(t){t.preventDefault(),yith_wc_zoom_magnifier_storage_object.stop_immediate_propagation&&t.stopImmediatePropagation(),"free"==g("#yith_wczm_traffic_light").val()&&(g(".yith_magnifier_gallery  .yith_magnifier_thumbnail.active-thumbnail").removeClass("active-thumbnail"),g(".yith_magnifier_gallery  .yith_magnifier_thumbnail.active-thumbnail").addClass("inactive-thumbnail"),g(this).removeClass("inactive-thumbnail"),g(this).addClass("active-thumbnail"),g(this).parent().removeClass("inactive-thumbnail"),g(this).parent().addClass("active-thumbnail"),i.options.from_gallery="yes",t=g(this),i.destroy(),o.attr("href",this.href),n.attr("src",t.data("small")).attr("srcset",t.data("small")).attr("src-orig",t.data("small")).attr("title","").attr("title",t.attr("title")),g.data(i.t,"yith_magnifier",new g.yith_magnifier(i.options,i.element)))}),i.options.enableSlider&&e.closest("ul").trigger("yith_magnifier_slider_destroy")):e.on("click",function(t){return t.preventDefault(),!1})},_loading:function(){var t;this.options.disableRightClick&&g(document).on("contextmenu",function(t){return!1}),this.mouseTrap===i&&(t=this.options.elements.zoom.width(),this.options.loadingLabel&&g('<div class="yith_magnifier_loading">'+this.options.loadingLabel+"</div>").css({width:t,"text-align":"center",opacity:.5}).appendTo(this.options.elements.zoom.parent()))},_initZoom:function(){if("free"==g("#yith_wczm_traffic_light").val()){g("#yith_wczm_traffic_light").val("blocked");var i=this,t=(i.zoom=i.options.elements.zoom,i.zoomImage=i.options.elements.zoomImage,"yith_magnifier_zoom_wrap");if(i.options.zoom_wrap_additional_css){if(g("."+t).length)return;t+=" "+i.options.zoom_wrap_additional_css}i.zoom.wrap('<div class="'+t+'"></div>'),i.IMG_zoomImage=new Image;t=g(".woocommerce-variation-add-to-cart .variation_id").val();g.isNumeric(t)&&0!=t&&"no"==i.options.from_gallery?g.ajax({data:{action:"yith_wc_zoom_magnifier_get_main_image",product_id:t,context:"frontend"},url:yith_wc_zoom_magnifier_storage_object.ajax_url,type:"post",error:function(t){console.log("ERROR - Yith_WC_Zoom_Magnifier"),console.log(t),g("#yith_wczm_traffic_light").val("free")},success:function(t){i.zoom.attr("href",t.url),i.IMG_zoomImage.src=t.url,i.IMG_smallImage=new Image,i.IMG_smallImage.src=i.zoomImage.attr("src"),t.gallery&&(g(".yith_magnifier_gallery").length?g(".yith_magnifier_gallery").closest(".thumbnails").replaceWith(t.gallery):g(".images").append(t.gallery),i.options.elements.gallery=g(".yith_magnifier_gallery li a")),g.browser&&g.browser.msie&&8==g.browser.version?g(i.IMG_zoomImage).load(function(){i._initGallery(),i._initTrap()}):g([i.IMG_zoomImage,i.IMG_smallImage]).imagesLoaded(function(){i._initGallery(),i._initTrap()}),g(document).on("click","a.yith_expand",function(t){t.preventDefault(),g().prettyPhoto({social_tools:!1,theme:"pp_woocommerce",horizontal_padding:20,opacity:.8,deeplinking:!1,callback:function(){g(".yith_expand").css("display","inline")}}),g.prettyPhoto.open(i.zoom[0].href,"",""),g(".yith_expand").css("display","none"),g(".pp_woocommerce .ppt").css({height:0,marginBottom:0})}),g(document).trigger("yith_magnifier_after_init_zoom"),g("#yith_wczm_traffic_light").val("free")}}):(i.IMG_zoomImage.src=i.zoom.attr("href"),i.IMG_smallImage=new Image,i.IMG_smallImage.src=i.zoomImage.attr("src"),g.browser&&g.browser.msie&&8==g.browser.version?g(i.IMG_zoomImage).load(function(){i._initTrap()}):g([i.IMG_zoomImage,i.IMG_smallImage]).imagesLoaded(function(){i._initTrap()}),g(document).on("click","a.yith_expand",function(t){t.preventDefault(),g().prettyPhoto({social_tools:!1,theme:"pp_woocommerce",horizontal_padding:20,opacity:.8,deeplinking:!1,callback:function(){g(".yith_expand").css("display","inline")}}),g.prettyPhoto.open(i.zoom[0].href,"",""),g(".yith_expand").css("display","none"),g(".pp_woocommerce .ppt").css({height:0,marginBottom:0})}),g(document).trigger("yith_magnifier_after_init_zoom"),g("#yith_wczm_traffic_light").val("free"))}},_initTrap:function(){var h,m=this,l=m.IMG_zoomImage,c=(m.IMG_smallImage,m.mx=0,m.my=0,m.controlTimer=0,m.lens=null,m.tint=null,m.softFocus=null,m.zoomDiv=null,m.cw=0,m.ch=0,m.zw=0,m.destU=0,m.destV=0,m.currU=0,m.currV=0,m.mouseTrap=null,m.options.elements.zoom),d=m.options.elements.zoomImage;g(".yith_magnifier_loading").remove(),this.element.find(".yith_magnifier_mousetrap")&&this.element.find(".yith_magnifier_mousetrap").remove(),this.mouseTrap=g('<div class="yith_magnifier_mousetrap pp_woocommerce" />').css({width:yith_wc_zoom_magnifier_storage_object.mouse_trap_width,height:yith_wc_zoom_magnifier_storage_object.mouse_trap_height,top:0,left:0}).appendTo(c.parent()),"undefined"!=typeof ywzm_data&&(g('<a href="#" class="yith_expand" style="display: inline;"></a>').appendTo(this.mouseTrap),g(".expand-button-hidden").clone().appendTo(g(".yith_expand")),g(".yith_magnifier_mousetrap .yith_expand .expand-button-hidden").show()),m.isPhone&&"disable"==m.options.phoneBehavior||(h="ontouchstart"in document.documentElement,this.mouseTrap.on("touchmove mousemove",this,function(t){m.options.onMove(),m.mx=("undefined"!=typeof t.originalEvent.touches?t.originalEvent.touches[0]:t).pageX,m.my=("undefined"!=typeof t.originalEvent.touches?t.originalEvent.touches[0]:t).pageY}).on("touchend mouseleave",this,function(t){return clearTimeout(m.controlTimer),m.lens&&m.lens.fadeOut(299),m.tint&&m.tint.fadeOut(299),m.softFocus&&m.softFocus.fadeOut(299),m.zoomDiv.fadeOut(300,function(){m._onLeave()}),!1}).on("touchstart click",this,function(t){m.options.onClick()}).on("touchstart mouseenter",this,function(t){if("free"==g("#yith_wczm_traffic_light").val()){m.options.onEnter(),h&&t.preventDefault(),m.mx=("undefined"!=typeof t.originalEvent.touches?t.originalEvent.touches[0]:t).pageX,m.my=("undefined"!=typeof t.originalEvent.touches?t.originalEvent.touches[0]:t).pageY,m.zw=t.data,m.zoomDiv&&(m.zoomDiv.stop(!0,!1),m.zoomDiv.remove());var i=m.options.adjustX,e=m.options.adjustY,o=d.outerWidth(),n=d.outerHeight(),a=m.options.zoomWidth,s=m.options.zoomHeight,r=("auto"==m.options.zoomWidth&&(a=o),"auto"==m.options.zoomHeight&&(s=n),c.parent());switch(m.options.position){case"top":e-=s;break;case"right":i+=o;break;case"bottom":e+=n;break;case"left":i-=a;break;case"inside":a=o,s=n;break;default:(r=g("#"+m.options.position)).length?(a=r.innerWidth(),s=r.innerHeight()):(r=c,i+=o,e+=n)}m.isPhone&&"inside"==m.options.phoneBehavior&&(a=o,s=n,e=i=0),m.zoomDiv=g('<div class="yith_magnifier_zoom_magnifier" />').css({left:i,top:e,width:a,height:s,"background-repeat":"no-repeat",backgroundImage:"url("+l.src+")"}).appendTo(r),d.attr("title")&&m.options.showTitle&&g('<div class="yith_magnifier_title">'+d.attr("title")+"</div>").appendTo(m.zoomDiv),!m.isPhone||"disable"!=m.options.phoneBehavior?m.zoomDiv.fadeIn(500):m.lens.fadeOut(299),m.lens&&(m.lens.remove(),m.lens=null),l.width<=1?m.cw=d.outerWidth()/l.naturalWidth*m.zoomDiv.width():m.cw=d.outerWidth()/l.width*m.zoomDiv.width(),l.height<=1?m.ch=d.outerHeight()/l.naturalHeight*m.zoomDiv.height():m.ch=d.outerHeight()/l.height*m.zoomDiv.height(),m.lens=g('<div class="yith_magnifier_lens" />').css({width:m.cw,height:m.ch}).appendTo(c);t=!1;m.options.tint&&(m.tint=g("<div />").css({display:"none",position:"absolute",left:0,top:0,width:d.outerWidth(),height:d.outerHeight(),backgroundColor:m.options.tint,opacity:m.options.tintOpacity}).appendTo(c),m.lens.append(g("<img />",{src:d.attr("src")})),t=!0,m.tint.fadeIn(500)),m.options.softFocus&&(m.softFocus=g("<div />").css({position:"absolute",display:"none",top:"1px",left:"1px",width:d.outerWidth(),height:d.outerHeight(),opacity:.5}).appendTo(c),m.softFocus.append(g("<img />",{src:d.attr("src")})),0==m.lens.find("img").length&&m.lens.append(g("<img />",{src:d.attr("src")})),t=!0,m.softFocus.fadeIn(500)),t||m.lens.css("opacity",m.options.lensOpacity),"inside"!==m.options.position&&m.lens.fadeIn(500),m.zw._controlLoop()}}))},_controlLoop:function(){var t,i,e=this;this.lens&&(t=this.mx-this.zoomImage.offset().left-.5*this.cw>>0,i=this.my-this.zoomImage.offset().top-.5*this.ch>>0,t<0?t=0:t>this.zoomImage.outerWidth()-this.cw&&(t=this.zoomImage.outerWidth()-this.cw),i<0?i=0:i>this.zoomImage.outerHeight()-this.ch&&(i=this.zoomImage.outerHeight()-this.ch),this.lens.css({left:t-2,top:i-1}),this.lens.find("img").css({width:this.zoomImage.outerWidth(),height:this.zoomImage.outerHeight(),marginLeft:-t+"px ",marginTop:-i+"px"}),this.IMG_zoomImage.width<=1?this.destU=t/this.zoomImage.outerWidth()*this.IMG_zoomImage.naturalWidth>>0:this.destU=t/this.zoomImage.outerWidth()*this.IMG_zoomImage.width>>0,this.IMG_zoomImage.height<=1?this.destV=i/this.zoomImage.outerHeight()*this.IMG_zoomImage.naturalHeight>>0:this.destV=i/this.zoomImage.outerHeight()*this.IMG_zoomImage.height>>0,this.currU+=(this.destU-this.currU)/this.options.smoothMove,this.currV+=(this.destV-this.currV)/this.options.smoothMove,this.zoomDiv.css("background-position",-(this.currU>>0)+"px "+-(this.currV>>0)+"px")),this.controlTimer=setTimeout(function(){e._controlLoop()},30)},_onLeave:function(){this.options.onLeave(),this.zoomDiv&&(this.zoomDiv.remove(),this.zoomDiv=null),this._removeElements()},_removeElements:function(){this.lens&&(this.lens.remove(),this.lens=null),this.tint&&(this.tint.remove(),this.tint=null),this.softFocus&&(this.softFocus.remove(),this.softFocus=null),0<this.element.find(".yith_magnifier_loading").length&&this.element.find(".yith_magnifier_loading").remove()},_isPhone:function(){var t=navigator.userAgent.toLowerCase();return t.match(/iphone/i)||t.match(/ipod/i)||t.match(/android/i)},destroy:function(){this.zoom&&this.zoom.unwrap(),this.mouseTrap&&(this.mouseTrap.unbind(),this.mouseTrap.remove(),this.mouseTrap=null),this.zoomDiv&&(this.zoomDiv.remove(),this.zoomDiv=null),this.options.disableRightClick&&g(document).unbind(),this._removeElements(),this.options.elements.gallery.unbind(),this.element.removeData("yith_magnifier")}},g.fn.yith_magnifier=function(i){var e;return"string"==typeof i?(e=Array.prototype.slice.call(arguments,1),this.each(function(){var t=g.data(this,"yith_magnifier");t?g.isFunction(t[i])&&"_"!==i.charAt(0)?t[i].apply(t,e):g.error("no such method '"+i+"' for yith_magnifier instance"):g.error("cannot call methods on yith_magnifier prior to initialization; attempted to call method '"+i+"'")})):this.each(function(){g.data(this,"yith_magnifier")?g.error("yith_magnifier already istantiated."):g.data(this,"yith_magnifier",new g.yith_magnifier(i,this))}),this}}((window,jQuery));