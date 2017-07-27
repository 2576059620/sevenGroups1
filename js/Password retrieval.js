	var rand1 = 0;
	var useRand = 0;
	images = new Array;
	images[1] = new Image();
	images[1].src = "../images/验证码图片.jpg";
	images[2] = new Image();
	images[2].src = "../images/验证码图片a.jpg";
	images[3] = new Image();
	images[3].src = "../images/验证码图片b.jpg";
	function swapPic() {
	var imgnum = images.length - 1;
	do {
	var randnum = Math.random();
	rand1 = Math.round((imgnum - 1) * randnum) + 1;
	} while (rand1 == useRand);
	useRand = rand1;
	document.randimg.src = images[useRand].src;
}
// html中的图片里千万别漏写了 name="randimg"