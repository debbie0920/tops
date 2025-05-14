function Progress(elem) {
	$elem = $(elem)
	var total = $elem.length; //計算全部的圖有多少張。
//	console.log(total)
	var finish = 0; //已載入完畢的圖片
	$elem.on('load', loaded)
		.each(chechCompleted)

	function chechCompleted() {
		if (this.complete) {
			loaded.call(this)
		}
	}

	function loaded() {
		finish += 1 //圖片載入完成就+1
		var percent = finish / total * 100 //計算完成趴數
		$('.progress .progress_inset').width(percent + '%') //控制進度條寬度
		console.log(percent)
		if (percent >= 100) {//全部完成的話
			setTimeout(function () {
//				alert("success")
				kv_animate();
			}, 250)
		}
	}
}
Progress('img[data="first"]')

$(window).on("load",function(){
//	setTimeout(function () {
//		$(".progress").width("100%");
//	}, 0);
//	setTimeout(function () {
//		$(".progress_inset").removeClass("show");
//	}, 500);
//	setTimeout(function () {
//		$(".loadingPage").removeClass("in");
//	}, 1000);
//	setTimeout(function () {
//		$(".loadingPage").removeClass("load");
//	}, 1500);
	
//	setTimeout(function () {
//		kv_animate();
//	}, 250)
})

//set
var tl_m = new TimelineLite({});
tl_m.set(".img_m01", {
		y: 100,
		opacity: 0,
	});
	tl_m.set(".img_m02", {
		y: 100,
		opacity: 0,
	});
	tl_m.set(".img_m03", {
		y: 100,
		opacity: 0,
	});
	tl_m.set(".b_line span", {
		transform: "scale(0)",
		transformOrigin: "bottom left",
		opacity: 0,
	});
	tl_m.set(".m_p", {
		opacity: 0,
	});
	tl_m.set(".border span:nth-child(1)", {
		transform: "scale(0)",
		transformOrigin: "bottom right",
		opacity: 0,
	});
	tl_m.set(".border span:nth-child(2)", {
		transform: "scale(0)",
		transformOrigin: "bottom right",
		opacity: 0,
	});
	tl_m.set(".border span:nth-child(3)", {
		transform: "scale(0)",
		transformOrigin: "bottom left",
		opacity: 0,
	});
	tl_m.set(".border span:nth-child(4)", {
		transform: "scale(0)",
		transformOrigin: "bottom left",
		opacity: 0,
	});
	tl_m.set(".border span:nth-child(5)", {
		transform: "scale(0)",
		transformOrigin: "bottom left",
		opacity: 0,
	});
	tl_m.set(".border span:nth-child(6)", {
		transform: "scale(0)",
		transformOrigin: "bottom right",
		opacity: 0,
	});
	tl_m.set(".sec_01 .img_line", {
		x:-10,
		opacity: 0,
	});


function kv_animate() {
	//KV mountain animate
	//-----------------------------------------------------------
	


	tl_m.to(".img_m01", 0.8, {
		y: 0,
		opacity: 1,
		ease: Power1.easeOut
	})
	tl_m.add("mountain01");

	tl_m.to(".img_m02", 0.8, {
		y: 0,
		opacity: 1,
		ease: Power1.easeOut
	}, "mountain01+0.4")
	tl_m.to(".img_m03", 0.8, {
		y: 0,
		opacity: 1,
		ease: Power1.easeOut
	}, "mountain01+0.8")

	mountain_text_animate(1, 0.8);
	mountain_text_animate(2, 1.2);
	mountain_text_animate(3, 1.6);
	mountain_text_animate(4, 2);
	mountain_text_animate(5, 2.4);
	
	tl_m.to(".sec_01 .img_line", 3, {
		x: 0,
		opacity: 1,
		ease: Power1.easeOut
	}, "mountain01+1.6")

	//KV mountain text animate
	//-----------------------------------------------------------

	function mountain_text_animate(num, speed) {
		tl_m.to(".m_t" + num + " .b_line span", 0.5, {
			transform: "scale(1)",
			opacity: 1,
			transformOrigin: "bottom left",
			ease: Power1.easeOut
		}, speed)
		//		tl_m.add("border")
		tl_m.to(".m_t" + num + " .border span:nth-child(1)", 0.5, {
			transform: "scale(1)",
			opacity: 1,
			transformOrigin: "bottom right",
			ease: Power1.easeOut
		}, speed + 0.5)
		tl_m.to(".m_t" + num + " .m_p", 0.5, {
			opacity: 1,
			ease: Power1.easeOut
		}, speed + 0.5)
		tl_m.to(".m_t" + num + " .border span:nth-child(2)", 0.5, {
			transform: "scale(1)",
			opacity: 1,
			transformOrigin: "bottom right",
			ease: Power1.easeOut
		}, speed + 1)
		tl_m.to(".m_t" + num + " .border span:nth-child(3)", 0.5, {
			transform: "scale(1)",
			opacity: 1,
			transformOrigin: "bottom left",
			ease: Power1.easeOut
		}, speed + 1.5)

		tl_m.to(".m_t" + num + " .border span:nth-child(4)", 0.5, {
			transform: "scale(1)",
			opacity: 1,
			transformOrigin: "bottom left",
			ease: Power1.easeOut
		}, speed + 0.5)
		tl_m.to(".m_t" + num + " .border span:nth-child(5)", 0.5, {
			transform: "scale(1)",
			opacity: 1,
			transformOrigin: "bottom left",
			ease: Power1.easeOut
		}, speed + 1)
		tl_m.to(".m_t" + num + " .border span:nth-child(6)", 0.5, {
			transform: "scale(1)",
			opacity: 1,
			transformOrigin: "bottom right",
			ease: Power1.easeOut
		}, speed + 1.5)
	}

}