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
		$(".synthesize").css("display","inline-block");
		$(".price_volume").css("display","none");
		$(".rose_price").css("display","none");
	}
	function price3(){
		$(".price5").css("font-weight","bold");
		$(".price5").css("color","black");
		$(".price_volume").css("display","inline-block");
		$(".synthesize").css("display","none");
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
		url:"../data/reseonly.php?type=categatory_list&categatoryId="+b+"&pageIndex=1",
		success:function(data){
			var obj = JSON.parse(data);
			// console.log(obj);
			$(".flower_img1").attr("src","http://www.roseonly.com.cn/"+obj[0].imgpath2);
			$(".flower_text1").text(obj[0].seriesname);
			$(".flower_size1").text(obj[0].proname4Show);
			$(".flower_price1").text(obj[0].finalprice);

			$(".flower_img2").attr("src","http://www.roseonly.com.cn/"+obj[1].imgpath2);
			$(".flower_text2").text(obj[1].seriesname);
			$(".flower_size2").text(obj[1].proname4Show);
			$(".flower_price2").text(obj[1].finalprice);

			$(".flower_img3").attr("src","http://www.roseonly.com.cn/"+obj[2].imgpath2);
			$(".flower_text3").text(obj[2].seriesname);
			$(".flower_size3").text(obj[2].proname4Show);
			$(".flower_price3").text(obj[2].finalprice);

			$(".flower_img4").attr("src","http://www.roseonly.com.cn/"+obj[3].imgpath2);
			$(".flower_text4").text(obj[3].seriesname);
			$(".flower_size4").text(obj[3].proname4Show);
			$(".flower_price4").text(obj[3].finalprice);

			$(".flower_img5").attr("src","http://www.roseonly.com.cn/"+obj[4].imgpath2);
			$(".flower_text5").text(obj[4].seriesname);
			$(".flower_size5").text(obj[4].proname4Show);
			$(".flower_price5").text(obj[4].finalprice);

			$(".flower_img6").attr("src","http://www.roseonly.com.cn/"+obj[5].imgpath2);
			$(".flower_text6").text(obj[5].seriesname);
			$(".flower_size6").text(obj[5].proname4Show);
			$(".flower_price6").text(obj[5].finalprice);
		}
	})
//第二页
	$.ajax({
		url:"../data/reseonly.php?type=categatory_list&categatoryId="+b+"&pageIndex=2",
		success:function(data){
			var obj = JSON.parse(data);
			// console.log(obj);
			$(".flower_img7").attr("src","http://www.roseonly.com.cn/"+obj[0].imgpath2);
			$(".flower_text7").text(obj[0].seriesname);
			$(".flower_size7").text(obj[0].proname4Show);
			$(".flower_price7").text(obj[0].finalprice);

			$(".flower_img8").attr("src","http://www.roseonly.com.cn/"+obj[1].imgpath2);
			$(".flower_text8").text(obj[1].seriesname);
			$(".flower_size8").text(obj[1].proname4Show);
			$(".flower_price8").text(obj[1].finalprice);

			$(".flower_img9").attr("src","http://www.roseonly.com.cn/"+obj[2].imgpath2);
			$(".flower_text9").text(obj[2].seriesname);
			$(".flower_size9").text(obj[2].proname4Show);
			$(".flower_price9").text(obj[2].finalprice);

			$(".flower_img10").attr("src","http://www.roseonly.com.cn/"+obj[3].imgpath2);
			$(".flower_text10").text(obj[3].seriesname);
			$(".flower_size10").text(obj[3].proname4Show);
			$(".flower_price10").text(obj[3].finalprice);

			$(".flower_img11").attr("src","http://www.roseonly.com.cn/"+obj[4].imgpath2);
			$(".flower_text11").text(obj[4].seriesname);
			$(".flower_size11").text(obj[4].proname4Show);
			$(".flower_price11").text(obj[4].finalprice);

			$(".flower_img12").attr("src","http://www.roseonly.com.cn/"+obj[5].imgpath2);
			$(".flower_text12").text(obj[5].seriesname);
			$(".flower_size12").text(obj[5].proname4Show);
			$(".flower_price12").text(obj[5].finalprice);
		}
	})
//第三页
	
	$.ajax({
		url:"../data/reseonly.php?type=categatory_list&categatoryId="+b+"&pageIndex=3",
		success:function(data){
			var obj = JSON.parse(data);
			// console.log(obj);
			$(".flower_img13").attr("src","http://www.roseonly.com.cn/"+obj[0].imgpath2);
			$(".flower_text13").text(obj[0].seriesname);
			$(".flower_size13").text(obj[0].proname4Show);
			$(".flower_price13").text(obj[0].finalprice);

			$(".flower_img14").attr("src","http://www.roseonly.com.cn/"+obj[1].imgpath2);
			$(".flower_text14").text(obj[1].seriesname);
			$(".flower_size14").text(obj[1].proname4Show);
			$(".flower_price14").text(obj[1].finalprice);

			$(".flower_img15").attr("src","http://www.roseonly.com.cn/"+obj[2].imgpath2);
			$(".flower_text15").text(obj[2].seriesname);
			$(".flower_size15").text(obj[2].proname4Show);
			$(".flower_price15").text(obj[2].finalprice);

			$(".flower_img16").attr("src","http://www.roseonly.com.cn/"+obj[3].imgpath2);
			$(".flower_text16").text(obj[3].seriesname);
			$(".flower_size16").text(obj[3].proname4Show);
			$(".flower_price16").text(obj[3].finalprice);

			$(".flower_img17").attr("src","http://www.roseonly.com.cn/"+obj[4].imgpath2);
			$(".flower_text17").text(obj[4].seriesname);
			$(".flower_size17").text(obj[4].proname4Show);
			$(".flower_price17").text(obj[4].finalprice);

			$(".flower_img18").attr("src","http://www.roseonly.com.cn/"+obj[5].imgpath2);
			$(".flower_text18").text(obj[5].seriesname);
			$(".flower_size18").text(obj[5].proname4Show);
			$(".flower_price18").text(obj[5].finalprice);
		}
	})
//第四页
	$.ajax({
		url:"../data/reseonly.php?type=categatory_list&categatoryId="+b+"&pageIndex=4",
		success:function(data){
			var obj = JSON.parse(data);
			// console.log(obj);
			$(".flower_img19").attr("src","http://www.roseonly.com.cn/"+obj[0].imgpath2);
			$(".flower_text19").text(obj[0].seriesname);
			$(".flower_size19").text(obj[0].proname4Show);
			$(".flower_price19").text(obj[0].finalprice);

			$(".flower_img20").attr("src","http://www.roseonly.com.cn/"+obj[1].imgpath2);
			$(".flower_text20").text(obj[1].seriesname);
			$(".flower_size20").text(obj[1].proname4Show);
			$(".flower_price20").text(obj[1].finalprice);

			$(".flower_img21").attr("src","http://www.roseonly.com.cn/"+obj[2].imgpath2);
			$(".flower_text21").text(obj[2].seriesname);
			$(".flower_size21").text(obj[2].proname4Show);
			$(".flower_price21").text(obj[2].finalprice);

			$(".flower_img22").attr("src","http://www.roseonly.com.cn/"+obj[3].imgpath2);
			$(".flower_text22").text(obj[3].seriesname);
			$(".flower_size22").text(obj[3].proname4Show);
			$(".flower_price22").text(obj[3].finalprice);

			$(".flower_img23").attr("src","http://www.roseonly.com.cn/"+obj[4].imgpath2);
			$(".flower_text23").text(obj[4].seriesname);
			$(".flower_size23").text(obj[4].proname4Show);
			$(".flower_price23").text(obj[4].finalprice);

			$(".flower_img24").attr("src","http://www.roseonly.com.cn/"+obj[5].imgpath2);
			$(".flower_text24").text(obj[5].seriesname);
			$(".flower_size24").text(obj[5].proname4Show);
			$(".flower_price24").text(obj[5].finalprice);
		}
	})
	// 

	//第五页
	$.ajax({
		url:"../data/reseonly.php?type=categatory_list&categatoryId="+b+"&pageIndex=5",
		success:function(data){
			var obj = JSON.parse(data);
			// console.log(obj);
			$(".flower_img25").attr("src","http://www.roseonly.com.cn/"+obj[0].imgpath2);
			$(".flower_text25").text(obj[0].seriesname);
			$(".flower_size25").text(obj[0].proname4Show);
			$(".flower_price25").text(obj[0].finalprice);

			$(".flower_img26").attr("src","http://www.roseonly.com.cn/"+obj[1].imgpath2);
			$(".flower_text26").text(obj[1].seriesname);
			$(".flower_size26").text(obj[1].proname4Show);
			$(".flower_price26").text(obj[1].finalprice);

			$(".flower_img27").attr("src","http://www.roseonly.com.cn/"+obj[2].imgpath2);
			$(".flower_text27").text(obj[2].seriesname);
			$(".flower_size27").text(obj[2].proname4Show);
			$(".flower_price27").text(obj[2].finalprice);

			$(".flower_img28").attr("src","http://www.roseonly.com.cn/"+obj[3].imgpath2);
			$(".flower_text28").text(obj[3].seriesname);
			$(".flower_size28").text(obj[3].proname4Show);
			$(".flower_price28").text(obj[3].finalprice);

			$(".flower_img29").attr("src","http://www.roseonly.com.cn/"+obj[4].imgpath2);
			$(".flower_text29").text(obj[4].seriesname);
			$(".flower_size29").text(obj[4].proname4Show);
			$(".flower_price29").text(obj[4].finalprice);

			$(".flower_img30").attr("src","http://www.roseonly.com.cn/"+obj[5].imgpath2);
			$(".flower_text30").text(obj[5].seriesname);
			$(".flower_size30").text(obj[5].proname4Show);
			$(".flower_price30").text(obj[5].finalprice);
		}
	})
	//第六页
	$.ajax({
		url:"../data/reseonly.php?type=categatory_list&categatoryId="+b+"&pageIndex=6",
		success:function(data){
			var obj = JSON.parse(data);
			// console.log(obj);
			$(".flower_img31").attr("src","http://www.roseonly.com.cn/"+obj[0].imgpath2);
			$(".flower_text31").text(obj[0].seriesname);
			$(".flower_size31").text(obj[0].proname4Show);
			$(".flower_price31").text(obj[0].finalprice);

			$(".flower_img32").attr("src","http://www.roseonly.com.cn/"+obj[1].imgpath2);
			$(".flower_text32").text(obj[1].seriesname);
			$(".flower_size32").text(obj[1].proname4Show);
			$(".flower_price32").text(obj[1].finalprice);

			$(".flower_img33").attr("src","http://www.roseonly.com.cn/"+obj[2].imgpath2);
			$(".flower_text33").text(obj[2].seriesname);
			$(".flower_size33").text(obj[2].proname4Show);
			$(".flower_price33").text(obj[2].finalprice);

			$(".flower_img34").attr("src","http://www.roseonly.com.cn/"+obj[3].imgpath2);
			$(".flower_text34").text(obj[3].seriesname);
			$(".flower_size34").text(obj[3].proname4Show);
			$(".flower_price34").text(obj[3].finalprice);

			$(".flower_img35").attr("src","http://www.roseonly.com.cn/"+obj[4].imgpath2);
			$(".flower_text35").text(obj[4].seriesname);
			$(".flower_size35").text(obj[4].proname4Show);
			$(".flower_price35").text(obj[4].finalprice);

			$(".flower_img36").attr("src","http://www.roseonly.com.cn/"+obj[5].imgpath2);
			$(".flower_text36").text(obj[5].seriesname);
			$(".flower_size36").text(obj[5].proname4Show);
			$(".flower_price36").text(obj[5].finalprice);
		}
	})
	//第七页
	$.ajax({
		url:"../data/reseonly.php?type=categatory_list&categatoryId="+b+"&pageIndex=7",
		success:function(data){
			var obj = JSON.parse(data);
			// console.log(obj);
			$(".flower_img37").attr("src","http://www.roseonly.com.cn/"+obj[0].imgpath2);
			$(".flower_text37").text(obj[0].seriesname);
			$(".flower_size37").text(obj[0].proname4Show);
			$(".flower_price37").text(obj[0].finalprice);

			$(".flower_img38").attr("src","http://www.roseonly.com.cn/"+obj[1].imgpath2);
			$(".flower_text38").text(obj[1].seriesname);
			$(".flower_size38").text(obj[1].proname4Show);
			$(".flower_price38").text(obj[1].finalprice);

			$(".flower_img39").attr("src","http://www.roseonly.com.cn/"+obj[2].imgpath2);
			$(".flower_text39").text(obj[2].seriesname);
			$(".flower_size39").text(obj[2].proname4Show);
			$(".flower_price39").text(obj[2].finalprice);

			$(".flower_img40").attr("src","http://www.roseonly.com.cn/"+obj[3].imgpath2);
			$(".flower_text40").text(obj[3].seriesname);
			$(".flower_size40").text(obj[3].proname4Show);
			$(".flower_price40").text(obj[3].finalprice);

			$(".flower_img41").attr("src","http://www.roseonly.com.cn/"+obj[4].imgpath2);
			$(".flower_text41").text(obj[4].seriesname);
			$(".flower_size41").text(obj[4].proname4Show);
			$(".flower_price41").text(obj[4].finalprice);

			$(".flower_img42").attr("src","http://www.roseonly.com.cn/"+obj[5].imgpath2);
			$(".flower_text42").text(obj[5].seriesname);
			$(".flower_size42").text(obj[5].proname4Show);
			$(".flower_price42").text(obj[5].finalprice);
		}
	})


// 销量
	var orderStr = encodeURIComponent("ps.allnum+desc");
	//第一页
	$.ajax({
		url:"../data/reseonly.php?type=orderBy&order="+orderStr+"&categatoryId="+b+"&pageIndex=1",
		success:function(data){
			// console.log(data);
			var obj = JSON.parse(data);
			// console.log(obj);
			$(".sales_img1").attr("src","http://www.roseonly.com.cn/"+obj[0].imgpath2);
			$(".sales_text1").text(obj[0].seriesname);
			$(".sales_size1").text(obj[0].proname4Show);
			$(".sales_price1").text(obj[0].finalprice);

			$(".sales_img2").attr("src","http://www.roseonly.com.cn/"+obj[1].imgpath2);
			$(".sales_text2").text(obj[1].seriesname);
			$(".sales_size2").text(obj[1].proname4Show);
			$(".sales_price2").text(obj[1].finalprice);

			$(".sales_img3").attr("src","http://www.roseonly.com.cn/"+obj[2].imgpath2);
			$(".sales_text3").text(obj[2].seriesname);
			$(".sales_size3").text(obj[2].proname4Show);
			$(".sales_price3").text(obj[2].finalprice);

			$(".sales_img4").attr("src","http://www.roseonly.com.cn/"+obj[3].imgpath2);
			$(".sales_text4").text(obj[3].seriesname);
			$(".sales_size4").text(obj[3].proname4Show);
			$(".sales_price4").text(obj[3].finalprice);

			$(".sales_img5").attr("src","http://www.roseonly.com.cn/"+obj[4].imgpath2);
			$(".sales_text5").text(obj[4].seriesname);
			$(".sales_size5").text(obj[4].proname4Show);
			$(".sales_price5").text(obj[4].finalprice);

			$(".sales_img6").attr("src","http://www.roseonly.com.cn/"+obj[5].imgpath2);
			$(".sales_text6").text(obj[5].seriesname);
			$(".sales_size6").text(obj[5].proname4Show);
			$(".sales_price6").text(obj[5].finalprice);
		}
	})
	//第二页
	$.ajax({
		url:"../data/reseonly.php?type=orderBy&order="+orderStr+"&categatoryId="+b+"&pageIndex=2",
		success:function(data){
			console.log(data);
			var obj = JSON.parse(data);
			console.log(obj);
			$(".sales_img7").attr("src","http://www.roseonly.com.cn/"+obj[0].imgpath2);
			$(".sales_text7").text(obj[0].seriesname);
			$(".sales_size7").text(obj[0].proname4Show);
			$(".sales_price7").text(obj[0].finalprice);

			$(".sales_img8").attr("src","http://www.roseonly.com.cn/"+obj[1].imgpath2);
			$(".sales_text8").text(obj[1].seriesname);
			$(".sales_size8").text(obj[1].proname4Show);
			$(".sales_price8").text(obj[1].finalprice);

			$(".sales_img9").attr("src","http://www.roseonly.com.cn/"+obj[2].imgpath2);
			$(".sales_text9").text(obj[2].seriesname);
			$(".sales_size9").text(obj[2].proname4Show);
			$(".sales_price9").text(obj[2].finalprice);

			$(".sales_img10").attr("src","http://www.roseonly.com.cn/"+obj[3].imgpath2);
			$(".sales_text10").text(obj[3].seriesname);
			$(".sales_size10").text(obj[3].proname4Show);
			$(".sales_price10").text(obj[3].finalprice);

			$(".sales_img11").attr("src","http://www.roseonly.com.cn/"+obj[4].imgpath2);
			$(".sales_text11").text(obj[4].seriesname);
			$(".sales_size11").text(obj[4].proname4Show);
			$(".sales_price11").text(obj[4].finalprice);

			$(".sales_img12").attr("src","http://www.roseonly.com.cn/"+obj[5].imgpath2);
			$(".sales_text12").text(obj[5].seriesname);
			$(".sales_size12").text(obj[5].proname4Show);
			$(".sales_price12").text(obj[5].finalprice);
		}
	})
	//第三页
	$.ajax({
		url:"../data/reseonly.php?type=orderBy&order="+orderStr+"&categatoryId="+b+"&pageIndex=3",
		success:function(data){
			console.log(data);
			var obj = JSON.parse(data);
			console.log(obj);
			$(".sales_img13").attr("src","http://www.roseonly.com.cn/"+obj[0].imgpath2);
			$(".sales_text13").text(obj[0].seriesname);
			$(".sales_size13").text(obj[0].proname4Show);
			$(".sales_price13").text(obj[0].finalprice);

			$(".sales_img14").attr("src","http://www.roseonly.com.cn/"+obj[1].imgpath2);
			$(".sales_text14").text(obj[1].seriesname);
			$(".sales_size14").text(obj[1].proname4Show);
			$(".sales_price14").text(obj[1].finalprice);

			$(".sales_img15").attr("src","http://www.roseonly.com.cn/"+obj[2].imgpath2);
			$(".sales_text15").text(obj[2].seriesname);
			$(".sales_size15").text(obj[2].proname4Show);
			$(".sales_price15").text(obj[2].finalprice);

			$(".sales_img16").attr("src","http://www.roseonly.com.cn/"+obj[3].imgpath2);
			$(".sales_text16").text(obj[3].seriesname);
			$(".sales_size16").text(obj[3].proname4Show);
			$(".sales_price16").text(obj[3].finalprice);

			$(".sales_img17").attr("src","http://www.roseonly.com.cn/"+obj[4].imgpath2);
			$(".sales_text17").text(obj[4].seriesname);
			$(".sales_size17").text(obj[4].proname4Show);
			$(".sales_price17").text(obj[4].finalprice);

			$(".sales_img18").attr("src","http://www.roseonly.com.cn/"+obj[5].imgpath2);
			$(".sales_text18").text(obj[5].seriesname);
			$(".sales_size18").text(obj[5].proname4Show);
			$(".sales_price18").text(obj[5].finalprice);
		}
	})
	//第四页
	$.ajax({
		url:"../data/reseonly.php?type=orderBy&order="+orderStr+"&categatoryId="+b+"&pageIndex=4",
		success:function(data){
			console.log(data);
			var obj = JSON.parse(data);
			console.log(obj);
			$(".sales_img19").attr("src","http://www.roseonly.com.cn/"+obj[0].imgpath2);
			$(".sales_text19").text(obj[0].seriesname);
			$(".sales_size19").text(obj[0].proname4Show);
			$(".sales_price19").text(obj[0].finalprice);

			$(".sales_img20").attr("src","http://www.roseonly.com.cn/"+obj[1].imgpath2);
			$(".sales_text20").text(obj[1].seriesname);
			$(".sales_size20").text(obj[1].proname4Show);
			$(".sales_price20").text(obj[1].finalprice);

			$(".sales_img21").attr("src","http://www.roseonly.com.cn/"+obj[2].imgpath2);
			$(".sales_text21").text(obj[2].seriesname);
			$(".sales_size21").text(obj[2].proname4Show);
			$(".sales_price21").text(obj[2].finalprice);

			$(".sales_img22").attr("src","http://www.roseonly.com.cn/"+obj[3].imgpath2);
			$(".sales_text22").text(obj[3].seriesname);
			$(".sales_size22").text(obj[3].proname4Show);
			$(".sales_price22").text(obj[3].finalprice);

			$(".sales_img23").attr("src","http://www.roseonly.com.cn/"+obj[4].imgpath2);
			$(".sales_text23").text(obj[4].seriesname);
			$(".sales_size23").text(obj[4].proname4Show);
			$(".sales_price23").text(obj[4].finalprice);

			$(".sales_img24").attr("src","http://www.roseonly.com.cn/"+obj[5].imgpath2);
			$(".sales_text24").text(obj[5].seriesname);
			$(".sales_size24").text(obj[5].proname4Show);
			$(".sales_price24").text(obj[5].finalprice);
		}
	})
	//第五页
	$.ajax({
		url:"../data/reseonly.php?type=orderBy&order="+orderStr+"&categatoryId="+b+"&pageIndex=5",
		success:function(data){
			console.log(data);
			var obj = JSON.parse(data);
			console.log(obj);
			$(".sales_img25").attr("src","http://www.roseonly.com.cn/"+obj[0].imgpath2);
			$(".sales_text25").text(obj[0].seriesname);
			$(".sales_size25").text(obj[0].proname4Show);
			$(".sales_price25").text(obj[0].finalprice);

			$(".sales_img26").attr("src","http://www.roseonly.com.cn/"+obj[1].imgpath2);
			$(".sales_text26").text(obj[1].seriesname);
			$(".sales_size26").text(obj[1].proname4Show);
			$(".sales_price26").text(obj[1].finalprice);

			$(".sales_img27").attr("src","http://www.roseonly.com.cn/"+obj[2].imgpath2);
			$(".sales_text27").text(obj[2].seriesname);
			$(".sales_size27").text(obj[2].proname4Show);
			$(".sales_price27").text(obj[2].finalprice);

			$(".sales_img28").attr("src","http://www.roseonly.com.cn/"+obj[3].imgpath2);
			$(".sales_text28").text(obj[3].seriesname);
			$(".sales_size28").text(obj[3].proname4Show);
			$(".sales_price28").text(obj[3].finalprice);

			$(".sales_img29").attr("src","http://www.roseonly.com.cn/"+obj[4].imgpath2);
			$(".sales_text29").text(obj[4].seriesname);
			$(".sales_size29").text(obj[4].proname4Show);
			$(".sales_price29").text(obj[4].finalprice);

			$(".sales_img30").attr("src","http://www.roseonly.com.cn/"+obj[5].imgpath2);
			$(".sales_text30").text(obj[5].seriesname);
			$(".sales_size30").text(obj[5].proname4Show);
			$(".sales_price30").text(obj[5].finalprice);
		}
	})
	//第六页
	$.ajax({
		url:"../data/reseonly.php?type=orderBy&order="+orderStr+"&categatoryId="+b+"&pageIndex=6",
		success:function(data){
			console.log(data);
			var obj = JSON.parse(data);
			console.log(obj);
			$(".sales_img31").attr("src","http://www.roseonly.com.cn/"+obj[0].imgpath2);
			$(".sales_text31").text(obj[0].seriesname);
			$(".sales_size31").text(obj[0].proname4Show);
			$(".sales_price31").text(obj[0].finalprice);

			$(".sales_img32").attr("src","http://www.roseonly.com.cn/"+obj[1].imgpath2);
			$(".sales_text32").text(obj[1].seriesname);
			$(".sales_size32").text(obj[1].proname4Show);
			$(".sales_price32").text(obj[1].finalprice);

			$(".sales_img33").attr("src","http://www.roseonly.com.cn/"+obj[2].imgpath2);
			$(".sales_text33").text(obj[2].seriesname);
			$(".sales_size33").text(obj[2].proname4Show);
			$(".sales_price33").text(obj[2].finalprice);

			$(".sales_img34").attr("src","http://www.roseonly.com.cn/"+obj[3].imgpath2);
			$(".sales_text34").text(obj[3].seriesname);
			$(".sales_size34").text(obj[3].proname4Show);
			$(".sales_price34").text(obj[3].finalprice);

			$(".sales_img35").attr("src","http://www.roseonly.com.cn/"+obj[4].imgpath2);
			$(".sales_text35").text(obj[4].seriesname);
			$(".sales_size35").text(obj[4].proname4Show);
			$(".sales_price35").text(obj[4].finalprice);

			$(".sales_img36").attr("src","http://www.roseonly.com.cn/"+obj[5].imgpath2);
			$(".sales_text36").text(obj[5].seriesname);
			$(".sales_size36").text(obj[5].proname4Show);
			$(".sales_price36").text(obj[5].finalprice);
		}
	})



// 价格  升序
	var litre = encodeURIComponent("p.finalprice+asc");
	//第一页
	$.ajax({
		url:"../data/reseonly.php?type=orderBy&order="+litre+"&categatoryId="+b+"&pageIndex=1",
		success:function(data){
			// console.log(data);
			var obj = JSON.parse(data);
			// console.log(obj);
			$(".price_img1").attr("src","http://www.roseonly.com.cn/"+obj[0].imgpath2);
			$(".price_text1").text(obj[0].seriesname);
			$(".price_size1").text(obj[0].proname4Show);
			$(".price_price1").text(obj[0].finalprice);

			$(".price_img2").attr("src","http://www.roseonly.com.cn/"+obj[1].imgpath2);
			$(".price_text2").text(obj[1].seriesname);
			$(".price_size2").text(obj[1].proname4Show);
			$(".price_price2").text(obj[1].finalprice);

			$(".price_img3").attr("src","http://www.roseonly.com.cn/"+obj[2].imgpath2);
			$(".price_text3").text(obj[2].seriesname);
			$(".price_size3").text(obj[2].proname4Show);
			$(".price_price3").text(obj[2].finalprice);

			$(".price_img4").attr("src","http://www.roseonly.com.cn/"+obj[3].imgpath2);
			$(".price_text4").text(obj[3].seriesname);
			$(".price_size4").text(obj[3].proname4Show);
			$(".price_price4").text(obj[3].finalprice);

			$(".price_img5").attr("src","http://www.roseonly.com.cn/"+obj[4].imgpath2);
			$(".price_text5").text(obj[4].seriesname);
			$(".price_size5").text(obj[4].proname4Show);
			$(".price_price5").text(obj[4].finalprice);

			$(".price_img6").attr("src","http://www.roseonly.com.cn/"+obj[5].imgpath2);
			$(".price_text6").text(obj[5].seriesname);
			$(".price_size6").text(obj[5].proname4Show);
			$(".price_price6").text(obj[5].finalprice);
		}
	})
	//第二页
	$.ajax({
		url:"../data/reseonly.php?type=orderBy&order="+litre+"&categatoryId="+b+"&pageIndex=2",
		success:function(data){
			console.log(data);
			var obj = JSON.parse(data);
			console.log(obj);
			$(".price_img7").attr("src","http://www.roseonly.com.cn/"+obj[0].imgpath2);
			$(".price_text7").text(obj[0].seriesname);
			$(".price_size7").text(obj[0].proname4Show);
			$(".price_price7").text(obj[0].finalprice);

			$(".price_img8").attr("src","http://www.roseonly.com.cn/"+obj[1].imgpath2);
			$(".price_text8").text(obj[1].seriesname);
			$(".price_size8").text(obj[1].proname4Show);
			$(".price_price8").text(obj[1].finalprice);

			$(".price_img9").attr("src","http://www.roseonly.com.cn/"+obj[2].imgpath2);
			$(".price_text9").text(obj[2].seriesname);
			$(".price_size9").text(obj[2].proname4Show);
			$(".price_price9").text(obj[2].finalprice);

			$(".price_img10").attr("src","http://www.roseonly.com.cn/"+obj[3].imgpath2);
			$(".price_text10").text(obj[3].seriesname);
			$(".price_size10").text(obj[3].proname4Show);
			$(".price_price10").text(obj[3].finalprice);

			$(".price_img11").attr("src","http://www.roseonly.com.cn/"+obj[4].imgpath2);
			$(".price_text11").text(obj[4].seriesname);
			$(".price_size11").text(obj[4].proname4Show);
			$(".price_price11").text(obj[4].finalprice);

			$(".price_img12").attr("src","http://www.roseonly.com.cn/"+obj[5].imgpath2);
			$(".price_text12").text(obj[5].seriesname);
			$(".price_size12").text(obj[5].proname4Show);
			$(".price_price12").text(obj[5].finalprice);
		}
	})
	//第三页
	$.ajax({
		url:"../data/reseonly.php?type=orderBy&order="+litre+"&categatoryId="+b+"&pageIndex=3",
		success:function(data){
			console.log(data);
			var obj = JSON.parse(data);
			console.log(obj);
			$(".price_img13").attr("src","http://www.roseonly.com.cn/"+obj[0].imgpath2);
			$(".price_text13").text(obj[0].seriesname);
			$(".price_size13").text(obj[0].proname4Show);
			$(".price_price13").text(obj[0].finalprice);

			$(".price_img14").attr("src","http://www.roseonly.com.cn/"+obj[1].imgpath2);
			$(".price_text14").text(obj[1].seriesname);
			$(".price_size14").text(obj[1].proname4Show);
			$(".price_price14").text(obj[1].finalprice);

			$(".price_img15").attr("src","http://www.roseonly.com.cn/"+obj[2].imgpath2);
			$(".price_text15").text(obj[2].seriesname);
			$(".price_size15").text(obj[2].proname4Show);
			$(".price_price15").text(obj[2].finalprice);

			$(".price_img16").attr("src","http://www.roseonly.com.cn/"+obj[3].imgpath2);
			$(".price_text16").text(obj[3].seriesname);
			$(".price_size16").text(obj[3].proname4Show);
			$(".price_price16").text(obj[3].finalprice);

			$(".price_img17").attr("src","http://www.roseonly.com.cn/"+obj[4].imgpath2);
			$(".price_text17").text(obj[4].seriesname);
			$(".price_size17").text(obj[4].proname4Show);
			$(".price_price17").text(obj[4].finalprice);

			$(".price_img18").attr("src","http://www.roseonly.com.cn/"+obj[5].imgpath2);
			$(".price_text18").text(obj[5].seriesname);
			$(".price_size18").text(obj[5].proname4Show);
			$(".price_price18").text(obj[5].finalprice);
		}
	})
	//第四页
	$.ajax({
		url:"../data/reseonly.php?type=orderBy&order="+litre+"&categatoryId="+b+"&pageIndex=4",
		success:function(data){
			console.log(data);
			var obj = JSON.parse(data);
			console.log(obj);
			$(".price_img19").attr("src","http://www.roseonly.com.cn/"+obj[0].imgpath2);
			$(".price_text19").text(obj[0].seriesname);
			$(".price_size19").text(obj[0].proname4Show);
			$(".price_price19").text(obj[0].finalprice);

			$(".price_img20").attr("src","http://www.roseonly.com.cn/"+obj[1].imgpath2);
			$(".price_text20").text(obj[1].seriesname);
			$(".price_size20").text(obj[1].proname4Show);
			$(".price_price20").text(obj[1].finalprice);

			$(".price_img21").attr("src","http://www.roseonly.com.cn/"+obj[2].imgpath2);
			$(".price_text21").text(obj[2].seriesname);
			$(".price_size21").text(obj[2].proname4Show);
			$(".price_price21").text(obj[2].finalprice);

			$(".price_img22").attr("src","http://www.roseonly.com.cn/"+obj[3].imgpath2);
			$(".price_text22").text(obj[3].seriesname);
			$(".price_size22").text(obj[3].proname4Show);
			$(".price_price22").text(obj[3].finalprice);

			$(".price_img23").attr("src","http://www.roseonly.com.cn/"+obj[4].imgpath2);
			$(".price_text23").text(obj[4].seriesname);
			$(".price_size23").text(obj[4].proname4Show);
			$(".price_price23").text(obj[4].finalprice);

			$(".price_img24").attr("src","http://www.roseonly.com.cn/"+obj[5].imgpath2);
			$(".price_text24").text(obj[5].seriesname);
			$(".price_size24").text(obj[5].proname4Show);
			$(".price_price24").text(obj[5].finalprice);
		}
	})
	
// 价格  降序
	var drop = encodeURIComponent("p.finalprice+desc");
	//第一页
	$.ajax({
		url:"../data/reseonly.php?type=orderBy&order="+drop+"&categatoryId="+b+"&pageIndex=1",
		success:function(data){
			// console.log(data);
			var obj = JSON.parse(data);
			// console.log(obj);
			$(".price_drop_img1").attr("src","http://www.roseonly.com.cn/"+obj[0].imgpath2);
			$(".price_drop_text1").text(obj[0].seriesname);
			$(".price_drop_size1").text(obj[0].proname4Show);
			$(".price_drop_price1").text(obj[0].finalprice);

			$(".price_drop_img2").attr("src","http://www.roseonly.com.cn/"+obj[1].imgpath2);
			$(".price_drop_text2").text(obj[1].seriesname);
			$(".price_drop_size2").text(obj[1].proname4Show);
			$(".price_drop_price2").text(obj[1].finalprice);

			$(".price_drop_img3").attr("src","http://www.roseonly.com.cn/"+obj[2].imgpath2);
			$(".price_drop_text3").text(obj[2].seriesname);
			$(".price_drop_size3").text(obj[2].proname4Show);
			$(".price_drop_price3").text(obj[2].finalprice);

			$(".price_drop_img4").attr("src","http://www.roseonly.com.cn/"+obj[3].imgpath2);
			$(".price_drop_text4").text(obj[3].seriesname);
			$(".price_drop_size4").text(obj[3].proname4Show);
			$(".price_drop_price4").text(obj[3].finalprice);

			$(".price_drop_img5").attr("src","http://www.roseonly.com.cn/"+obj[4].imgpath2);
			$(".price_drop_text5").text(obj[4].seriesname);
			$(".price_drop_size5").text(obj[4].proname4Show);
			$(".price_drop_price5").text(obj[4].finalprice);

			$(".price_drop_img6").attr("src","http://www.roseonly.com.cn/"+obj[5].imgpath2);
			$(".price_drop_text6").text(obj[5].seriesname);
			$(".price_drop_size6").text(obj[5].proname4Show);
			$(".price_drop_price6").text(obj[5].finalprice);
		}
	})
	//第二页
	$.ajax({
		url:"../data/reseonly.php?type=orderBy&order="+drop+"&categatoryId="+b+"&pageIndex=2",
		success:function(data){
			console.log(data);
			var obj = JSON.parse(data);
			console.log(obj);
			$(".price_drop_img7").attr("src","http://www.roseonly.com.cn/"+obj[0].imgpath2);
			$(".price_drop_text7").text(obj[0].seriesname);
			$(".price_drop_size7").text(obj[0].proname4Show);
			$(".price_drop_price7").text(obj[0].finalprice);

			$(".price_drop_img8").attr("src","http://www.roseonly.com.cn/"+obj[1].imgpath2);
			$(".price_drop_text8").text(obj[1].seriesname);
			$(".price_drop_size8").text(obj[1].proname4Show);
			$(".price_drop_price8").text(obj[1].finalprice);

			$(".price_drop_img9").attr("src","http://www.roseonly.com.cn/"+obj[2].imgpath2);
			$(".price_drop_text9").text(obj[2].seriesname);
			$(".price_drop_size9").text(obj[2].proname4Show);
			$(".price_drop_price9").text(obj[2].finalprice);

			$(".price_drop_img10").attr("src","http://www.roseonly.com.cn/"+obj[3].imgpath2);
			$(".price_drop_text10").text(obj[3].seriesname);
			$(".price_drop_size10").text(obj[3].proname4Show);
			$(".price_drop_price10").text(obj[3].finalprice);

			$(".price_drop_img11").attr("src","http://www.roseonly.com.cn/"+obj[4].imgpath2);
			$(".price_drop_text11").text(obj[4].seriesname);
			$(".price_drop_size11").text(obj[4].proname4Show);
			$(".price_drop_price11").text(obj[4].finalprice);

			$(".price_drop_img12").attr("src","http://www.roseonly.com.cn/"+obj[5].imgpath2);
			$(".price_drop_text12").text(obj[5].seriesname);
			$(".price_drop_size12").text(obj[5].proname4Show);
			$(".price_drop_price12").text(obj[5].finalprice);
		}
	})
	//第三页
	$.ajax({
		url:"../data/reseonly.php?type=orderBy&order="+drop+"&categatoryId="+b+"&pageIndex=3",
		success:function(data){
			console.log(data);
			var obj = JSON.parse(data);
			console.log(obj);
			$(".price_drop_img13").attr("src","http://www.roseonly.com.cn/"+obj[0].imgpath2);
			$(".price_drop_text13").text(obj[0].seriesname);
			$(".price_drop_size13").text(obj[0].proname4Show);
			$(".price_drop_price13").text(obj[0].finalprice);

			$(".price_drop_img14").attr("src","http://www.roseonly.com.cn/"+obj[1].imgpath2);
			$(".price_drop_text14").text(obj[1].seriesname);
			$(".price_drop_size14").text(obj[1].proname4Show);
			$(".price_drop_price14").text(obj[1].finalprice);

			$(".price_drop_img15").attr("src","http://www.roseonly.com.cn/"+obj[2].imgpath2);
			$(".price_drop_text15").text(obj[2].seriesname);
			$(".price_drop_size15").text(obj[2].proname4Show);
			$(".price_drop_price15").text(obj[2].finalprice);

			$(".price_drop_img16").attr("src","http://www.roseonly.com.cn/"+obj[3].imgpath2);
			$(".price_drop_text16").text(obj[3].seriesname);
			$(".price_drop_size16").text(obj[3].proname4Show);
			$(".price_drop_price16").text(obj[3].finalprice);

			$(".price_drop_img17").attr("src","http://www.roseonly.com.cn/"+obj[4].imgpath2);
			$(".price_drop_text17").text(obj[4].seriesname);
			$(".price_drop_size17").text(obj[4].proname4Show);
			$(".price_drop_price17").text(obj[4].finalprice);

			$(".price_drop_img18").attr("src","http://www.roseonly.com.cn/"+obj[5].imgpath2);
			$(".price_drop_text18").text(obj[5].seriesname);
			$(".price_drop_size18").text(obj[5].proname4Show);
			$(".price_drop_price18").text(obj[5].finalprice);
		}
	})
	//第四页
	$.ajax({
		url:"../data/reseonly.php?type=orderBy&order="+drop+"&categatoryId="+b+"&pageIndex=4",
		success:function(data){
			console.log(data);
			var obj = JSON.parse(data);
			console.log(obj);
			$(".price_drop_img19").attr("src","http://www.roseonly.com.cn/"+obj[0].imgpath2);
			$(".price_drop_text19").text(obj[0].seriesname);
			$(".price_drop_size19").text(obj[0].proname4Show);
			$(".price_drop_price19").text(obj[0].finalprice);

			$(".price_drop_img20").attr("src","http://www.roseonly.com.cn/"+obj[1].imgpath2);
			$(".price_drop_text20").text(obj[1].seriesname);
			$(".price_drop_size20").text(obj[1].proname4Show);
			$(".price_drop_price20").text(obj[1].finalprice);

			$(".price_drop_img21").attr("src","http://www.roseonly.com.cn/"+obj[2].imgpath2);
			$(".price_drop_text21").text(obj[2].seriesname);
			$(".price_drop_size21").text(obj[2].proname4Show);
			$(".price_drop_price21").text(obj[2].finalprice);

			$(".price_drop_img22").attr("src","http://www.roseonly.com.cn/"+obj[3].imgpath2);
			$(".price_drop_text22").text(obj[3].seriesname);
			$(".price_drop_size22").text(obj[3].proname4Show);
			$(".price_drop_price22").text(obj[3].finalprice);

			$(".price_drop_img23").attr("src","http://www.roseonly.com.cn/"+obj[4].imgpath2);
			$(".price_drop_text23").text(obj[4].seriesname);
			$(".price_drop_size23").text(obj[4].proname4Show);
			$(".price_drop_price23").text(obj[4].finalprice);

			$(".price_drop_img24").attr("src","http://www.roseonly.com.cn/"+obj[5].imgpath2);
			$(".price_drop_text24").text(obj[5].seriesname);
			$(".price_drop_size24").text(obj[5].proname4Show);
			$(".price_drop_price24").text(obj[5].finalprice);
		}
	})