	var price1=true;
	function price2(){
		price1=!price1;
		if (!price1) {
			$(".price3").css("font-weight","bold");
			$(".price3").css("color","black");
			$(".price3").removeClass("price");
			$(".price3").removeClass("price2");
			$(".price3").addClass("price1");
		}else{
			$(".price3").addClass("price2");
			$(".price3").removeClass("price1");
		}
	}
	function price5(){
		$(".price4").css("font-weight","bold");
		$(".price4").css("color","black");
	}
	function price3(){
		$(".price5").css("font-weight","bold");
		$(".price5").css("color","black");
	}
	function price4(){
		$(".price6").css("font-weight","bold");
		$(".price6").css("color","black");
	}
//接收上级界面传递的参数，首先获取当前url信息
	var url=location.href;
 	console.log(url);
    var argument = url.split("?")[1];//split:以问号为标志，将字符串切割成一个数组
	console.log(argument);
	var a = argument.split("&");
	console.log(a);
	var b = a[0].split("=")[1];
	console.log(b);
//第一页
	$.ajax({
		url:"../data/reseonly.php?type=categatory_list&categatoryId="+b+'&pageIndex=1',
		success:function(data){
			var obj = JSON.parse(data);
			// console.log(obj);
			$('.flower_img1').attr("src","http://www.roseonly.com.cn/"+obj[0].imgpath2);
			$('.flower_text1').text(obj[0].seriesname);
			$(".flower_size1").text(obj[0].proname4Show);
			$('.flower_price1').text(obj[0].finalprice);

			$(".flower_img2").attr("src","http://www.roseonly.com.cn/"+obj[1].imgpath2);
			$('.flower_text2').text(obj[1].seriesname);
			$(".flower_size2").text(obj[1].proname4Show);
			$('.flower_price2').text(obj[1].finalprice);

			$('.flower_img3').attr("src","http://www.roseonly.com.cn/"+obj[2].imgpath2);
			$('.flower_text3').text(obj[2].seriesname);
			$(".flower_size3").text(obj[2].proname4Show);
			$('.flower_price3').text(obj[2].finalprice);

			$(".flower_img4").attr("src","http://www.roseonly.com.cn/"+obj[3].imgpath2);
			$('.flower_text4').text(obj[3].seriesname);
			$(".flower_size4").text(obj[3].proname4Show);
			$('.flower_price4').text(obj[3].finalprice);

			$('.flower_img5').attr("src","http://www.roseonly.com.cn/"+obj[4].imgpath2);
			$('.flower_text5').text(obj[4].seriesname);
			$(".flower_size5").text(obj[4].proname4Show);
			$('.flower_price5').text(obj[4].finalprice);

			$(".flower_img6").attr("src","http://www.roseonly.com.cn/"+obj[5].imgpath2);
			$('.flower_text6').text(obj[5].seriesname);
			$(".flower_size6").text(obj[5].proname4Show);
			$('.flower_price6').text(obj[5].finalprice);
		}
	})
//第二页
	$.ajax({
		url:"../data/reseonly.php?type=categatory_list&categatoryId="+b+'&pageIndex=2',
		success:function(data){
			var obj = JSON.parse(data);
			// console.log(obj);
			$('.flower_img7').attr("src","http://www.roseonly.com.cn/"+obj[0].imgpath2);
			$('.flower_text7').text(obj[0].seriesname);
			$(".flower_size7").text(obj[0].proname4Show);
			$('.flower_price7').text(obj[0].finalprice);

			$(".flower_img8").attr("src","http://www.roseonly.com.cn/"+obj[1].imgpath2);
			$('.flower_text8').text(obj[1].seriesname);
			$(".flower_size8").text(obj[1].proname4Show);
			$('.flower_price8').text(obj[1].finalprice);

			$('.flower_img9').attr("src","http://www.roseonly.com.cn/"+obj[2].imgpath2);
			$('.flower_text9').text(obj[2].seriesname);
			$(".flower_size9").text(obj[2].proname4Show);
			$('.flower_price9').text(obj[2].finalprice);

			$(".flower_img10").attr("src","http://www.roseonly.com.cn/"+obj[3].imgpath2);
			$('.flower_text10').text(obj[3].seriesname);
			$(".flower_size10").text(obj[3].proname4Show);
			$('.flower_price10').text(obj[3].finalprice);

			$('.flower_img11').attr("src","http://www.roseonly.com.cn/"+obj[4].imgpath2);
			$('.flower_text11').text(obj[4].seriesname);
			$(".flower_size11").text(obj[4].proname4Show);
			$('.flower_price11').text(obj[4].finalprice);

			$(".flower_img12").attr("src","http://www.roseonly.com.cn/"+obj[5].imgpath2);
			$('.flower_text12').text(obj[5].seriesname);
			$(".flower_size12").text(obj[5].proname4Show);
			$('.flower_price12').text(obj[5].finalprice);
		}
	})
//第三页
	
	$.ajax({
		url:"../data/reseonly.php?type=categatory_list&categatoryId="+b+'&pageIndex=3',
		success:function(data){
			var obj = JSON.parse(data);
			// console.log(obj);
			$('.flower_img13').attr("src","http://www.roseonly.com.cn/"+obj[0].imgpath2);
			$('.flower_text13').text(obj[0].seriesname);
			$(".flower_size13").text(obj[0].proname4Show);
			$('.flower_price13').text(obj[0].finalprice);

			$(".flower_img14").attr("src","http://www.roseonly.com.cn/"+obj[1].imgpath2);
			$('.flower_text14').text(obj[1].seriesname);
			$(".flower_size14").text(obj[1].proname4Show);
			$('.flower_price14').text(obj[1].finalprice);

			$('.flower_img15').attr("src","http://www.roseonly.com.cn/"+obj[2].imgpath2);
			$('.flower_text15').text(obj[2].seriesname);
			$(".flower_size15").text(obj[2].proname4Show);
			$('.flower_price15').text(obj[2].finalprice);

			$(".flower_img16").attr("src","http://www.roseonly.com.cn/"+obj[3].imgpath2);
			$('.flower_text16').text(obj[3].seriesname);
			$(".flower_size16").text(obj[3].proname4Show);
			$('.flower_price16').text(obj[3].finalprice);

			$('.flower_img17').attr("src","http://www.roseonly.com.cn/"+obj[4].imgpath2);
			$('.flower_text17').text(obj[4].seriesname);
			$(".flower_size17").text(obj[4].proname4Show);
			$('.flower_price17').text(obj[4].finalprice);

			$(".flower_img18").attr("src","http://www.roseonly.com.cn/"+obj[5].imgpath2);
			$('.flower_text18').text(obj[5].seriesname);
			$(".flower_size18").text(obj[5].proname4Show);
			$('.flower_price18').text(obj[5].finalprice);
		}
	})
//第四页
	$.ajax({
		url:"../data/reseonly.php?type=categatory_list&categatoryId="+b+'&pageIndex=4',
		success:function(data){
			var obj = JSON.parse(data);
			// console.log(obj);
			$('.flower_img19').attr("src","http://www.roseonly.com.cn/"+obj[0].imgpath2);
			$('.flower_text19').text(obj[0].seriesname);
			$(".flower_size19").text(obj[0].proname4Show);
			$('.flower_price19').text(obj[0].finalprice);

			$(".flower_img20").attr("src","http://www.roseonly.com.cn/"+obj[1].imgpath2);
			$('.flower_text20').text(obj[1].seriesname);
			$(".flower_size20").text(obj[1].proname4Show);
			$('.flower_price20').text(obj[1].finalprice);

			$('.flower_img21').attr("src","http://www.roseonly.com.cn/"+obj[2].imgpath2);
			$('.flower_text21').text(obj[2].seriesname);
			$(".flower_size21").text(obj[2].proname4Show);
			$('.flower_price21').text(obj[2].finalprice);

			$(".flower_img22").attr("src","http://www.roseonly.com.cn/"+obj[3].imgpath2);
			$('.flower_text22').text(obj[3].seriesname);
			$(".flower_size22").text(obj[3].proname4Show);
			$('.flower_price22').text(obj[3].finalprice);

			$('.flower_img23').attr("src","http://www.roseonly.com.cn/"+obj[4].imgpath2);
			$('.flower_text23').text(obj[4].seriesname);
			$(".flower_size23").text(obj[4].proname4Show);
			$('.flower_price23').text(obj[4].finalprice);

			$(".flower_img24").attr("src","http://www.roseonly.com.cn/"+obj[5].imgpath2);
			$('.flower_text24').text(obj[5].seriesname);
			$(".flower_size24").text(obj[5].proname4Show);
			$('.flower_price24').text(obj[5].finalprice);
		}
	})
	// 

	//第五页
	$.ajax({
		url:"../data/reseonly.php?type=categatory_list&categatoryId="+b+'&pageIndex=3',
		success:function(data){
			var obj = JSON.parse(data);
			// console.log(obj);
			$('.flower_img25').attr("src","http://www.roseonly.com.cn/"+obj[0].imgpath2);
			$('.flower_text25').text(obj[0].seriesname);
			$(".flower_size25").text(obj[0].proname4Show);
			$('.flower_price25').text(obj[0].finalprice);

			$(".flower_img26").attr("src","http://www.roseonly.com.cn/"+obj[1].imgpath2);
			$('.flower_text26').text(obj[1].seriesname);
			$(".flower_size26").text(obj[1].proname4Show);
			$('.flower_price26').text(obj[1].finalprice);

			$('.flower_img27').attr("src","http://www.roseonly.com.cn/"+obj[2].imgpath2);
			$('.flower_text27').text(obj[2].seriesname);
			$(".flower_size27").text(obj[2].proname4Show);
			$('.flower_price27').text(obj[2].finalprice);

			$(".flower_img28").attr("src","http://www.roseonly.com.cn/"+obj[3].imgpath2);
			$('.flower_text28').text(obj[3].seriesname);
			$(".flower_size28").text(obj[3].proname4Show);
			$('.flower_price28').text(obj[3].finalprice);

			$('.flower_img29').attr("src","http://www.roseonly.com.cn/"+obj[4].imgpath2);
			$('.flower_text29').text(obj[4].seriesname);
			$(".flower_size29").text(obj[4].proname4Show);
			$('.flower_price29').text(obj[4].finalprice);

			$(".flower_img30").attr("src","http://www.roseonly.com.cn/"+obj[5].imgpath2);
			$('.flower_text30').text(obj[5].seriesname);
			$(".flower_size30").text(obj[5].proname4Show);
			$('.flower_price30').text(obj[5].finalprice);
		}
	})
	//第六页
	$.ajax({
		url:"../data/reseonly.php?type=categatory_list&categatoryId="+b+'&pageIndex=4',
		success:function(data){
			var obj = JSON.parse(data);
			// console.log(obj);
			$('.flower_img31').attr("src","http://www.roseonly.com.cn/"+obj[0].imgpath2);
			$('.flower_text31').text(obj[0].seriesname);
			$(".flower_size31").text(obj[0].proname4Show);
			$('.flower_price31').text(obj[0].finalprice);

			$(".flower_img32").attr("src","http://www.roseonly.com.cn/"+obj[1].imgpath2);
			$('.flower_text32').text(obj[1].seriesname);
			$(".flower_size32").text(obj[1].proname4Show);
			$('.flower_price32').text(obj[1].finalprice);

			$('.flower_img33').attr("src","http://www.roseonly.com.cn/"+obj[2].imgpath2);
			$('.flower_text33').text(obj[2].seriesname);
			$(".flower_size33").text(obj[2].proname4Show);
			$('.flower_price33').text(obj[2].finalprice);

			$(".flower_img34").attr("src","http://www.roseonly.com.cn/"+obj[3].imgpath2);
			$('.flower_text34').text(obj[3].seriesname);
			$(".flower_size34").text(obj[3].proname4Show);
			$('.flower_price34').text(obj[3].finalprice);

			$('.flower_img35').attr("src","http://www.roseonly.com.cn/"+obj[4].imgpath2);
			$('.flower_text35').text(obj[4].seriesname);
			$(".flower_size35").text(obj[4].proname4Show);
			$('.flower_price35').text(obj[4].finalprice);

			$(".flower_img36").attr("src","http://www.roseonly.com.cn/"+obj[5].imgpath2);
			$('.flower_text36').text(obj[5].seriesname);
			$(".flower_size36").text(obj[5].proname4Show);
			$('.flower_price36').text(obj[5].finalprice);
		}
	})
	// 

	//第七页
	$.ajax({
		url:"../data/reseonly.php?type=categatory_list&categatoryId="+b+'&pageIndex=3',
		success:function(data){
			var obj = JSON.parse(data);
			// console.log(obj);
			$('.flower_img37').attr("src","http://www.roseonly.com.cn/"+obj[0].imgpath2);
			$('.flower_text37').text(obj[0].seriesname);
			$(".flower_size37").text(obj[0].proname4Show);
			$('.flower_price37').text(obj[0].finalprice);

			$(".flower_img38").attr("src","http://www.roseonly.com.cn/"+obj[1].imgpath2);
			$('.flower_text38').text(obj[1].seriesname);
			$(".flower_size38").text(obj[1].proname4Show);
			$('.flower_price38').text(obj[1].finalprice);

			$('.flower_img39').attr("src","http://www.roseonly.com.cn/"+obj[2].imgpath2);
			$('.flower_text39').text(obj[2].seriesname);
			$(".flower_size39").text(obj[2].proname4Show);
			$('.flower_price39').text(obj[2].finalprice);

			$(".flower_img40").attr("src","http://www.roseonly.com.cn/"+obj[3].imgpath2);
			$('.flower_text40').text(obj[3].seriesname);
			$(".flower_size40").text(obj[3].proname4Show);
			$('.flower_price40').text(obj[3].finalprice);

			$('.flower_img41').attr("src","http://www.roseonly.com.cn/"+obj[4].imgpath2);
			$('.flower_text41').text(obj[4].seriesname);
			$(".flower_size41").text(obj[4].proname4Show);
			$('.flower_price41').text(obj[4].finalprice);

			$(".flower_img42").attr("src","http://www.roseonly.com.cn/"+obj[5].imgpath2);
			$('.flower_text42').text(obj[5].seriesname);
			$(".flower_size42").text(obj[5].proname4Show);
			$('.flower_price42').text(obj[5].finalprice);
		}
	})

//销量
	// $.ajax({
	// 	url:"../data/reseonly.php?type=orderBy&order=ps.allnum+desc&categatoryId="+b+'&pageIndex=1',
	// 	success:function(data){
	// 		var obj = JSON.parse(data);
	// 		console.log(obj);
			// $('.sales_img37').attr("src","http://www.roseonly.com.cn/"+obj[0].imgpath2);
			// $('.sales_text37').text(obj[0].seriesname);
			// $(".sales_size37").text(obj[0].proname4Show);
			// $('.sales_price37').text(obj[0].finalprice);

			// $(".sales_img38").attr("src","http://www.roseonly.com.cn/"+obj[1].imgpath2);
			// $('.sales_text38').text(obj[1].seriesname);
			// $(".sales_size38").text(obj[1].proname4Show);
			// $('.sales_price38').text(obj[1].finalprice);

			// $('.sales_img39').attr("src","http://www.roseonly.com.cn/"+obj[2].imgpath2);
			// $('.sales_text39').text(obj[2].seriesname);
			// $(".sales_size39").text(obj[2].proname4Show);
			// $('.sales_price39').text(obj[2].finalprice);

			// $(".sales_img40").attr("src","http://www.roseonly.com.cn/"+obj[3].imgpath2);
			// $('.sales_text40').text(obj[3].seriesname);
			// $(".sales_size40").text(obj[3].proname4Show);
			// $('.sales_price40').text(obj[3].finalprice);

			// $('.sales_img41').attr("src","http://www.roseonly.com.cn/"+obj[4].imgpath2);
			// $('.sales_text41').text(obj[4].seriesname);
			// $(".sales_size41").text(obj[4].proname4Show);
			// $('.sales_price41').text(obj[4].finalprice);

			// $(".sales_img42").attr("src","http://www.roseonly.com.cn/"+obj[5].imgpath2);
			// $('.sales_text42').text(obj[5].seriesname);
			// $(".sales_size42").text(obj[5].proname4Show);
			// $('.sales_price42').text(obj[5].finalprice);
		// }
	// })

