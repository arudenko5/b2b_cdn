"use strict";$(function(){$(".header__burger").click(function(){$(this).toggleClass("header__burger--active"),$("body").toggleClass("scroll-off"),$(".header-nav").toggleClass("header--shown")}),$(".js-nav-link").click(function(){return $(".header__burger").removeClass("header__burger--active"),$("body").removeClass("scroll-off"),$(".header-nav").removeClass("header--shown"),$("html, body").animate({scrollTop:$($(this).attr("href")).offset().top},500),!1}),function(e,o,t){var n=e.querySelector(".header");if(!n)return!0;var s=0,i=0,r=0,a=0,l=0,c=0,d=0;o.addEventListener("scroll",function(){s=n.offsetHeight,r=e.body.offsetHeight,a=o.innerHeight,l=o.pageYOffset,d=c-l,i=parseInt(o.getComputedStyle(n).getPropertyValue("top"))+d,l<=0?n.style.top="0px":d>0?n.style.top=(i>0?0:i)+"px":d<0&&(n.style.top=l+a>=r-s?((i=l+a-r)<0?i:0)+"px":(Math.abs(i)>s?-s:i)+"px"),c=l})}(document,window)}),$(function(){var e=($(".js-price-block"),$(".js-price-reg-btn")),o=$(".js-form-subtitle"),t={},n=$(".js-price-block.selected"),s=null,i=document.body.clientWidth<768,r={width:2e3,height:2e3,top:-1e3,left:-1e3},a=!1,l={free_online:"бесплатную онлайн-трасляцию",live:"живое участие",record:"получение записи"};i&&(s=$(".js-main-reg-block").clone().removeClass("js-main-reg-block").css({display:""}),$(".js-main-reg-block").css({display:"none"}),s.insertAfter(n),a=!0),$(window).on("resize",function(){i=document.body.clientWidth<768,i?($(".js-main-reg-block").css({display:"none"}),a||(s=$(".js-main-reg-block").clone().removeClass("js-main-reg-block").css({display:""}),s.insertAfter(n),a=!0,LanderJS.init())):a&&(a=!1,s.remove(),$(".js-main-reg-block").css({display:""}))}),n.find(".js-price-block-bg").css(r,500),e.on("click",function(){var e=$(this).closest(".js-price-block"),a=e.find(".js-price-block-bg"),c=[a.animate(r,700)];t={top:a.css("top"),left:a.css("left"),width:a.width(),height:a.height()},n&&n.removeClass("selected").find(".js-price-block-bg").stop().animate(t,500),n=e.addClass("selected"),$.when.apply($,c).done(function(){o.text(l[n.data("type")]),i&&(s.remove(),s=$(".js-main-reg-block").clone().removeClass("js-main-reg-block").css({display:""}),s.insertAfter(e),LanderJS.init())})})}),$(function(){ymaps.ready(function(){var e=new ymaps.Map("map_holder",{center:[55.8,37.564061615234365],controls:["zoomControl"],zoom:11},{searchControlProvider:"yandex#search"}),o=new ymaps.Placemark([55.78359956895883,37.71924349999999],{hintContent:"B2B МАРАФОН &mdash; Измайловкий вал, д. 2"},{iconLayout:"default#image",iconImageHref:"../images/map_marker.png",iconImageSize:[50,67],iconImageOffset:[-25,-38]});e.geoObjects.add(o),e.behaviors.disable("scrollZoom")})}),$(function(){$(".js-scroll-btn").on("click",function(){var e=$("#reg");return $("html,body").animate({scrollTop:e.offset().top-90},500),!1})}),$(function(){$(".js-slideable-link").on("click",function(){var e=$(this).siblings(".js-slideable-block"),o=$(this).find("i");return e.slideToggle(),o.toggleClass("fa-angle-down").toggleClass("fa-angle-up"),!1})}),$(function(){var e=function(){var e=$(".speaker"),o=document.body.clientWidth<768,t=null,n=null;e.each(function(){t=$(this).find("button.btn"),n=$(this).find(".speaker__img"),n.attr({"data-toggle":o?"modal":"","data-target":o?t.attr("data-target"):""})})};e(),$(window).on("resize",e)}),$(function(){$("form").on("send-success",function(){$("#reg_modal").modal()}),$(document).on("click",".js-fb-share",function(e){return e.preventDefault(),window.open("http://www.facebook.com/sharer.php?s=100&p[url]="+encodeURIComponent(window.location.origin),"sharer","toolbar=0,status=0,width=700,height=400"),!1}).on("click",".js-vk-share",function(e){return e.preventDefault(),window.open("http://vkontakte.ru/share.php?url="+encodeURIComponent(window.location.origin)+"&description="+encodeURIComponent("Test description"),"sharer","toolbar=0,status=0,width=700,height=400"),!1})});