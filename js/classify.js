var app=angular.module("app",[]);
app.controller('goBack',function($scope){
	//定义返回事件
	$scope.goBack=function(){
		window.history.back();
	}
})

$.ajax({
	url:"../data/reseonly.php?type=categatory",
	success:function(data){
		console.log(data);
		var obj = JSON.parse(data);
		console.log(obj);
		//玫瑰鲜花
		$('#rose_Iong_Box').attr('src',obj.datas[0].proList[0].img);
		$('#rose_In_hand').attr('src',obj.datas[0].proList[1].img);
		$('#Flower_basket_cylinder').attr('src',obj.datas[0].proList[2].img);
		var span =$('<span></span>');
		$('#rose_Iong_Box').after(span);
		span.text(obj.datas[0].proList[0].name);
		var span1 =$('<span></span');
		$('#rose_In_hand').after(span1);
		span1.text(obj.datas[0].proList[1].name);
		var span1 =$('<span></span');
		$('#Flower_basket_cylinder').after(span1);
		span1.text(obj.datas[0].proList[2].name);

		//永生玫瑰
		$('#music_rose').attr('src',obj.datas[1].proList[0].img);
		$('#rose_bear').attr('src',obj.datas[1].proList[1].img);
		$('#rose_box').attr('src',obj.datas[1].proList[2].img);
		$('#rose_side').attr('src',obj.datas[1].proList[3].img);
		$('#rose_heart').attr('src',obj.datas[1].proList[4].img);
		$('#rose_hexagonal').attr('src',obj.datas[1].proList[5].img);
		var span =$('<span></span>');
		$('#music_rose').after(span);
		span.text(obj.datas[1].proList[0].name);
		var span1 =$('<span></span');
		$('#rose_bear').after(span1);
		span1.text(obj.datas[1].proList[1].name);
		var span1 =$('<span></span');
		$('#rose_box').after(span1);
		span1.text(obj.datas[1].proList[2].name);
		var span =$('<span></span>');
		$('#rose_side').after(span);
		span.text(obj.datas[1].proList[3].name);
		var span1 =$('<span></span');
		$('#rose_heart').after(span1);
		span1.text(obj.datas[1].proList[4].name);
		var span1 =$('<span></span');
		$('#rose_hexagonal').after(span1);
		span1.text(obj.datas[1].proList[5].name);

		//玫瑰珍珠
		$('#bracelet').attr('src',obj.datas[2].proList[0].img);
		$('#necklace').attr('src',obj.datas[2].proList[1].img);
		$('#earring').attr('src',obj.datas[2].proList[2].img);
		$('#ring').attr('src',obj.datas[2].proList[3].img);
		$('#bracelet_box').attr('src',obj.datas[2].proList[4].img);
		var span =$('<span></span>');
		$('#bracelet').after(span);
		span.text(obj.datas[2].proList[0].name);
		var span1 =$('<span></span');
		$('#necklace').after(span1);
		span1.text(obj.datas[2].proList[1].name);
		var span1 =$('<span></span');
		$('#earring').after(span1);
		span1.text(obj.datas[2].proList[2].name);
		var span =$('<span></span>');
		$('#ring').after(span);
		span.text(obj.datas[2].proList[3].name);
		var span1 =$('<span></span');
		$('#bracelet_box').after(span1);
		span1.text(obj.datas[2].proList[4].name);

		//珍珠饰品
		$('#bracelet_boxes').attr('src',obj.datas[3].proList[0].img);
		$('#necklace_box').attr('src',obj.datas[3].proList[1].img);
		$('#earring_box').attr('src',obj.datas[3].proList[2].img);
		$('#bracelet_boxx').attr('src',obj.datas[3].proList[3].img);
		var span =$('<span></span>');
		$('#bracelet_boxes').after(span);
		span.text(obj.datas[3].proList[0].name);
		var span1 =$('<span></span');
		$('#necklace_box').after(span1);
		span1.text(obj.datas[3].proList[1].name);
		var span1 =$('<span></span');
		$('#earring_box').after(span1);
		span1.text(obj.datas[3].proList[2].name);
		var span =$('<span></span>');
		$('#bracelet_boxx').after(span);
		span.text(obj.datas[3].proList[3].name);	
	}
 })
