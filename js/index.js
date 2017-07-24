$.ajax({
	url:"data/reseonly.php?type=home_banner",
	success:function (data) {
		// console.log(data);
		var obj = JSON.parse(data);
		console.log(obj);
		$("#classics").attr("src",+obj.datas[0].path);
		$("#lifetime").attr("src",+obj.datas[1].path);
		$("#classic").attr("src",+obj.datas[2].path);
		$("#constellation").attr("src",+obj.datas[3].path);
		$("#music").attr("src",obj.datas[4].path);
	}
})