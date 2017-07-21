<?php  
	$type = $_REQUEST['type'];
	$str = '';
	if ($type == 'home_banner') {//首页幻灯
		$str = '{
    "status": "1",
    "datas": [
        {
            "path": "upload/indexpic/14658135593752293.jpg",
            "sort": 1,
            "url": "http://www.roseonly.com.cn/list/xianhuameigui.html"
        },
        {
            "path": "upload/indexpic/14924247528765153.jpg",
            "sort": 2,
            "url": "http://www.roseonly.com.cn/list/ysquanshiai.html"
        },
        {
            "path": "upload/indexpic/14373627374249540.jpg",
            "sort": 3,
            "url": "http://www.roseonly.com.cn/list/meiguizhubao.html"
        },
        {
            "path": "upload/indexpic/14980966505496025.jpg",
            "sort": 4,
            "url": "http://www.roseonly.com.cn/list/xingzuo.html"
        },
        {
            "path": "upload/indexpic/14869728064086373.jpg",
            "sort": 5,
            "url": "http://www.roseonly.com.cn/list/yinyuemeigui.html"
        }
    ]
}';
	}elseif ($type == 'home_list') {//首页图片列表
		$str = '{
    "imgData": [
        {
            "id": 12,
            "imgpath": "http://www.roseonly.com.cn/upload/syspic_new/14926819928564558.jpg ",
        },{
            "id": 12,
            "imgpath": "http://www.roseonly.com.cn/upload/syspic_new/14926819928564558.jpg ",
        },{
            "id": 12,
            "imgpath": "http://www.roseonly.com.cn/upload/syspic_new/14926819928564558.jpg ",
        },{
            "id": 12,
            "imgpath": "http://www.roseonly.com.cn/upload/syspic_new/14926819928564558.jpg ",
        },{
            "id": 12,
            "imgpath": "http://www.roseonly.com.cn/upload/syspic_new/14926819928564558.jpg ",
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
            	},	"img":"http://www.roseonly.com.cn/upload/syspic_new/14951809992681068.png",
					"name":"玫瑰方盒",
					"id":20
            	},{
            		"img":"http://www.roseonly.com.cn/upload/syspic_new/14942267563836524.png",
					"name":"玫瑰心o形盒",
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
            	},	"img":"http://www.roseonly.com.cn/upload/syspic_new/14942267671953955.png",
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
            	},	"img":"http://www.roseonly.com.cn/upload/syspic_new/14942267772866849.png",
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