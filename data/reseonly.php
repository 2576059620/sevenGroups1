<?php  
	$type = $_REQUEST['type'];
	$str = '';
	if ($type == 'home_banner') {//首页幻灯
		$str = '{
    "status": "1",
    "datas": [
        {
            "path": "http://www.roseonly.com.cn/upload/indexpic/15011424243925931.jpg",
            "sort": 1,
            "url": "http://www.roseonly.com.cn/m/phone/vip.html"
        },
        {
            "path": "http://www.roseonly.com.cn/upload/indexpic/15008945803714860.jpg",
            "sort": 2,
            "url": "http://www.roseonly.com.cn/m/phone/gaoduandingzhi.html"
        },
        {
            "path": "http://www.roseonly.com.cn/upload/indexpic/14658135593752293.jpg",
            "sort": 3,
            "url": "http://www.roseonly.com.cn/list/xianhuameigui.html"
        },
         {
            "path": "http://www.roseonly.com.cn/upload/indexpic/14924247528765153.jpg",
            "sort": 4,
            "url": "http://www.roseonly.com.cn/list/xingzuo.html"
        },
        {
            "path": "http://www.roseonly.com.cn/upload/indexpic/14373627374249540.jpg",
            "sort": 5,
            "url": "http://www.roseonly.com.cn/list/meiguizhubao.html"
        },
        {
            "path": "http://www.roseonly.com.cn/upload/indexpic/15009491016946335.jpg",
            "sort": 6,
            "url": "http://www.roseonly.com.cn/list/xingzuo.html"
        }
    ]
}';
	}elseif ($type == 'home_list') {//首页图片列表
		$str = '{
    "imgData": [
        {
            "id": 12,
            "imgpath": "http://www.roseonly.com.cn/upload/syspic_new/14926819928564558.jpg "
        },{
            "id": 2079,
            "imgpath": "http://www.roseonly.com.cn/upload/syspic_new/14926819983412101.jpg "
        },{
            "id": 3850,
            "imgpath": "http://www.roseonly.com.cn/upload/syspic_new/14926820030739066.jpg "
        },{
            "id": 445,
            "imgpath": "http://www.roseonly.com.cn/upload/syspic_new/14926820072273496.jpg "
        },{
            "id": 3114,
            "imgpath": "http://www.roseonly.com.cn/upload/syspic_new/14926820123133201.jpg "
        },{
            "id": 518,
            "imgpath": "http://www.roseonly.com.cn/upload/syspic_new/14996675080317391.jpg "
        },{
            "id": 4078,
            "imgpath": "http://www.roseonly.com.cn/upload/syspic_new/14943265161727486.jpg "
        },{
            "id": 248,
            "imgpath": "http://www.roseonly.com.cn/upload/syspic_new/14996675576987868.jpg "
        },{
            "id": 3843,
            "imgpath": "http://www.roseonly.com.cn/upload/syspic_new/14993982575099517.jpg "
        },{
            "id": 3071,
            "imgpath": "http://www.roseonly.com.cn/upload/syspic_new/14993982707468323.jpg "
        },{
            "id": 4174,
            "imgpath": "http://www.roseonly.com.cn/upload/syspic_new/14993982757226001.jpg "
        },{
            "id": 4132,
            "imgpath": "http://www.roseonly.com.cn/upload/syspic_new/14993997897579881.jpg "
        },{
            "id": 3877,
            "imgpath": "http://www.roseonly.com.cn/upload/syspic_new/14993982871101167.jpg "
        },{
            "id": 4025,
            "imgpath": "http://www.roseonly.com.cn/upload/syspic_new/14954407790694228.jpg "
        },{
            "id": 3849,
            "imgpath": "http://www.roseonly.com.cn/upload/syspic_new/14981290095615609.jpg "
        },{
            "id": 3805,
            "imgpath": "http://www.roseonly.com.cn/upload/syspic_new/14981288278515913.jpg "
        },{
            "id": 4180,
            "imgpath": "http://www.roseonly.com.cn/upload/syspic_new/14979263683516358.jpg "
        },{
            "id": 4186,
            "imgpath": "http://www.roseonly.com.cn/upload/syspic_new/14992467632301508.jpg "
        },{
            "id": 4172,
            "imgpath": "http://www.roseonly.com.cn/upload/syspic_new/14979263828865521.jpg "
        },{
            "id": 3245,
            "imgpath": "http://www.roseonly.com.cn/upload/syspic_new/14926820794091309.jpg "
        },{
            "id": 3562,
            "imgpath": "http://www.roseonly.com.cn/upload/syspic_new/14926820843497771.jpg "
        },{
            "id": 3718,
            "imgpath": "http://www.roseonly.com.cn/upload/syspic_new/14926820894497164.jpg "
        },{
            "id": 3991,
            "imgpath": "http://www.roseonly.com.cn/upload/syspic_new/14926820940403606.jpg "
        },{
            "id": 2771,
            "imgpath": "http://www.roseonly.com.cn/upload/syspic_new/14926820992106605.jpg "
        },{
            "id": 3608,
            "imgpath": "http://www.roseonly.com.cn/upload/syspic_new/14926821038851199.jpg "
        },{
            "id": 4164,
            "imgpath": "http://www.roseonly.com.cn/upload/syspic_new/14980986185853973.jpg "
        },{
            "id": 3150,
            "imgpath": "http://www.roseonly.com.cn/upload/syspic_new/14980982359499183.jpg "
        },{
            "id": 3638,
            "imgpath": "http://www.roseonly.com.cn/upload/syspic_new/14980987640116653.jpg "
        },{
            "id": 3790,
            "imgpath": "http://www.roseonly.com.cn/upload/syspic_new/14926821971213717.jpg "
        },{
            "id": 79,
            "imgpath": "http://www.roseonly.com.cn/upload/syspic_new/14981015506213628.jpg "
        },{
            "id": 3477,
            "imgpath": "http://www.roseonly.com.cn/upload/syspic_new/14926822191003043.jpg "
        },{
            "id": 3787,
            "imgpath": "http://www.roseonly.com.cn/upload/syspic_new/14926822338455926.jpg "
        },{
            "id": 3817, 
            "imgpath": "http://www.roseonly.com.cn/upload/syspic_new/14926822878985199.jpg "
        },{
            "id": 2673,
            "imgpath": "http://www.roseonly.com.cn/upload/syspic_new/14997607851013324.jpg "
        },{
            "id": 3606,
            "imgpath": "http://www.roseonly.com.cn/upload/syspic_new/14926823026804140.jpg "
        },{
            "id": 3604,
            "imgpath": "http://www.roseonly.com.cn/upload/syspic_new/14926823101004424.jpg "
        },{
            "id": 3221,
            "imgpath": "http://www.roseonly.com.cn/upload/syspic_new/14926823174275167.jpg "
        },{
            "id": 3815,
            "imgpath": "http://www.roseonly.com.cn/upload/syspic_new/14926823230835287.jpg "
        },{
            "id": 3940,
            "imgpath": "http://www.roseonly.com.cn/upload/syspic_new/14926823692403036.jpg "
        },{
            "id": 4032,
            "imgpath": "http://www.roseonly.com.cn/upload/syspic_new/14926823814989634.jpg "
        },{
            "id": 3273,
            "imgpath": "http://www.roseonly.com.cn/upload/syspic_new/14926823910469252.jpg "
        },{
            "id": 3687,
            "imgpath": "http://www.roseonly.com.cn/upload/syspic_new/14926823990024846.jpg "
        },{
            "id": 4132,
            "imgpath": "http://www.roseonly.com.cn/upload/syspic_new/14993997897579881.jpg "
        },{
            "id": 16,
            "imgpath": "http://www.roseonly.com.cn/upload/syspic_new/14926824612689024.jpg "
        },{
            "id": 17,
            "imgpath": "http://www.roseonly.com.cn/upload/syspic_new/14926824684094711.jpg "
        },{
            "id": 41,
            "imgpath": "http://www.roseonly.com.cn/upload/syspic_new/14926824748269944.jpg "
        },{
            "id": 10,
            "imgpath": "http://www.roseonly.com.cn/upload/syspic_new/14951776083919906.jpg "
        },{
            "id": 14,
            "imgpath": "http://www.roseonly.com.cn/upload/syspic_new/14982044580889021.jpg "
        },{
            "id": 4131,
            "imgpath": "http://www.roseonly.com.cn/upload/syspic_new/14982044717205939.jpg "
        },{
            "id": 3906,
            "imgpath": "http://www.roseonly.com.cn/upload/syspic_new/14982044759142220.jpg "
        },{
            "id": 3594,
            "imgpath": "http://www.roseonly.com.cn/upload/syspic_new/14982049040237985.jpg "
        },{
            "id": 3986,
            "imgpath": "http://www.roseonly.com.cn/upload/syspic_new/14982044832116763.jpg "
        },{
            "id": 3073,
            "imgpath": "http://www.roseonly.com.cn/upload/syspic_new/14982044866948856.jpg "
        },{
            "id": 4027,
            "imgpath": "http://www.roseonly.com.cn/upload/syspic_new/14926828287831410.jpg "
        }
    ]
}';

	}elseif ($type == "proDetail") {//商品详情
		$proId = $_REQUEST['proId'];
		$str = file_get_contents('http://www.roseonly.com.cn/pages/HtmlMobile/detail.htm?id='.$proId);
	}elseif ($type == 'categatory') {//分类
			$str = '{
    "status": "1",
    "datas": [
        {
            "title": "鲜花玫瑰",
            "id": 16,
            "proList":[
            	{
            		"img":"http://www.roseonly.com.cn/upload/syspic_new/14942267416905823.png",
					"name":"玫瑰长盒",
					"id":9
            	},{
            		"img":"http://www.roseonly.com.cn/upload/syspic_new/14963841266376537.jpg",
					"name":"玫瑰手捧",
					"id":9
            	},{
            		"img":"http://www.roseonly.com.cn/upload/syspic_new/14963859539773299.jpg",
					"name":"花篮圆桶",
					"id":9
            	}
				
            ]
        },
        {
            "title": "鲜花玫瑰",
            "id": 20,
            "proList":[
            	{
            		"img":"http://www.roseonly.com.cn/upload/syspic_new/14942267490675185.png",
					"name":"音乐玫瑰",
					"id":20
            	},{
            		"img":"http://www.roseonly.com.cn/upload/syspic_new/14948337557327304.png",
					"name":"玫瑰熊",
					"id":20
            	},{
            		"img":"http://www.roseonly.com.cn/upload/syspic_new/14942267508632013.png",
					"name":"玫瑰圆盒",
					"id":20
            	},{	"img":"http://www.roseonly.com.cn/upload/syspic_new/14951809992681068.png",
					"name":"玫瑰方盒",
					"id":20
            	},{
            		"img":"http://www.roseonly.com.cn/upload/syspic_new/14942267563836524.png",
					"name":"玫瑰心形盒",
					"id":20
            	},{
            		"img":"http://www.roseonly.com.cn/upload/syspic_new/14942267581443008.png",
					"name":"玫瑰六角盒",
					"id":20
            	}
				
            ]
        },
        {
            "title": "鲜花玫瑰",
            "id": 17,
            "proList":[
            	{
            		"img":"http://www.roseonly.com.cn/upload/syspic_new/14942267598827051.png",
					"name":"手链",
					"id":17
            	},{
            		"img":"http://www.roseonly.com.cn/upload/syspic_new/14951777940049440.png",
					"name":"项链",
					"id":17
            	},{
            		"img":"http://www.roseonly.com.cn/upload/syspic_new/14942267649481948.png",
					"name":"耳饰",
					"id":17
            	},{	"img":"http://www.roseonly.com.cn/upload/syspic_new/14942267671953955.png",
					"name":"戒指",
					"id":17
            	},{
            		"img":"http://www.roseonly.com.cn/upload/syspic_new/14951778191095018.png",
					"name":"手镯",
					"id":17
            	}
            ]
        },
        {
            "title": "鲜花玫瑰",
            "id": 41,
            "proList":[
            	{
            		"img":"http://www.roseonly.com.cn/upload/syspic_new/14942267693203946.png",
					"name":"手链",
					"id":41
            	},{
            		"img":"http://www.roseonly.com.cn/upload/syspic_new/14942267713929421.png",
					"name":"项链",
					"id":41
            	},{
            		"img":"http://www.roseonly.com.cn/upload/syspic_new/14942267742611593.png",
					"name":"耳饰",
					"id":41
            	},{	"img":"http://www.roseonly.com.cn/upload/syspic_new/14942267772866849.png",
					"name":"手镯",
					"id":41
            	}
            ]
        }
    ]
}';
	}elseif ($type == 'categatory_list') {//分类-商品列表:鲜花玫瑰：16，永生玫瑰：20，玫瑰珠宝：17，玫瑰饰品：41，玫瑰长盒：9
		$categatoryId = $_REQUEST['categatoryId'];
		$pageIndex = $_REQUEST['pageIndex'];
		$str = file_get_contents('http://www.roseonly.com.cn/pages/HtmlMobile/productListWithRollImageOne1.htm?formtype=0&id='.$categatoryId.'&p='.$pageIndex.'&t=y&sort=');
	}elseif ($type == 'orderBy') {
		$order = $_REQUEST['order'];//销量：ps.allnum+desc 价格升序p.finalprice+asc 降序p.finalprice+desc 最新：p.id+desc   热卖：热卖
		$categatoryId = $_REQUEST['categatoryId'];
		$pageIndex = $_REQUEST['pageIndex'];
		$str = file_get_contents('http://www.roseonly.com.cn/pages/HtmlMobile/productListWithRollImageOne1.htm?formtype=0&id='.$categatoryId.'&p='.$pageIndex.'&t=y&sort='.$order);

	}
	echo "$str";
?>