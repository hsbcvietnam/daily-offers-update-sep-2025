/* CSS Document - UPDATE 2019.02.21 */
$(document).ready(function() {
  check_date();
	var header = document.getElementById("chs_tab2_subtab");
	var sticky = 0;

	var translate_index = $("#chs_translate").outerHeight();
	var header_index = $("#chs_header").outerHeight();
	var key_index = $("#chs_key_slider").outerHeight();
	var subtab_index = $("#chs_tab2_subtab").outerHeight();

  var view_tab =  location.hash;
  show_tab("2");
  // // alert(view_tab);
  // if(view_tab == "#uu-dai-moi-ngay" || view_tab == "#daily-offers"){
  //   show_tab(1);
  // }else if(view_tab == "#happy-weekend-vn" || view_tab == "#happy-weekend-en"){
  //   show_tab(2);
  // }else{
  //   show_tab("2");
  // }
  let curDate = new Date();
  let hideDate = new Date('31 Jan 2026 23:59:59')
  // Test Date (active this option to see what page would look like from 1/7 onwards)
  // let showDate = new Date('1 Jan 2024 23:59:59') // Hide this when air
  // Air Date (active this option to see what page would look like from 18/6 to 31/6)
  let showDate = new Date('30 Jun 2024 23:59:59') //Show this when air

    var num_tab_id = location.href;
    if(num_tab_id.indexOf("/uu-dai-moi-ngay/an-uong-giai-tri/vn") !== -1 || num_tab_id.indexOf("/daily-offers/dining-entertainment/en") !== -1){
      show_tab('4');
      subtab_filter('dining', '4');
    }else if(num_tab_id.indexOf("/uu-dai-moi-ngay/iphone17") !== -1 || num_tab_id.indexOf("/daily-offers/iphone17") !== -1 ){
      show_tab('2');
      subtab_filter('iphone', '1');
    }else if(num_tab_id.indexOf("/uu-dai-moi-ngay/mua-sam/vn") !== -1 || num_tab_id.indexOf("/daily-offers/shopping/en") !== -1 ){
      show_tab('5');
      subtab_filter('shopping', '5');
    }else if(num_tab_id.indexOf("/uu-dai-moi-ngay/du-lich/vn") !== -1 || num_tab_id.indexOf("/daily-offers/travel/en") !== -1 ){
      show_tab('6');
      subtab_filter('travel', '6');
    }else if(num_tab_id.indexOf("/uu-dai-moi-ngay/khac/vn") !== -1 || num_tab_id.indexOf("/daily-offers/others/en") !== -1 ){
      show_tab('7');
      subtab_filter('other', '7');
    }else if(num_tab_id.indexOf("/uu-dai-moi-ngay/amthucliveplus") !== -1 || num_tab_id.indexOf("/daily-offers/liveplusdining") !== -1 ){
      show_tab('1');
      subtab_filter('liveplus', '2');
    }else{
      show_tab('3');
    }

  if (curDate.getTime() > hideDate.getTime()) {
    $("#iphone").hide();
  }

  // if (curDate.getTime() < showDate.getTime()) {
  //   document.getElementById('card_image').src = '/projects/daily-offers/images/hsbc/chs_hsbc_cards.png'
  //   if (!(num_tab_id.indexOf("/uu-dai-moi-ngay/amthucliveplus") !== -1 || num_tab_id.indexOf("/daily-offers/liveplusdining") !== -1 )) {
  //     $("#liveplus").hide()
  //   }
  // } else {
  //   document.getElementById('card_image').src = '/projects/daily-offers/images/hsbc/chs_hsbc_cards_liveplus.png'
  // }

  var sticky_index = 0;
  var sum_index = 0;
  $(window).scroll(function() {
		sticky = translate_index + header_index + key_index + 50;

    if ($(window).scrollTop() >= sticky) {
      $("#chs_tab2_subtab").removeClass("sticky").addClass("sticky_show");
      $("#chs_tab2_subtab").css({
        top: translate_index + header_index + 'px',
      });
			$("#chs_tab2_sticky").css({
        marginTop: translate_index + header_index + subtab_index + 'px',
      });
    } else {
      $("div#chs_tab2_subtab").removeClass("sticky").removeClass("sticky_show");
      $("div#chs_tab2_subtab").css({
        top: '0px',
      });
			$("div#chs_tab2_sticky").css({
        marginTop: 0 + 'px',
      });
    }

  })


  function check_date() {
    var date_now = new Date();
    $(".chs_main_offer").find(".chs_main_offer_box").each(function() {
      var date_exp = $(this).find(".chs_main_offer_period").attr("time");
      var d1 = new Date(date_exp);
      var d2 = date_now.getTime();
      if (d2 > d1) {
        $(this).hide();
      }
    });
  }

  function check_date_2() {
    var d1 = new Date();
    var d2 = new Date('1 Oct 2023 00:00:00');
    console.log()
    if (d1.getTime() < d2.getTime()) {
      $("#not_show_before_oct").hide();
    }
  }

  function move_top(){
    if ($("ul.chs_menu_list_desktop li:nth-child(2)").hasClass("active") || $("ul.chs_menu_mobile_list li:nth-child(2)").hasClass("active")) {

      $("div.search-bar").addClass("active");
      $("ul.chs_menu_list_desktop li:last-child").addClass("active")
      $('html, body').animate({
        scrollTop: $("#chs_tab2_subtab").offset().top,
      }, 500);
    }
    else {
      // desktop
      $('html, body').animate({
        scrollTop: $("#chs_tab_1").offset().top  - (header_index + translate_index) + 1,
      });
      $("#chs_tab2_sticky").css({
        marginTop: 0 + 'px',
      });
      // mobile
      $("div.search-bar").removeClass("active");
    }
  }

  var sum_active = 0;
  function show_tab(i) {
    for (var k = 0; k <= 6; k++) {
      $("#chs_tab_" + k).hide();
      $("#chs_key_" + k).hide();
    }
    startSlider();

    // if(i != 2){
    //   i = 2;
    // }

    $("#chs_key_2").show();
    $("#chs_tab_2").show();

    $("ul.chs_tab2_subtab li").removeClass("active");
    $("ul.chs_menu_mobile_list li").removeClass("active");
    $("ul.chs_menu_list_desktop li").removeClass("active");

    $("ul.chs_menu_list_desktop li:nth-child(1)").addClass("active");
    $("ul.chs_menu_mobile_list li:nth-child(1)").addClass("active");
    $("ul.chs_tab2_subtab li:nth-child(" + i + ")").addClass("active");

    sum_active += 1;
    if(sum_active >= 1){
      move_top();
    }

    if ($("ul.chs_menu_mobile_list li:nth-child(4)").hasClass("active")) {
      var sub_menu_index = translate_index + header_index + 11;
      $(".chs_menu_mobile ul.chs_menu_mobile_list>li:nth-child(4):hover ul.chs_sub_menu").css({
        top: sub_menu_index,
      });
    }
  }

  $("div.chs_slider_content_btn.1").click(function() {
    show_tab("1");
  });
  $("div.chs_slider_content_btn.2").click(function() {
    $("ul.chs_tab2_subtab li").removeClass("active");
    show_tab("2");
  });
  //		desktop
  $("ul.chs_menu_list_desktop li").click(function() {
    var tab_id = $(this).index() + 1;
    show_tab(tab_id);
  });
  //		mobile
  $("ul.chs_menu_mobile_list li").click(function() {
    var tab_id = $(this).index() + 1;
    show_tab(tab_id);
  });

  function subtab_filter(i, j) {
    $("ul.chs_tab2_subtab li").removeClass("active");
    $("ul.chs_tab2_subtab li:nth-child(" + j + ")").addClass("active");

    var category = "";
    $("#chs_tab_2 .chs_main_offer_box").each(function() {
      category = $(this).find(".chs_main_offer_category").attr("category");
      if (category == i) {
        // $(this).show();
      } else if (i == "all") {
        // $(".chs_main_offer_box").show();
      } else {
        $(this).hide();
      }
    });
    var translate_index = $("#chs_translate").outerHeight();
    var header_index = $("#chs_header").outerHeight();

    check_date();
    check_date_2();
    $('html, body').animate({
      scrollTop: $("#chs_tab2_subtab").offset().top - (header_index + translate_index),
      scrollTop: $("#chs_tab2_sticky").offset().top - (header_index + translate_index),
    }, 1000);
  }
  //		tab 2 - subtab
  $("ul.chs_tab2_subtab li").click(function() {
    var tab_id = $(this).index() + 1;
    subtab_filter($(this).attr("category"), tab_id);
  });
  $(".chs_main_offer_category").click(function() {
    var x = $(this).attr("category");
    switch (x) {
      case "all":
        x = 1;
        break;
      case "dining":
        x = 2;
        break;
      case "shopping":
        x = 3;
        break;
      case "travel":
        x = 4;
        break;
      case "other":
        x = 5;
        break;
      default:
        x = 1;
    }
    subtab_filter($(this).attr("category"), x);
  })
  var translate_index = $("#chs_translate").outerHeight();
  var header_index = $("#chs_header").outerHeight();
  $(".chs_links_top_1").click(function() {

    $('html, body').animate({
      scrollTop: $("#chs_tab1_sub").offset().top - (header_index + translate_index),
    }, 500);
  })
  $(".chs_links_top_2").click(function() {
    $('html, body').animate({
      scrollTop: $("#chs_tab2_subtab").offset().top - (header_index + translate_index),
    }, 500);
  })

  //		START KEY SLIDER 1
  var slidesWrapperWidth, slideWidth, slideNumber, sliderInterval;
  var pause = 5000;
  var transition = 1000;

  function refreshVars() {
    slideNumber = $('.key_slides_wrapper li').length;
    slideWidth = $('#chs_key_slider').outerWidth();
    slideWidth = $('#chs_key_slider_1').outerWidth();
    slidesWrapperWidth = slideWidth * slideNumber;

    $('.key_slides_wrapper').css("width", slidesWrapperWidth + 'px');
    $('ul.key_slides_wrapper li').css('width', slideWidth + 'px');
    $('ul.key_slides_wrapper').css('left', -slideWidth);
  } //end refreshVars

  refreshVars();
  $(window).resize(refreshVars);


  $('.slider-wrapper li:last-child').prependTo('.slider-wrapper');

  function ShowNextSlide() {
    $('.key_slides_wrapper').animate({
      marginLeft: -slideWidth
    }, transition, function() {
      $('.key_slides_wrapper li:first-child').appendTo('.key_slides_wrapper');
      $('.key_slides_wrapper').css('marginLeft', '');
    }); //end animate
  } //end show next slide

  function ShowPrevSlide() {
    $('.key_slides_wrapper').animate({
      marginLeft: +slideWidth
    }, transition, function() {
      $('.key_slides_wrapper li:last-child').prependTo('.key_slides_wrapper');
      $('.key_slides_wrapper').css('marginLeft', '');
    }); //end animate
  } //end show prev slide

  $('.slide-right').on('click', ShowNextSlide);
  $('.slide-left').on('click', ShowPrevSlide);

  //autoplay
  function startSlider() {
    sliderInterval = setInterval(ShowNextSlide, 5000)
  }
  startSlider();
  $('#chs_key_slider').mouseenter(function() {
    clearInterval(sliderInterval);
  });
  $('#chs_key_slider').mouseleave(startSlider);

  $('#chs_key_slider_1').mouseenter(function() {
    clearInterval(sliderInterval);
  });
  $('#chs_key_slider_1').mouseleave(startSlider);


  $("#vietnam-link").click(function() {
    var headerHeight = $('#chs_header_container').outerHeight();
    var subTabHeight = $('#chs_tab2_subtab').outerHeight();
    var extraPadding = 100;
    $('html, body').animate({
      scrollTop: $("#red_bar").offset().top - (headerHeight + subTabHeight + extraPadding),
    }, 500);
  })

});
