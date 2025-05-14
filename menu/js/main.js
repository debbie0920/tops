$(document).ready(function () {
	//$(window).load(function() {

	var tl = new TimelineLite({});
	var query = Modernizr.mq('(min-width: 900px)');



	//resize
	//----------------------------------------------------------------------
	list_dropdown_mobile();
	$(window).on("resize", function () {
		// 在 mobile 時加上 clasaName m
		list_dropdown_mobile();

	})




	// menu
	//--------------------------------------------------------------------------

	var list_m365 = $(".menu .m365");
	var list_product = $(".menu .product");
	list_m365.on("click", list_dropdown_click);
	list_product.on("click", list_dropdown_click);
	
//	list_m365.hover(function(){
//		
//		$(this).parent().find(".dropdown").slideDown(500);
//	})

	// 在 mobile 時加上 clasaName m
	function list_dropdown_mobile() {
		if (Modernizr.mq('(max-width: 900px)')) {
			$(".menu .m365").addClass("m")
			$(".menu .product").addClass("m")

		} else {
			$(".menu .m365").removeClass("m")
			$(".menu .product").removeClass("m")
			$(".dropdown").attr('style','');
		}
	}

	//open m365 product - mobile
	function list_dropdown_click() {
		//如果有 m 下拉
		if ($(this).hasClass("m")) {
			if (!$(this).hasClass("show")) {
				// do not have show
				$(this).find(".dropdown").slideDown(500);
				$(this).addClass("show");
				$(this).siblings().removeClass("show")
				$(this).siblings().find(".dropdown").slideUp(500);
				console.log("click_open")
			} else {
				// have show
				$(this).find(".dropdown").slideUp(500);
				$(this).removeClass("show");
				console.log("click_close")
			}
		}
		//如果沒有 M
		else{
			
		}

	}

	//點選漢堡選單
	//-------------------------------------------------------------------------
	var line1 = $(".menu_btn span:nth-child(1)");
	var line2 = $(".menu_btn span:nth-child(2)");
	var line3 = $(".menu_btn span:nth-child(3)");

	var menu_btn = $(".menu_btn");
	var menu_list = $(".menu");

	var tl_list = new TimelineLite({});
	var list_li = $(".menu li")



	menu_btn.on("click", menu_btn_click);


	function menu_btn_click() {
		// 如果選單沒有被開啟
		if (!menu_list.hasClass("show")) {
			menu_list.addClass("show");
			menu_btn.addClass("show");

			menu_btn_animate_open();
			list_li_animate_open();
		}
		//選單被開啟了
		else {
			menu_btn_animate_close();
			list_li_animate_close();
			setTimeout(function () {
				menu_list.removeClass("show");
				menu_btn.removeClass("show");
			}, 500)
		}
	}

	function list_li_animate_open() {
		tl_list.set(list_li, {
			x: 50,
			opacity: 0,
		})
		tl_list.staggerTo(list_li, 0.25, {
			x: 0,
			opacity: 1,
			delay: 0.5,
		}, 0.15)
	}

	function list_li_animate_close() {
		tl_list.staggerTo(list_li, 0.1, {
			x: 50,
			opacity: 0,
		}, 0.05)
		tl_list.add("finish", "+=0.5")
		tl_list.to(list_li, 0, {
			x: 0,
			opacity: 1,
		}, "finish")
	}



	//展開詳細說明
	//------------------------------------------
	var expand_btn = $(".expand .btn");
	var expand_plus = $(".expand .btn span")
	var expand_box = $(".expand .box")
	
	expand_btn.on("click",expand_click)
	
	function expand_click(){
		if(!expand_box.hasClass("show")){
			expand_box.addClass("show");
			expand_box.slideDown(500);
			setTimeout(function(){
				expand_plus.addClass("show")
			},500)
			
		}else{
			expand_box.removeClass("show");
			expand_box.slideUp(500);
			setTimeout(function(){
				expand_plus.removeClass("show")
			},500)
		}
			
	}






	//點選空白處
	//------------------------------------------------------
	//	$(".tent").on("click", function (event) {
	//		// 目標區域: menu_list
	//		if (!menu_list.is(event.target) && menu_list.has(event.target).length === 0) {
	//			menu_list.removeClass("show");
	//			menu_btn.removeClass("show");
	//			$(".tent").removeClass("show");
	//			$(".tent").fadeOut(250);
	//			menu_btn_animate_close();
	//		}
	//	});



	function menu_btn_animate_open() {
		tl.add("tag1", "+=0.15")
			.to(line1, 0.15, {
				y: 9,
				easw: Power1.easeIn
			}, "tag1")
			.to(line3, 0.15, {
				y: -9,
				easw: Power1.easeIn
			}, "tag1")
			.to(line2, 0.15, {
				opacity: 0,
				easw: Power1.easeIn
			}, "tag1")
			.add("tag2", "+=0.15")

			.to(line1, 0.15, {
				rotation: 135,
				easw: Power1.easeIn
			}, "tag2")

			.to(line3, 0.15, {
				rotation: 45,
				easw: Power1.easeIn
			}, "tag2")

	}

	function menu_btn_animate_close() {
		tl.to(line3, 0.15, {
				rotation: 0,
				easw: Power1.easeIn
			})
			.to(line1, 0.15, {
				rotation: 0,
				easw: Power1.easeIn
			}, "-=0.15")
			.add("tag1", "+=0.3")

			.to(line1, 0.15, {
				y: 0,
				easw: Power1.easeIn
			}, "tag1")
			.to(line2, 0.15, {
				opacity: 1,
				easw: Power1.easeIn
			}, "tag1")
			.to(line3, 0.15, {
				y: 0,
				easw: Power1.easeIn
			}, "tag1")


	}







	var w_h;
	var w_move_t;
	var w_move_h;
	var sec_h;

	var sec_01_top;
	var sec_02_top;
	var sec_03_top;
	var sec_032_top;
	var sec_04_top;
	var sec_05_top;
	var sec_06_top;
	var sec_01_h;
	var sec_02_h;
	var sec_03_h;
	var sec_032_h;
	var sec_04_h;
	var sec_05_h;
	var sec_06_h;







	//-----------------------------------------------------
	function scrolling() {
		w_h = $(window).height();
		w_move_t = $(this).scrollTop();
		w_move_h = w_move_t + w_h / 5 * 4.5;

		showup();
		//showup -----------------------
		function showup() {
			$(".showup").each(function () {
				if (w_move_h > $(this).offset().top) {
					TweenMax.to($(this), 0.8, {
						y: 0,
						opacity: 1,
						ease: Power1.easeOut
					})
				}
			})
		}


	}

	function scroll_top_fixed() {
		w_h = $(window).height();
		w_move_t = $(this).scrollTop();
		if (w_move_t > 0) {
			$(".header").addClass("fixed");
		} else {
			$(".header").removeClass("fixed");
		}
	}

	//scrolling
	//----------------------------------------------------------------------
	scrolling();
	scroll_top_fixed();

	$(window).on("scroll", function () {
		scrolling();
		scroll_top_fixed();
	})









	//END	
})