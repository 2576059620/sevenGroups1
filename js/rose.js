
// 接收上级界面传递的参数，首先获取当前的url信息
var url = location.href;
console.log(url);
// 然后获取url中问号后的参数信息
var argument = url.split("?")[1];//split:以问号为标志，将字符串切割成一个数组
console.log(argument);
// 再获取参数与值得结合
var char = argument.split("&");
console.log(char);
for (var i = 0; i < char.length; i++) {
	// 在根据等号进行切割，得到参数的值以及参数名
	console.log(char[i].split("=")[0]+":"+char[i].split("=")[1]);
	var num = char[i].split("=")[1];
	console.log(num);
}
$.ajax({
    url:"../data/reseonly.php?type=proDetail&proId="+num,//num是上面所传的id值
    success:function (data) {
    	// console.log(data);
    	var obj =JSON.parse(data);
    	console.log(obj);
    	$(".img1").attr("src","http://www.roseonly.com.cn/"+obj.rollImageList[0].imgpath);
    	$("#img2").attr("src","http://www.roseonly.com.cn/"+obj.rollImageList[1].imgpath);
    	$("#img3").attr("src","http://www.roseonly.com.cn/"+obj.rollImageList[2].imgpath);
    	$(".img4").attr("src","http://www.roseonly.com.cn/"+obj.rollImageList[3].imgpath);
    	$("#text1").text(obj.proname4Show);
    	$("#img5").attr("src","http://www.roseonly.com.cn/"+obj.imgpath);
    	$("#img6").attr("src","http://www.roseonly.com.cn/"+obj.imgpath2);
    	$("#img7").attr("src","http://www.roseonly.com.cn/"+obj.imgpath);
    	$("#img8").attr("src","http://www.roseonly.com.cn/"+obj.imgpath2);
    	$("#img9").attr("src","http://www.roseonly.com.cn/"+obj.detailImageList[0].imgpath);
    	$("#img10").attr("src","http://www.roseonly.com.cn/"+obj.detailImageList[1].imgpath);
    	$("#img11").attr("src","http://www.roseonly.com.cn/"+obj.detailImageList[2].imgpath);
    	$("#img12").attr("src","http://www.roseonly.com.cn/"+obj.detailImageList[3].imgpath);
    	$("#img13").attr("src","http://www.roseonly.com.cn/"+obj.detailImageList[4].imgpath);
    	$("#img14").attr("src","http://www.roseonly.com.cn/"+obj.detailImageList[5].imgpath);
    	$("#img15").attr("src","http://www.roseonly.com.cn/"+obj.detailImageList[6].imgpath);
    	$("#img16").attr("src","http://www.roseonly.com.cn/"+obj.detailImageList[7].imgpath);
    	$(".imgg1").attr("src","http://www.roseonly.com.cn/"+obj.templateProductList[0].imgpath2);
    }
})